import { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = isScrolled
    ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900 py-4'
    : 'bg-transparent py-8';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center font-sans">
        <Logo />
        <DesktopNav />
        <MobileMenuButton
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <Command className="text-amber-500 w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
      <span className="text-lg font-black tracking-[0.15em] text-white">KEMPAYN</span>
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-12">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-[10px] font-bold text-neutral-500 hover:text-amber-500 transition-colors uppercase tracking-[0.2em]"
        >
          {item.label}
        </a>
      ))}
      <button className="bg-white text-black text-[10px] font-black px-8 py-2.5 rounded-none hover:bg-amber-500 hover:text-black transition-all uppercase tracking-widest active:scale-95">
        Access Portal
      </button>
    </div>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button className="md:hidden text-white" onClick={onToggle}>
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}

interface MobileMenuProps {
  onClose: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="absolute top-full left-0 right-0 bg-black border-b border-neutral-900 p-10 flex flex-col gap-8 md:hidden font-sans animate-reveal">
      {NAV_ITEMS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em]"
          onClick={onClose}
        >
          {link.label}
        </a>
      ))}
      <button className="bg-amber-500 text-black font-black py-4 uppercase tracking-widest text-xs">
        Get Started
      </button>
    </div>
  );
}
