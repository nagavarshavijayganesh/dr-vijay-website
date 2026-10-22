import React from 'react';
import { Award, Activity, Heart, Shield } from 'lucide-react';

const statsData = [
  { icon: Award, value: '15+', label: 'Years Mastered' },
  { icon: Activity, value: '5k+', label: 'Successful Procedures' },
  { icon: Heart, value: '10k+', label: 'Lives Changed' },
  { icon: Shield, value: '100%', label: 'Board Certified' },
];

const Stats = () => {
  return (
    <section className="section" style={{ paddingTop: '0', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
