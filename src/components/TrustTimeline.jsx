import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  { year: "Class of 2003", title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)", detail: "Stanley Medical College, Dr MGR Medical University, Chennai" },
  { year: "Class of 2008", title: "MS in General Surgery", detail: "Thanjavur Medical College, Dr MGR Medical University, Tanjore" },
  { year: "Class of 2011", title: "M.Ch in Paediatric Surgery", detail: "Madras Medical College, Dr MGR Medical University, Chennai" },
  { year: "Advanced Training", title: "Global Fellowships & Certifications", detail: "DHA Eligible, European Board Certified Paediatric Surgeon" },
  { year: "Present", title: "Senior Consultant Paediatric Surgeon", detail: "Aster Hospital, Bangalore" }
];

const TimelineItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className={`relative pl-10 md:pl-20 py-6 md:py-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
      {/* Node */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] md:border-4 border-primary bg-white z-10 transition-all duration-700 delay-300 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
      
      {/* Content */}
      <div className={`bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(16,42,86,0.06)] border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}>
        <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full inline-block mb-4 md:mb-6">{item.year}</span>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-2 md:mb-3">{item.title}</h3>
        <p className="text-secondary-light font-sans text-sm md:text-lg leading-relaxed">{item.detail}</p>
      </div>
    </div>
  );
};

const TrustTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container has been scrolled past
      const start = rect.top - windowHeight / 2;
      const totalScroll = rect.height;
      let progress = -start / totalScroll;
      
      // Add a multiplier so it completes filling just before the very end
      progress = progress * 1.2;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-[90rem]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-5xl md:leading-[1.1] font-serif font-bold text-secondary mb-6 md:mb-8">Academic Foundations <br className="hidden lg:block"/>& Experience</h2>
              <p className="text-lg md:text-xl text-secondary-light font-sans max-w-md leading-relaxed mb-8 md:mb-10">
                Decades of rigorous academic training, dedicated entirely to pediatric excellence and minimally invasive surgery.
              </p>
              <div className="w-12 md:w-16 h-1.5 bg-primary/20 rounded-full"></div>
            </div>
          </div>

          {/* Right Scrolling Timeline */}
          <div className="lg:col-span-7 relative">
            {/* The Line */}
            <div className="absolute left-[8px] md:left-[10px] top-12 bottom-12 w-1 bg-blue-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-200 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
            </div>

            {/* The Items */}
            <div className="space-y-4">
              {milestones.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustTimeline;
