import React from 'react';
import { Activity, Baby, Shield, Microscope, HeartPulse, Stethoscope } from 'lucide-react';

const careAreas = [
  {
    title: "Paediatric Robotic Surgery",
    desc: "Precision robotic-assisted surgeries for children.",
    icon: <Microscope />,
    procedures: ["Robotic Pyeloplasty (Drainage)", "Robotic Ureteric Re-implantation", "Robotic Choledochal Cyst Resection", "Micro-invasive reconstructions"]
  },
  {
    title: "Neonatal Surgical Emergencies",
    desc: "Life-saving operations on newborns and preemies.",
    icon: <Baby />,
    procedures: ["Diaphragmatic Hernia (CDH) Repair", "Tracheoesophageal Fistula Repair", "Anorectal Malformations Correction", "Intestinal Atresia & Volvulus Correction"]
  },
  {
    title: "Laparoscopic Keyhole Surgery",
    desc: "Minimally invasive abdominal and chest operations.",
    icon: <Activity />,
    procedures: ["Laparoscopic Hernia & Hydrocele", "Laparoscopic Appendectomy", "Orchidopexy (Undescended Testis)", "Thoracoscopic Lung Operations"]
  },
  {
    title: "Paediatric Urology & Endourology",
    desc: "Reconstruction of urinary tract anomalies.",
    icon: <Stethoscope />,
    procedures: ["Hypospadias Surgical Repairs", "Vesicoureteral Reflux (VUR) Deflux", "Bladder Epispadias Reconstruction", "Posterior Urethral Valve Ablation"]
  },
  {
    title: "Congenital Defect Correction",
    desc: "Correcting anatomical anomalies present at birth.",
    icon: <Shield />,
    procedures: ["Cleft lip & palate assistance", "Abdominal wall defects", "Biliary Atresia operations"]
  },
  {
    title: "Paediatric Surgical Oncology",
    desc: "Tumor excision and management in children.",
    icon: <HeartPulse />,
    procedures: ["Wilms Tumor (Kidney)", "Neuroblastoma resection", "Teratomas and Lymphangiomas"]
  }
];

const CareGrid = () => {
  return (
    <section id="care" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-background/50"></div>
      <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 mt-8">Areas of Surgical Expertise</h2>
          <p className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto font-serif italic">
            "Specialized clinical procedures customized for newborn congenital anomalies, pediatric urology, and keyhole surgeries."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {careAreas.map((area, index) => (
            <div key={index} className="bg-white p-8 lg:p-10 rounded-3xl border border-blue-100 shadow-[0_8px_30px_rgb(16,42,86,0.06)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out group flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                {React.cloneElement(area.icon, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" })}
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">{area.title}</h3>
              <p className="text-secondary-light leading-relaxed mb-8 text-base">
                {area.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-blue-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Conditions & Procedures</p>
                <ul className="space-y-3">
                  {area.procedures.map((proc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-secondary-light group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 shrink-0 group-hover/item:bg-primary transition-colors duration-300"></span>
                      <span className="leading-snug">{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareGrid;
