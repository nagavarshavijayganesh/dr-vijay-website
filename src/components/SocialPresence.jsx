import React from 'react';
import { Camera, Video, MessageCircle, ExternalLink, PlayCircle } from 'lucide-react';

const socialContent = [
  {
    platform: 'Instagram',
    icon: Camera,
    type: 'Reel',
    title: 'Inside the OR: Robotic Pyeloplasty',
    views: '12.5k',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    platform: 'YouTube',
    icon: Video,
    type: 'Video',
    title: 'Understanding Neonatal Hernias',
    views: '45k',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    platform: 'Instagram',
    icon: Camera,
    type: 'Post',
    title: 'Patient Success Story: Baby Leo',
    views: '8.2k',
    img: 'https://images.unsplash.com/photo-1584982751601-97d8cb0f6669?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const SocialPresence = () => {
  return (
    <section className="section" id="social">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Beyond the Clinic</span>
          <h2 className="section-title">Join the Community</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '36rem' }}>
            Follow along for inside looks at advanced pediatric surgery, patient stories, and medical education.
          </p>
        </div>

        <div className="social-grid">
          {socialContent.map((item, index) => (
            <div key={index} className="social-item animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <img src={item.img} alt={item.title} className="social-img" />
              <div className="social-icon">
                <item.icon size={20} />
              </div>
              <div className="social-overlay">
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {item.type === 'Reel' || item.type === 'Video' ? <PlayCircle size={12} /> : null}
                  {item.type} • {item.views} views
                </span>
                <h4 style={{ fontSize: '1.1rem', color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                  Watch Now <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn-outline" style={{ margin: '0 auto' }}>
            <span>Follow @DrVijayGanesh</span>
            <Camera size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialPresence;
