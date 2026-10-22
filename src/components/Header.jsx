import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-secondary shadow-md shadow-secondary/20 py-3' : 'bg-secondary py-5'}`}>
      <div className="container mx-auto px-6 max-w-[90rem] flex items-center justify-between">
        
        {/* Logo/Brand */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif font-bold text-2xl md:text-3xl text-white tracking-tight transition-all duration-300">Dr. Vijay Ganesh</span>
          <span className="font-sans text-[10px] md:text-xs font-bold text-primary-light uppercase tracking-[0.2em] mt-0.5 transition-all duration-300">Paediatric Surgeon</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {[
            { name: 'About', link: '#about' },
            { name: 'Treatments', link: '#care' },
            { name: 'Experience', link: '#experience' },
            { name: 'Healing Pathway', link: '#pathway' }
          ].map((item, index) => (
            <a key={index} href={item.link} className="relative font-serif text-base font-medium tracking-wide text-white/80 hover:text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.08]">
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="#contact" className="flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:scale-105">
            <Calendar size={18} />
            Consultation
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
