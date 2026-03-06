import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const items = [
    {
      title: 'Premium tracker tools',
      desc: 'Advanced analytics and automated imports for multiple platforms.',
      delay: '0ms'
    },
    {
      title: 'Opportunity comparison tools',
      desc: 'Real-time comparisons across side income categories to maximize hourly rate.',
      delay: '100ms'
    },
    {
      title: 'Structured frameworks',
      desc: 'Step-by-step documentation for scaling matched betting, affiliate income, and more.',
      delay: '200ms'
    },
    {
      title: 'Affiliate resources',
      desc: 'Vetted tools and deals to streamline your operations and lower overhead.',
      delay: '300ms'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">What’s Next</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground font-medium">The future roadmap for Big Side Hustle.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-elegant border border-border/50 animate-in group hover:bg-primary transition-colors duration-300" 
                style={{ animationDelay: item.delay }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-white transition-colors duration-300">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-foreground transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Coming Soon <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
