import React from 'react';
import { BarChart3, Fuel, Calculator, LineChart, Zap } from 'lucide-react';

const System = () => {
  const steps = [
    {
      title: 'Track gross income',
      icon: <BarChart3 className="text-primary" size={32} />,
      desc: 'Record every pound that comes in from your side activities.',
      delay: '0ms'
    },
    {
      title: 'Track costs',
      icon: <Fuel className="text-primary" size={32} />,
      desc: 'Account for fuel, mileage, time, and platform fees.',
      delay: '100ms'
    },
    {
      title: 'Calculate real net profit',
      icon: <Calculator className="text-primary" size={32} />,
      desc: 'See exactly what you earned after all expenses.',
      delay: '200ms'
    },
    {
      title: 'Review weekly',
      icon: <LineChart className="text-primary" size={32} />,
      desc: 'Analyze and improve your strategy based on hard data.',
      delay: '300ms'
    },
    {
      title: 'Optimize or Pivot',
      icon: <Zap className="text-primary" size={32} />,
      desc: 'Increase the best performing income streams and replace the lowest performers.',
      delay: '400ms'
    }
  ];

  return (
    <section id="system" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">The Net System™ Framework</h2>
            <p className="text-xl text-muted-foreground font-medium">Simple. Transparent. Effective.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-elegant border border-border/50 animate-in hover:scale-[1.02] transition-transform" 
                style={{ animationDelay: step.delay }}
              >
                <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-in" style={{ animationDelay: '400ms' }}>
            <p className="text-lg font-bold text-muted-foreground italic flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-muted/20" />
              Structure beats motivation.
              <span className="w-8 h-px bg-muted/20" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
