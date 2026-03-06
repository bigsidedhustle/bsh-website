import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-12 lg:p-20 rounded-3xl shadow-2xl relative overflow-hidden animate-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md animate-bounce" style={{ animationDuration: '3s' }}>
              <MessageCircle size={32} className="text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Join the Community</h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 text-balance leading-relaxed max-w-2xl">
              Connect with hundreds of other people building structured side income. Share experiments, tracking tips, and real outcomes.
            </p>
            
            <a 
              href="https://www.facebook.com/share/g/17xv55ZQPB/?mibextid=wwXIfr" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:scale-[1.05] active:scale-95 transition-all shadow-xl text-xl group"
            >
              <Facebook size={24} className="group-hover:rotate-12 transition-transform" />
              Join the Facebook Group
            </a>
            
            <p className="mt-8 text-sm font-medium text-white/60">
              Community rules: No spam. No hype. Data only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
