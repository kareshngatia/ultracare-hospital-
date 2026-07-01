import React, { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hello! I am your PEJMED digital assistant. How can I guide your clinical inquiries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/v1/chatbot/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, my server connection dropped momentarily. Please check back or call 0702 761 696.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Active Floating Toggle Bubble */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-hospital-teal hover:bg-hospital-teal/95 text-white p-4 rounded-full shadow-2xl transition-all active:scale-95 text-2xl flex items-center justify-center animate-bounce duration-1000"
        >
          💬
        </button>
      )}

      {/* Main Chat Interface Window */}
      {isOpen && (
        <div className="w-80 md:w-96 h-125 bg-white rounded-3xl shadow-2xl border border-neutral-200/80 flex flex-col overflow-hidden transition-all">
          
          {/* Header Banner */}
          <div className="bg-neutral-950 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
              <div>
                <h4 className="font-heading font-bold text-sm">PEJMED Digital Support</h4>
                <p className="text-[10px] text-neutral-400">Automated Level 4 Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-xl text-neutral-400 hover:text-white transition-colors p-1">✕</button>
          </div>

          {/* Clinical Disclaimer Flag */}
          <div className="bg-red-50 border-b border-red-100 p-2 text-center text-[10px] font-semibold text-red-600 uppercase tracking-wider">
            🚨 AI Assistant — For Emergency call 0702 761 696
          </div>

          {/* Message Thread Hub */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-neutral-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-hospital-teal text-white rounded-br-none' 
                    : 'bg-white text-neutral-800 border border-neutral-200/60 rounded-bl-none shadow-xs'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2.5 rounded-2xl text-xs text-neutral-400 border border-neutral-200/40 animate-pulse">
                  Typing system response...
                </div>
              </div>
            )}
          </div>

          {/* Input Submission Area */}
          <form onSubmit={sendMessage} className="p-3 border-t border-neutral-100 bg-white flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about insurance, location, clinics..."
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 outline-none focus:bg-white focus:border-hospital-teal transition-all"
            />
            <button type="submit" className="bg-neutral-950 text-white px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}