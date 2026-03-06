import React from 'react';
import { ExternalLink, Database, Gauge, Fuel } from 'lucide-react';

const Tool = () => {
  return (
    <section id="free-tool" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 animate-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 uppercase tracking-wider">
              Free Access
            </div>
            
            <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">
              Net Shift Tracker — <span className="text-primary">Delivery Edition</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">
              The first tool built for delivery drivers using the Net System™. Tracks shifts, fuel, mileage, and automatically calculates your net profit, hourly rate, and £ per mile.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center text-muted shrink-0"><Database size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1">Track Shifts</h4>
                  <p className="text-sm text-muted-foreground">Log your hours and gross earnings in seconds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center text-muted shrink-0"><Fuel size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1">Fuel & Expenses</h4>
                  <p className="text-sm text-muted-foreground">Keep tabs on every mile and fuel cost correctly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center text-muted shrink-0"><Gauge size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1">Live Stats</h4>
                  <p className="text-sm text-muted-foreground">Real-time stats on your true profit after costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center text-muted shrink-0"><ExternalLink size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1">Data Export</h4>
                  <p className="text-sm text-muted-foreground">Download your data whenever you need it.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://app.bigsidehustle.co.uk" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-elegant text-lg group"
            >
              Use the Free Net Tracker
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex-1 relative animate-in" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-video w-full bg-muted/30 rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Mock App Preview */}
              <div className="absolute inset-0 p-8 flex flex-col gap-6">
                <div className="flex justify-between items-center h-12 border-b border-border/50">
                  <div className="w-24 h-4 bg-muted/20 rounded" />
                  <div className="w-8 h-8 bg-muted/20 rounded-full" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex flex-col justify-between">
                    <div className="w-16 h-3 bg-muted/10 rounded" />
                    <div className="w-20 h-8 bg-primary/10 rounded" />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex flex-col justify-between">
                    <div className="w-16 h-3 bg-muted/10 rounded" />
                    <div className="w-20 h-8 bg-muted/10 rounded" />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex flex-col justify-between col-span-2">
                    <div className="w-32 h-3 bg-muted/10 rounded" />
                    <div className="mt-4 flex gap-2">
                      <div className="flex-1 h-2 bg-muted/10 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Overlay Glass effect */}
              <div className="absolute bottom-6 left-6 right-6 h-12 glass rounded-xl flex items-center justify-between px-6 shadow-elegant">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Live Tracker</span>
                </div>
                <div className="w-24 h-2 bg-primary/20 rounded-full" />
              </div>
            </div>
            
            {/* Background blur blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tool;
