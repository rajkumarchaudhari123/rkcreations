"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX,
  Share2, 
  RefreshCw, 
  Bot, 
  User, 
  MessageSquare, 
  Zap, 
  ArrowRight,
  Smile,
  Briefcase,
  MessageCircle,
  Heart
} from "lucide-react";

// Pre-computed particle positions for deterministic rendering (no hydration mismatch)
const PARTICLES = [
  { left: 15, top: 12, yEnd: -40, xEnd: 25, duration: 4.2 },
  { left: 80, top: 20, yEnd: 30, xEnd: -20, duration: 3.8 },
  { left: 35, top: 75, yEnd: -25, xEnd: 30, duration: 4.5 },
  { left: 70, top: 60, yEnd: 35, xEnd: -35, duration: 5.1 },
  { left: 10, top: 85, yEnd: -45, xEnd: 15, duration: 3.6 },
  { left: 90, top: 70, yEnd: 25, xEnd: -25, duration: 4.8 },
];

export default function ChatAI() {
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("Funny");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [history, setHistory] = useState<Array<{ sender: "user" | "ai"; text: string; time: string }>>([]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize Speech Synthesis
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isLoading]);

  const tones = [
    { id: "Funny", label: "Funny", icon: <Smile className="w-4 h-4" />, color: "from-amber-400 to-orange-500", desc: "Hilarious Hinglish" },
    { id: "Professional", label: "Professional", icon: <Briefcase className="w-4 h-4" />, color: "from-blue-400 to-cyan-500", desc: "Polite & Executive" },
    { id: "Casual", label: "Casual", icon: <MessageCircle className="w-4 h-4" />, color: "from-emerald-400 to-teal-500", desc: "Friendly & Cool" },
    { id: "Friendly", label: "Friendly", icon: <Heart className="w-4 h-4" />, color: "from-rose-400 to-pink-500", desc: "Sweet & Caring" }
  ];

  const generateReply = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    setReply("");
    
    // Stop any playing speech
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
    }

    const currentMessage = message;
    setMessage(""); // clear input

    // Add user message to history
    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setHistory(prev => [...prev, { sender: "user", text: currentMessage, time: userTime }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage, tone }),
      });

      const data = await res.json();
      const aiReply = data.reply;
      setReply(aiReply);

      // Add AI reply to history
      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setHistory(prev => [...prev, { sender: "ai", text: aiReply, time: aiTime }]);
    } catch (error) {
      console.error("Error:", error);
      const fallback = "Oops! Network error. Please try again.";
      setReply(fallback);
      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setHistory(prev => [...prev, { sender: "ai", text: fallback, time: aiTime }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!reply) return;
    navigator.clipboard.writeText(reply);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareReply = () => {
    if (!reply) return;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(reply)}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleSpeech = () => {
    if (!reply || !synthRef.current) return;

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
      return;
    }

    // Try using Indian English or general voice for Hinglish style
    const utterance = new SpeechSynthesisUtterance(reply);
    utteranceRef.current = utterance;
    
    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    setIsPlaying(true);
    synthRef.current.speak(utterance);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, p.yEnd],
              x: [0, p.xEnd],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-cyan-400 font-semibold tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> AI REPLY GENERATOR
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Smart & Stylish
            <span className="block text-cyan-400 mt-2">Hinglish AI Replies</span>
          </h1>

          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Input any text, select your preferred tone, and let our AI engine craft the perfect,
            engaging Hinglish response instantly!
          </p>
        </motion.div>

        {/* Main Grid: Chat Console + Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tone Selector & Input (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Tone Selector Card */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                Select Tone
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {tones.map((t) => {
                  const isActive = tone === t.id;
                  return (
                    <motion.button
                      key={t.id}
                      onClick={() => setTone(t.id)}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-br ${t.color} border-transparent text-white shadow-lg`
                          : "bg-blue-950/40 border-blue-400/20 text-blue-200 hover:bg-blue-900/40 hover:border-blue-300/40"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={isActive ? "text-white" : "text-cyan-300"}>
                          {t.icon}
                        </span>
                        <span className="font-bold text-sm">{t.label}</span>
                      </div>
                      <p className={`text-[10px] ${isActive ? "text-white/80" : "text-blue-300/60"}`}>
                        {t.desc}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Input Card */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Your Message
              </h3>
              
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here... (e.g. 'Bhai party kab de rha h?')"
                className="w-full h-32 px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-400/30 text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none text-sm leading-relaxed"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    generateReply();
                  }
                }}
              />

              <motion.button
                onClick={generateReply}
                disabled={isLoading || !message.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Thinking...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Generate AI Reply
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Gorgeous Chat Output Console (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col h-[500px] relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-400/30 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl"
          >
            {/* Console Header */}
            <div className="px-6 py-4 border-b border-blue-400/20 bg-blue-950/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyan-300 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">RK Creations AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                    <span className="text-[10px] text-green-300">Ready to response</span>
                  </div>
                </div>
              </div>

              {/* Utility shortcuts */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setHistory([])}
                  className="p-2 rounded-lg bg-blue-900/40 hover:bg-blue-800/40 text-blue-200 hover:text-white transition-colors text-xs font-semibold"
                  title="Clear Chat History"
                >
                  Clear History
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
              {history.length === 0 && !isLoading && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 border border-blue-400/20 flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-cyan-400/60" />
                  </div>
                  <p className="text-white font-bold mb-1">No messages yet</p>
                  <p className="text-blue-200/60 text-sm max-w-sm">
                    Enter a message in the input box on the left, select a tone, and press Send to see AI magic!
                  </p>
                </div>
              )}

              {history.map((chat, index) => {
                const isUser = chat.sender === "user";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"} items-end gap-2`}
                  >
                    {!isUser && (
                      <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-cyan-300" />
                      </div>
                    )}
                    
                    <div className="flex flex-col max-w-[80%]">
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          isUser
                            ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-br-none"
                            : "bg-blue-950/60 border border-blue-400/30 text-blue-100 rounded-bl-none shadow-md"
                        }`}
                      >
                        <p>{chat.text}</p>
                      </div>
                      <span className={`text-[10px] text-blue-300/40 mt-1 ${isUser ? "text-right" : "text-left"}`}>
                        {chat.time}
                      </span>
                    </div>

                    {isUser && (
                      <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-blue-300" />
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Loader animation when thinking */}
              {isLoading && (
                <div className="flex justify-start items-end gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-cyan-300 animate-spin" />
                  </div>
                  <div className="flex flex-col">
                    <div className="px-4 py-3 rounded-2xl bg-blue-950/60 border border-blue-400/30 text-blue-200 rounded-bl-none flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* AI Response Action Panel (Only shows when reply exists) */}
            <AnimatePresence>
              {reply && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="p-4 border-t border-blue-400/20 bg-blue-950/70 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                    <span className="text-xs text-yellow-200 font-semibold">
                      Latest generated in {tone} tone
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Speak Button */}
                    <motion.button
                      onClick={toggleSpeech}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs font-bold transition-all ${
                        isPlaying
                          ? "bg-rose-500/20 border-rose-500/30 text-rose-300"
                          : "bg-blue-900/40 border-blue-400/20 text-blue-200 hover:text-white"
                      }`}
                      title={isPlaying ? "Stop Voice Narration" : "Listen in Voice"}
                    >
                      {isPlaying ? (
                        <>
                          <VolumeX className="w-4 h-4" /> Stop
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 animate-pulse" /> Listen
                        </>
                      )}
                    </motion.button>

                    {/* Copy Button */}
                    <motion.button
                      onClick={copyToClipboard}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs font-bold transition-all ${
                        isCopied
                          ? "bg-green-500/20 border-green-500/30 text-green-300"
                          : "bg-blue-900/40 border-blue-400/20 text-blue-200 hover:text-white"
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Copy Reply
                        </>
                      )}
                    </motion.button>

                    {/* Share on WhatsApp */}
                    <motion.button
                      onClick={shareReply}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-lg bg-green-600 hover:bg-green-500 text-white flex items-center gap-2 text-xs font-bold transition-all"
                      title="Share to WhatsApp"
                    >
                      <Share2 className="w-4 h-4" /> Share
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}