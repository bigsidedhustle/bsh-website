import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              Built from real side income experiments since 2020
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1]">
              Build Structured Side Income. <span className="text-muted">No hype.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 text-balance leading-relaxed">
              Built from real side income experiments since 2020. Track net profit. Build systems. Scale income streams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a 
                href="https://app.bigsidehustle.co.uk" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-elegant text-lg group"
              >
                Open Free Net Tracker
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/share/g/17xv55ZQPB/?mibextid=wwXIfr" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-border px-8 py-4 rounded-xl font-bold hover:bg-muted/5 transition-all text-lg group"
              >
                Join the Community
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Built from real side income experiments and documented results since 2020.
            </p>

            <p className="text-sm font-medium text-muted flex items-center gap-2 italic">
              <span className="w-1 h-1 bg-primary rounded-full" />
              Net profit &gt; Gross earnings.
            </p>
            <p className="text-sm font-medium text-muted flex items-center gap-2 italic mt-1">
              <span className="w-1 h-1 bg-primary rounded-full" />
              Real numbers. Real systems. No gurus.
            </p>
          </div>
          
          <div className="relative animate-in -mt-8 lg:mt-0" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Abstract Workflow Diagram Illustration */}
              <div className="absolute inset-0 workflow-grid rounded-3xl opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full relative">
                  {/* Nodes and Paths representing the structured system */}
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white border border-border rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
                    <div className="w-10 h-2 bg-primary/20 rounded" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white border border-primary/30 rounded-3xl shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 border-4 border-primary/20 rounded-full border-t-primary animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white border border-border rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Decorative Paths */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path d="M140 140 L180 180" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border" />
                    <path d="M220 220 L260 260" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border" />
                    <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" className="text-border opacity-20" />
                  </svg>
                  
                  {/* Floatings Cards */}
                  <div className="absolute top-10 right-10 glass p-4 rounded-xl shadow-elegant border-white/50 backdrop-blur-xl animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="w-8 h-2 bg-muted/20 rounded" />
                    </div>
                    <div className="mt-2 w-12 h-3 bg-primary rounded" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background blur blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
