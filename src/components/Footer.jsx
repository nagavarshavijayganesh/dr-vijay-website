import React from 'react';
import { MapPin, ExternalLink, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white py-16 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand/About & Social Links */}
          <div className="md:col-span-5 lg:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-serif font-bold text-3xl text-white tracking-tight mb-4">Dr. Vijay Ganesh Sankar</h3>
            <p className="text-gray-400 leading-relaxed text-base mb-8 max-w-sm mx-auto md:mx-0">
              Senior Consultant Paediatric Surgeon specializing in keyhole surgery, pediatric urology, and neonatal emergencies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a href="mailto:drvijayganeshsankar@gmail.com" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a href="https://in.linkedin.com/in/dr-vijay-ganesh-sankar-633b92288" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 text-white text-sm font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <ExternalLink size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/pedsurgeonvijay/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 text-white text-sm font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <ExternalLink size={16} />
                <span>Instagram</span>
              </a>
            </div>
            
            <div className="mt-8 flex flex-col gap-2">
              <a href="mailto:drvijayganeshsankar@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium tracking-wide">
                drvijayganeshsankar@gmail.com
              </a>
              <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium tracking-wide">
                +91 XXXXXXXXXX
              </a>
            </div>
          </div>
          
          {/* Clinical Affiliations */}
          <div className="md:col-span-7 lg:col-span-5 lg:col-start-8 text-center md:text-left mt-10 md:mt-0">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Clinical Affiliation</h3>
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors text-left">
              <div className="flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">Aster Hospital</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Providing advanced pediatric surgical care and dedicated neonatal emergency support.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p className="text-gray-500 text-xs font-semibold tracking-wide">BANGALORE, KARNATAKA, IN</p>
                    <a href="https://maps.app.goo.gl/NSy9cuq1ULta31cx6?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:text-white transition-colors group">
                      <span>Directions</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex justify-center md:justify-between items-center gap-4 text-xs text-gray-500 font-semibold text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Dr. Vijay Ganesh Sankar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
