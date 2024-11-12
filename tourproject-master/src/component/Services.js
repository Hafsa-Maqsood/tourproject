import React from 'react';
import '../styles/Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const servicesData = [
  { id: 1, title: 'Calculate Weather', description: 'Get weather forecasts for your trip.', icon: 'fas fa-sun' },
  { id: 2, title: 'Best Tour Guide', description: 'Find expert guides for every destination.', icon: 'fas fa-user-tie' },
  { id: 3, title: 'Customization', description: 'Personalize your travel experience.', icon: 'fas fa-cogs' },
];

function Services() {
  return (
    <section className="services">
      <h2>We offer our best services</h2>
      <div className="service-cards">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <i className={service.icon}></i> {/* Add icon */}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
 