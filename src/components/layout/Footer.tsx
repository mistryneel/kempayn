import { Command, Twitter, Github, Linkedin } from 'lucide-react';
import { FOOTER_SECTIONS } from '../../constants/data';

const ICON_MAP = {
  Twitter,
  Github,
  Linkedin,
} as const;

export function Footer() {
  return (
    <footer className="py-32 px-10 bg-black border-t border-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-10">
            <Command className="text-amber-500 w-6 h-6" />
            <span className="text-xl font-black tracking-[0.1em] text-white">KEMPAYN</span>
          </div>
          <p className="text-neutral-600 max-w-xs mb-12 text-sm font-medium leading-relaxed uppercase tracking-wide">
            Autonomous scale for the high-conviction digital enterprise.
          </p>
          <div className="flex gap-8">
            {Object.values(ICON_MAP).map((Icon, i) => (
              <Icon
                key={i}
                size={18}
                className="text-neutral-600 hover:text-amber-500 cursor-pointer transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title}>
            <h4 className="text-[10px] font-black tracking-[0.5em] text-neutral-300 mb-10 uppercase">
              {section.title}
            </h4>
            <ul className="space-y-5 text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em]">
              {section.links.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-amber-500 cursor-pointer transition-colors"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[9px] font-black tracking-[0.4em] text-neutral-700 uppercase">
          © 2026 KEMPAYN AUTONOMOUS SYSTEMS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 text-[9px] font-black tracking-[0.4em] text-neutral-800 uppercase">
          <span>Uptime 99.98%</span>
          <span>Build_2024.03.V</span>
        </div>
      </div>
    </footer>
  );
}
