'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface ChatbotProps {
  className?: string;
}

export default function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all hover:bg-blue-600 hover:scale-110 active:scale-95 ${isOpen ? 'scale-90' : 'animate-pulse-gentle'} ${className || ''}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-8 z-50 h-[600px] w-[400px] rounded-2xl bg-[#1E1E1E] border border-[#2A2A2A] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out origin-bottom-right ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#2A2A2A]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
            <Sparkles className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Harsha's AI Agent</h3>
            <p className="text-xs text-gray-400">Ask me anything</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 text-sm py-8 px-4">
              <Sparkles className="h-8 w-8 mx-auto mb-3 text-blue-400" />
              <p className="mb-6">Ask me anything about Harsha's work!</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['What is his design philosophy?', 'Tell me about Aarna', 'Does he know React?', 'How does he approach AI UX?'].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleInputChange({ target: { value: q } } as any)}
                    className="text-xs bg-[#2A2A2A] hover:bg-[#333] border border-[#333] rounded-full px-3 py-1.5 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#2A2A2A] text-gray-200'
                  }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#2A2A2A] rounded-lg px-4 py-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-[#2A2A2A]">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about my work..."
              className="flex-1 rounded-lg border border-[#2A2A2A] bg-[#0F0F0F] px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
