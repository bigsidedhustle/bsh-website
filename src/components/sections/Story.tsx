import React from 'react';
import { History, TrendingUp, Target, Rocket } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Why I Built Big Side Hustle</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col gap-6 animate-in" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <History size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Exploring in 2020</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I started exploring side income in 2020 with matched betting and surveys, then added delivery work to the mix.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 animate-in" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Tracking Net Profit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I quickly realized that gross earnings are a vanity metric. I began tracking net profit properly to see real outcomes.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 animate-in" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Structured Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Big Side Hustle documents structured income systems that actually work, based on real data and experiments.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 animate-in" style={{ animationDelay: '400ms' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Scaling Beyond One Hustle</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Once I built a system for tracking and improving results, I started applying the same structure to other income streams — delivery apps, affiliate opportunities, and digital tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
