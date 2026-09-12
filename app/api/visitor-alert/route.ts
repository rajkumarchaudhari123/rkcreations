import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Read payload or fallback to request headers
    const body = await req.json().catch(() => ({}));
    const pageUrl = body.url || "Home Page";

    // Extract IP from request headers
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "Unknown IP";

    const userAgent = req.headers.get("user-agent") || "Unknown Device";

    // Detect device type simple parser
    let deviceType = "💻 Desktop / PC";
    if (/mobile/i.test(userAgent)) {
      deviceType = "📱 Mobile (Android/iPhone)";
    } else if (/tablet|ipad/i.test(userAgent)) {
      deviceType = "📱 Tablet / iPad";
    }

    // Geolocation lookup via ip-api
    let locationStr = "Location Unknown";
    if (ip && ip !== "Unknown IP" && !ip.startsWith("127.") && !ip.startsWith("192.") && ip !== "::1") {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city,query`, {
          next: { revalidate: 3600 },
        });
        const geoData = await geoRes.json();
        if (geoData.status === "success") {
          locationStr = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
        }
      } catch (err) {
        console.error("Geo lookup error:", err);
      }
    }

    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const alertMessage = 
      `🚨 *NEW WEBSITE VISITOR ALERT!*\n\n` +
      `🌐 *Page:* ${pageUrl}\n` +
      `📍 *Location:* ${locationStr}\n` +
      `💻 *Device:* ${deviceType}\n` +
      `⏰ *Time:* ${currentTime}\n` +
      `🔗 *IP:* \`${ip}\``;

    // Send to Telegram if credentials are set
    if (botToken && chatId) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: alertMessage,
          parse_mode: "Markdown",
        }),
      });
    }

    return NextResponse.json({ success: true, message: "Visitor tracked" });
  } catch (error) {
    console.error("Visitor alert tracking error:", error);
    return NextResponse.json({ success: false, error: "Tracking failed" }, { status: 500 });
  }
}
