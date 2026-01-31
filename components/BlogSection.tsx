'use client';

import { useInView } from '@/hooks/useInView';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';

export default function BlogSection() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });

  const posts = [
    {
      title: 'The Future of AI in Product Design',
      date: '3 min read',
      category: 'AI & Design',
      color: 'from-blue-400 to-cyan-300',
      emoji: '🤖',
    },
    {
      title: 'Designing Conversational Interfaces',
      date: '5 min read',
      category: 'UX Design',
      color: 'from-purple-400 to-pink-300',
      emoji: '💬',
    },
    {
      title: 'Scale with Enterprise Design Systems',
      date: '4 min read',
      category: 'Systems',
      color: 'from-orange-400 to-yellow-300',
      emoji: '📐',
    },
  ];

  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
              style={{ width: isInView ? '60px' : '0px' }}
            />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500">Insights</span>
          </div>

          <KineticText
            className="text-5xl md:text-7xl font-black mb-6"
            type="char"
            duration={0.6}
            delay={0.2}
          >
            Latest Articles
          </KineticText>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className={`group cursor-pointer transition-all duration-1000 reveal ${isInView ? 'active' : ''}`}
              style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${post.color} rounded-3xl mb-6 relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
              >
                {/* Shine effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 translate-x-[-100%] group-hover:animate-shine pointer-events-none"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-6xl animate-bounce-slow`} style={{ animationDelay: `${index * 0.5}s` }}>
                    {post.emoji}
                  </div>
                </div>
              </div>

              <span className="inline-block px-4 py-1.5 bg-black text-white text-xs font-medium rounded-full mb-4 transition-transform hover:scale-105">
                {post.category}
              </span>

              <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                {post.date}
              </p>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <LiquidButton href="/blog" variant="outline" icon="→">
            Read All Articles
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
