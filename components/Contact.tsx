import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Sparkles, X } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToStylist } from '../services/geminiService';

export const Contact: React.FC = () => {
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour! I'm Aria, your personal stylist at AMON. How can I assist you in finding your perfect swimwear today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isChatOpen]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await sendMessageToStylist(userMsg);
      setChatMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setChatMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having trouble connecting to the styling server." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-sand-100 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="w-full md:w-5/12 bg-stone-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl mb-6">Contact Us</h3>
              <p className="text-stone-400 font-light mb-8">
                For inquiries regarding sizing, custom orders, or press, please reach out.
              </p>
              
              <div className="space-y-4 text-sm tracking-wide">
                <p>ANNE@AMONSWIMWEAR.COM</p>
                <p>HØIEVEGEN, NORWAY</p>
              </div>
            </div>
            <div className="mt-12">
               <p className="text-gold-500 text-xs uppercase tracking-widest">Follow Us</p>
               <div className="flex gap-4 mt-4">
                 <span className="cursor-pointer hover:text-gold-500">Instagram</span>
                 <span className="cursor-pointer hover:text-gold-500">Pinterest</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-7/12 p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <Sparkles size={48} className="text-gold-500 mb-4" />
                <h3 className="font-serif text-2xl mb-2">Message Sent</h3>
                <p className="text-stone-500">Thank you. Anne Marie's team will be in touch shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 bg-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 bg-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 bg-transparent resize-none transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors duration-300 w-full md:w-auto"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating Stylist Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isChatOpen && (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-gold-500 text-white p-4 rounded-full shadow-lg hover:bg-gold-600 transition-all hover:scale-105 flex items-center gap-2 pr-6"
          >
            <Sparkles size={20} />
            <span className="font-serif italic text-sm">Ask Aria, AI Stylist</span>
          </button>
        )}
      </div>

      {/* Chat Interface Modal */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[380px] h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-stone-100 animate-slide-up">
          {/* Chat Header */}
          <div className="bg-stone-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
               <div>
                  <h4 className="font-serif italic text-lg">Aria</h4>
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Virtual Stylist</p>
               </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:text-gold-400 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm rounded-lg shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-tr-none' 
                      : 'bg-white text-stone-800 border border-stone-100 rounded-tl-none font-light'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-lg rounded-tl-none border border-stone-100 flex gap-1">
                    <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-200"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-stone-100 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask for style advice..."
                className="flex-1 bg-stone-100 border-none rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gold-400 focus:outline-none"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-gold-500 text-white p-2 rounded-md hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};