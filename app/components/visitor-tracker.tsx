"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function VisitorTracker() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Send Telegram alert once per session
    const hasAlerted = sessionStorage.getItem("rk_visitor_alerted");
    if (!hasAlerted) {
      sessionStorage.setItem("rk_visitor_alerted", "true");
      
      fetch("/api/visitor-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: window.location.href }),
      }).catch((err) => console.log("Visitor tracking silent error:", err));
    }
  }, []);

  return (
    <>
      {/* Google Analytics 4 Script Integration */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}
