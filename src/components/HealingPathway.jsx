import React from 'react';

const steps = [
  {
    num: "01",
    title: "The First Conversation",
    desc: "A quiet, no-pressure consultation. We sit down together to answer every single question you have. No rush, just clarity."
  },
  {
    num: "02",
    title: "Preparing Your Child",
    desc: "We provide a friendly, psychological prep guide designed to keep your child calm, happy, and unafraid of the hospital environment."
  },
  {
    num: "03",
    title: "Day of Procedure",
    desc: "Step-by-step guidance. You will know exactly when you can be present, how anesthesia is handled, and the precise timing of the surgery."
  },
  {
    num: "04",
    title: "Smooth Recovery",
    desc: "Active post-operative communication. We equip you with home-care strategies and schedule close follow-ups to ensure perfect healing."
  }
];

const HealingPathway = () => {
  return (
    <section id="pathway" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-[90rem]">
        <div className="text-center mb-24 relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">The Healing Pathway</h2>
          <p className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto font-serif italic">
            "We demystify the hospital experience. Walk through exactly what happens, taking away the fear of the unknown."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-[3rem] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Number/Node */}
              <div className="w-24 h-24 mx-auto bg-white rounded-full border border-blue-100 shadow-[0_8px_30px_rgb(16,42,86,0.06)] flex items-center justify-center relative z-10 mb-8 group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-500 ease-out">
                <div className="absolute inset-2 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <span className="text-2xl font-serif font-bold text-primary group-hover:text-white transition-colors duration-500">{step.num}</span>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-secondary-light text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealingPathway;
