import React from 'react';
import { Music2, Instagram, Twitter, Youtube, ExternalLink, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-muted/30 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <a href="/" className="font-display text-2xl font-bold tracking-tight flex items-center gap-2">
              <span className="w-10 h-10 bg-primary rounded flex items-center justify-center text-primary-foreground shadow-elegant">B</span>
              Big Side Hustle
            </a>
            <div className="text-muted-foreground leading-relaxed text-sm max-w-xs space-y-4">
              <p>
                Structured side income systems built from real experiments since 2020.
              </p>
              <p className="font-medium text-foreground">
                Track your numbers.<br />
                Build repeatable income.<br />
                Scale beyond one hustle.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/share/g/17xv55ZQPB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><Facebook size={20} /></a>
              <a href="https://x.com/bigsidehustle?s=21&t=7N9VwO3cjPASNSv5gjrSnw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><Twitter size={20} /></a>
              <a href="https://www.tiktok.com/@mysidehustle_uk?_r=1&_t=ZN-94THBpeIGzj" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><Music2 size={20} /></a>
              <a href="https://youtube.com/@sidehustleuk9970?si=lqDaNmNwXHM3bGPb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><Youtube size={20} /></a>
              <a href="https://www.instagram.com/big.side.hustle?igsh=MTMzdnJ0bWtxNXJvdQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#system" className="text-muted-foreground hover:text-primary transition-colors text-sm">The System</a>
              <a href="#free-tool" className="text-muted-foreground hover:text-primary transition-colors text-sm">Free Tool</a>
              <a href="#community" className="text-muted-foreground hover:text-primary transition-colors text-sm">Community</a>
              <a href="#story" className="text-muted-foreground hover:text-primary transition-colors text-sm">Why Built</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Tools</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://app.bigsidehustle.co.uk" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
              >
                Net Shift Tracker <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Roadmap</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Community</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Facebook Group</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Success Stories</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()} Big Side Hustle. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-bold text-muted uppercase tracking-widest hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-muted uppercase tracking-widest hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
        
        {/* Background decorative blob */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
      </div>
    </footer>
  );
};

export default Footer;
