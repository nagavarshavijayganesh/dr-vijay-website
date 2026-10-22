import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-[90rem]">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 mt-8">Meet Dr. Vijay Ganesh Sankar</h2>
          <p className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto font-serif italic">
            "Dedicated to child-centric healing, scientific innovation, and surgical precision."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center bg-white p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(16,42,86,0.06)] border border-blue-100 hover:shadow-xl transition-all duration-500 ease-out text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-secondary mb-6">Leading the Way in Pediatric & Neonatal Surgery</h3>
            <p className="text-secondary-light leading-loose mb-8 text-base">
              Dr. Vijay Ganesh Sankar is a <strong className="text-secondary font-bold">DHA Eligible, European Board Certified</strong> Paediatric Surgeon with <strong className="text-secondary font-bold">15 years</strong> of surgical experience post-M.Ch. 
              <br/><br/>
              Having received advanced training in <strong className="text-secondary font-bold">Paediatric Robotic Surgery</strong>, he specializes in laparoscopic procedures with a strong focus on advanced keyhole techniques, neonatal surgical emergencies, and pediatric urology. Known for excelling in high-stress environments, he is dedicated to putting young patients at ease and diagnosing even the most complex disorders.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto text-left">
              <div className="bg-primary/[0.02] p-6 rounded-3xl border border-primary/5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-500">
                <h4 className="text-lg font-serif font-bold text-primary mb-2">My Mission</h4>
                <p className="text-sm text-secondary-light leading-relaxed">To deliver advanced, minimally invasive, and robotic pediatric surgical care that meets the highest global clinical standards, minimizing recovery times and providing families with peace of mind.</p>
              </div>
              <div className="bg-primary/[0.02] p-6 rounded-3xl border border-primary/5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-500">
                <h4 className="text-lg font-serif font-bold text-primary mb-2">My Vision</h4>
                <p className="text-sm text-secondary-light leading-relaxed">To lead clinical progress in pediatric keyhole surgery and robotic-assisted urological procedures, establishing a safe, child-first surgical environment locally.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-secondary rounded-3xl p-10 h-full flex flex-col justify-center text-white relative overflow-hidden shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 ease-out cursor-default group">
              <div className="relative z-10">
                <h4 className="text-xl font-serif font-bold text-primary mb-6">Surgical Philosophy</h4>
                <blockquote className="font-serif italic text-xl leading-relaxed text-gray-200">
                  “Children are not miniature adults. They require delicate physical handling, specialized anatomical precision, and above all, a reassuring and gentle clinical presence that calms both the child and their family.”
                </blockquote>
                <div className="mt-8 text-sm font-bold tracking-widest uppercase text-primary">
                  — Dr. Vijay Ganesh Sankar
                </div>
              </div>
              {/* Background accent */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
