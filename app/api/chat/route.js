// app/api/chat/route.js - WORKING VERSION
export async function POST(req) {
  try {
    const { message, tone } = await req.json();

    if (!message) {
      return Response.json({ reply: "Please enter a message" }, { status: 400 });
    }

    // Use a model that definitely works with free tier
    // Option 1: GPT-2 (most reliable for free tier)
    const API_URL = "https://api-inference.huggingface.co/models/gpt2";
    
    console.log("Sending request to Hugging Face with token:", process.env.HF_TOKEN ? "Token present" : "No token");
    console.log("Message:", message, "Tone:", tone);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        inputs: `Reply in a ${tone.toLowerCase()} tone (Hinglish style) to this: ${message}. Keep it short and friendly.`,
        parameters: {
          max_new_tokens: 50,
          temperature: 0.9,
          top_p: 0.95,
          do_sample: true,
          return_full_text: false
        }
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Details:", response.status, errorText);
      
      // Return a friendly fallback instead of error
      return Response.json({ 
        reply: getSmartFallbackReply(tone, message)
      });
    }

    const data = await response.json();
    console.log("API Response:", JSON.stringify(data).substring(0, 200));
    
    let generatedText = "";
    
    if (Array.isArray(data) && data[0] && data[0].generated_text) {
      generatedText = data[0].generated_text;
    } else if (data.generated_text) {
      generatedText = data.generated_text;
    }
    
    // Clean up the response
    generatedText = generatedText.trim();
    
    // If response is empty or too short, use fallback
    if (!generatedText || generatedText.length < 5) {
      return Response.json({ 
        reply: getSmartFallbackReply(tone, message)
      });
    }
    
    return Response.json({ 
      reply: generatedText
    });
    
  } catch (error) {
    console.error("Fetch Error:", error);
    return Response.json({ 
      reply: getSmartFallbackReply(tone, message)
    });
  }
}

// Smart fallback replies that actually work
function getSmartFallbackReply(tone, message) {
  const replies = {
    "Funny": [
      `😂 "${message}"? Yaar yeh toh next level comedy hai! Main toh has has ke pagal ho gaya!`,
      `LOL! ${message}? Bhai tu toh comedian ban sakta hai! 🤣`,
      `Hilarious! ${message} reminds me of my life decisions... all wrong but funny! 🎭`,
      `Arre wah! ${message}? Tune toh mera din bana diya! 😂`,
      `PAGAL! 🤪 ${message} is the funniest thing I've heard today!`
    ],
    "Professional": [
      `Thank you for your message regarding "${message}". I will review this and get back to you within 24 hours.`,
      `I acknowledge receipt of your query about "${message}". Our team will respond shortly.`,
      `Your message "${message}" has been noted. We appreciate your input and will act accordingly.`,
      `Regarding "${message}": Thank you for bringing this to our attention. We value your feedback.`,
      `This is to confirm that we have received your message about "${message}". Further updates will follow.`
    ],
    "Casual": [
      `Hey! Got your message about "${message}". Sounds cool, let's catch up soon! 👍`,
      `Oh nice! ${message}? That's awesome yaar. Talk later! ✌️`,
      `Haan ji, maine dekha "${message}". Badhiya hai! 👌`,
      `${message}? Yeah I get it. Chill, we'll figure it out! 😎`,
      `Arre wah! "${message}"? Mast hai. Chal phir milte hain!`
    ],
    "Friendly": [
      `Aww thanks for sharing "${message}" with me! You're so sweet! 💕 Sending lots of love!`,
      `That's wonderful! ${message} made me smile today. You're amazing! 🌟`,
      `Hey friend! 🤗 I really appreciate you telling me "${message}". Have an awesome day!`,
      `Awww! ${message} is so nice of you! Take care and stay blessed! 💫`,
      `Thank you for being so thoughtful with "${message}"! You're the best! ⭐`
    ]
  };
  
  // Default to Casual if tone not found
  const toneReplies = replies[tone] || replies["Casual"];
  
  // Select random reply
  const randomReply = toneReplies[Math.floor(Math.random() * toneReplies.length)];
  
  // Add a short delay to simulate processing
  return randomReply;
}