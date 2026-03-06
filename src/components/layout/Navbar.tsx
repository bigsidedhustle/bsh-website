import React from 'react';
import { Music2, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground">B</span>
            Big Side Hustle
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#system" className="text-sm font-medium hover:text-primary transition-colors">The System</a>
            <a href="#free-tool" className="text-sm font-medium hover:text-primary transition-colors">Free Tool</a>
            <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">Community</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-5 pr-4 border-r border-border">
            <a href="https://www.facebook.com/share/g/17xv55ZQPB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={18} /></a>
            <a href="https://x.com/bigsidehustle?s=21&t=7N9VwO3cjPASNSv5gjrSnw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
            <a href="https://www.tiktok.com/@mysidehustle_uk?_r=1&_t=ZN-94THBpeIGzj" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Music2 size={18} /></a>
            <a href="https://youtube.com/@sidehustleuk9970?si=lqDaNmNwXHM3bGPb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={18} /></a>
            <a href="https://www.instagram.com/big.side.hustle?igsh=MTMzdnJ0bWtxNXJvdQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
          </div>
          <a 
            href="https://app.bigsidehustle.co.uk" 
            className="hidden sm:block text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-elegant"
          >
            Open Tracker
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
