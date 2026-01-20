'use client';

import { useInView } from '@/hooks/useInView';
import { useRef, useState } from 'react';

export default function ContactForm() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 reveal ${isInView ? 'active' : ''}`}
        >
          <div
            className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
            style={{ width: isInView ? '60px' : '0px' }}
          />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-500">Contact</span>
        </div>

        <div
          className={`text-center mb-16 transition-all duration-700 reveal ${isInView ? 'active' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s build something meaningful.</h2>
          <p className="text-gray-600 text-lg">
            Ready to create intelligent, human-centered experiences?
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-700 reveal ${isInView ? 'active delay-100' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:scale-[1.01] focus:scale-[1.02] transition-all"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:scale-[1.01] focus:scale-[1.02] transition-all"
              />
            </div>
          </div>

          <div className="relative group">
            <textarea
              placeholder="Tell me about your project..."
              required
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:scale-[1.01] focus:scale-[1.01] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full md:w-auto px-12 py-4 rounded-full font-medium transition-all active:scale-95 hover:scale-[1.02] ${status === 'success'
              ? 'bg-green-600 text-white'
              : status === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-black text-white hover:bg-gray-800'
              }`}
          >
            {status === 'sending' && 'Sending...'}
            {status === 'success' && '✓ Message Sent!'}
            {status === 'error' && 'Error - Try Again'}
            {status === 'idle' && 'Send Message'}
          </button>
        </form>

        <div
          className={`mt-16 text-center space-y-4 transition-all duration-700 reveal ${isInView ? 'active delay-200' : ''}`}
        >
          <div>
            <p className="text-gray-600 mb-2">Or reach out directly:</p>
            <a
              href="mailto:arrimallaharshavardhan@gmail.com"
              className="text-xl font-medium hover:text-blue-600 transition-colors block"
            >
              arrimallaharshavardhan@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:+918639201394"
              className="text-lg text-gray-600 hover:text-black transition-colors"
            >
              +91 8639201394
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
