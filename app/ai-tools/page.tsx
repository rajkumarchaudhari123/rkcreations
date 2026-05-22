// app/ai-tools/page.js
"use client";  // This MUST be at the top

import { useState } from "react";

// Make sure this is a proper component
export default function ChatAI() {  // ← DEFAULT EXPORT is here
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("Funny");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateReply = async () => {
    setIsLoading(true);
    setReply("");
    
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, tone }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (error) {
      console.error("Error:", error);
      setReply("Failed to connect. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Reply Generator</h1>

      <textarea
        className="w-full p-2 border rounded"
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
        rows={4}
      />

      <select
        className="mt-2 p-2 border rounded"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        disabled={isLoading}
      >
        <option value="Funny">😄 Funny</option>
        <option value="Professional">💼 Professional</option>
        <option value="Casual">👋 Casual</option>
        <option value="Friendly">🤝 Friendly</option>
      </select>

      <button
        onClick={generateReply}
        disabled={isLoading || !message}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300 hover:bg-blue-700 transition"
      >
        {isLoading ? "Generating..." : "Generate Reply"}
      </button>

      {reply && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <strong>Reply:</strong>
          <p className="mt-1">{reply}</p>
        </div>
      )}
    </div>
  );
}