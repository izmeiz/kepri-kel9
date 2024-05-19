import React from 'react';

const TeamMember = ({ name, nim, imgSrc, instagramUrl }) => (
  <div className="team-member">
    <img src={imgSrc} alt={name} />
    <div className="info">
      <div className="name">{name}</div>
      <div className="nim">{nim}</div>
    </div>
    <div className="guide-icon">
      <a className="btn btn-square" href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
);

const AboutSection = () => (
  <section className="about-section">
    <div className="container">
      <h1 className="section-about-title">KELOMPOK 9</h1>
      <div className="team">
        <TeamMember
          name="Bagas Syaddad C"
          nim="102770"
          imgSrc="/images/Bagas.jpg"
          instagramUrl="https://www.instagram.com/syddoye"
        />
        <TeamMember
          name="Faiiz Aprio Pratama"
          nim="103511"
          imgSrc="/images/Faiiz.jpg"
          instagramUrl="https://www.instagram.com/izxoxo_i"
        />
        <TeamMember
          name="Jarvis Marselo"
          nim="102578"
          imgSrc="/images/Jarvis.jpg"
          instagramUrl="https://www.instagram.com/jarvismarz"
        />
        <TeamMember
          name="William Paulus N"
          nim="55599"
          imgSrc="/images/William.jpg"
          instagramUrl="https://www.instagram.com/"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
