import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Soft Image Framing */}
          <div className="w-full lg:w-5/12 flex justify-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-primary/5">
                <img 
                  src="/dr_vijayganesh.png" 
                  alt="Dr. Vijay Ganesh Sankar" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>

          {/* Right: Editorial Text */}
          <div className="w-full lg:w-7/12 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary font-bold leading-tight mb-6">
              Delicate Care for <br/>
              <span className="text-primary italic font-medium">What Matters Most.</span>
            </h1>
            <p className="text-lg text-secondary-light font-sans leading-relaxed mb-10 max-w-2xl">
              Dr. <strong className="text-secondary font-bold">Vijay Ganesh Sankar</strong>, specializing in advanced neonatal reconstruction, laparoscopic keyhole surgery, and urology, offers your child world-class clinical expertise combined with compassionate care.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mb-10">
              <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-colors shadow-md w-full sm:w-auto inline-block text-center">
                Book Consultation
              </a>
              <a href="tel:+91XXXXXXXXXX" className="border-2 border-blue-200 hover:border-primary hover:text-primary px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-secondary transition-colors w-full sm:w-auto inline-block text-center">
                Call Clinic
              </a>
            </div>

            <div className="pt-6 border-t border-blue-100 flex flex-col items-center lg:items-start">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Hospital Affiliations</p>
               <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold text-secondary">
                 <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Aster Hospital, Bangalore</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
