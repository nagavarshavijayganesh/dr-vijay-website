import React from 'react';
import { Cpu, Heart, Scissors, Activity } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Robotic Surgery',
    desc: 'Precision robotic-assisted surgeries for unmatched outcomes.',
    procedures: ['Robotic Pyeloplasty', 'Ureteric Re-implantation', 'Choledochal Cyst']
  },
  {
    icon: Heart,
    title: 'Neonatal Care',
    desc: 'Immediate emergency correction for newborns.',
    procedures: ['Diaphragmatic Hernia', 'Tracheoesophageal Fistula', 'Anorectal Malformations']
  },
  {
    icon: Scissors,
    title: 'Keyhole Precision',
    desc: 'Advanced diagnostic & therapeutic access via 3mm incisions.',
    procedures: ['Laparoscopic Hernia', 'Appendectomy', 'Thoracoscopic Lung']
  },
  {
    icon: Activity,
    title: 'Urology Expert',
    desc: 'Complete repair of complex urinary tract defects.',
    procedures: ['Hypospadias', 'VUR Deflux', 'Bladder Epispadias']
  }
];

const Services = () => {
  return (
    <section id="treatments" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Core Capabilities</span>
          <h2 className="section-title">Clinical Excellence</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '36rem' }}>
            Leveraging state-of-the-art technology to provide the safest, most precise surgical interventions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <ul className="service-list">
                {service.procedures.map((proc, i) => (
                  <li key={i}>{proc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
