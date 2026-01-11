import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Map, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Namaste! I am the Academy Assistant. Ask me about our specialized Kids Training, female trainers, schedule, fees, or location.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Initialize GenAI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const modelId = "gemini-3-flash-preview";
      
      const systemInstruction = `
        You are the helpful AI assistant for the "Shaolin Martial Arts Academy".
        
        **Important Contact Info:**
        - **Address:** C wg, Banquet, SIERRA TOWER, near Domino's, Alica Nagar, Lokhandwala Twp, Kandivali East, Mumbai, Maharashtra 400101.
        - **Phone:** +91 87796 35047
        - **Head Master:** Ashish Rajak (7 years exp, 4+ years business).
        - **Female Trainer:** We have a certified female trainer with 4 years of experience.
        
        **Key Highlights:**
        - Specialized Kids Warrior Training.
        - Associated with "Ancient Martial Arts Foundation".
        - 300+ Students, 110+ Reviews.
        - Certifications available.
        
        Your goal is to encourage users to visit for a free trial or call +91 87796 35047.
        
        **Classes:**
        1. Kids Warrior Training
        2. Shaolin Kung Fu
        3. MMA
        
        **Fees (approx):** 
        - 3000 INR / month (3 days/week).
        - 5000 INR / month (6 days/week).
        
        If asked for location, provide the address and this map link: https://maps.app.goo.gl/xXRZuNm7GL7daZC77
      `;
      
      const response = await ai.models.generateContent({
        model: modelId,
        contents: [
            ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: systemInstruction,
          tools: [{ googleMaps: {} }],
        }
      });

      // Extract text
      const responseText = response.text || "I apologize, I couldn't process that request right now. Please call us at +91 87796 35047.";

      // Extract grounding metadata (Maps links)
      let groundingLinks: Array<{ title: string, uri: string }> = [];
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      
      if (groundingChunks) {
        groundingChunks.forEach((chunk: any) => {
          if (chunk.web && chunk.web.uri) {
             groundingLinks.push({ title: chunk.web.title || "Web Link", uri: chunk.web.uri });
          }
        });
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        groundingLinks: groundingLinks.length > 0 ? groundingLinks : undefined
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting. Please call us directly at 87796 35047."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-shaolin-red hover:bg-red-700 hover:scale-110'
        }`}
      >
        {isOpen ? <X className="text-white" /> : <MessageCircle className="text-white w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[500px] bg-shaolin-dark border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-shaolin-red to-red-800 p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Shaolin Assistant
              </h3>
              <p className="text-xs text-red-100">Online | Call: 8779635047</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <Minimize2 size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-shaolin-red text-white rounded-br-none'
                      : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.groundingLinks && msg.groundingLinks.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-1">
                      {msg.groundingLinks.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.uri} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs text-blue-300 hover:underline"
                        >
                          <Map size={12} />
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-2xl rounded-bl-none p-3 border border-gray-700">
                  <Loader2 className="w-5 h-5 animate-spin text-shaolin-gold" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a question..."
                className="flex-1 bg-gray-900 text-white border border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-shaolin-red"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-shaolin-red p-2 rounded-full text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;