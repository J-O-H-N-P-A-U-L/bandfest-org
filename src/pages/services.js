import React from "react";
import Layout from "../components/layout"; // Import your layout component

const Services = () => {
  return (
    <Layout>
      {/* You can place your header or navigation here */}
      
      <section className="services-section">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            We offer a range of services to support and promote local musicians and artists. Our goal is to provide a platform that connects artists with their audience and helps them grow their careers.
          </p>
          <h2>Services We Provide:</h2>
          <ul>
            <li>
              <strong>Music Discovery:</strong> Discover a wide variety of music from local artists in your area. Listen to their tracks and explore new sounds.
            </li>
            <li>
              <strong>Artist Promotion:</strong> Are you a local artist? Upload your music and reach a wider audience. We promote your work to music enthusiasts.
            </li>
            <li>
              <strong>Community Engagement:</strong> Join our music-loving community. Connect with fellow music enthusiasts and artists, share your thoughts, and attend local events.
            </li>
            <li>
              <strong>Featured Artists:</strong> Explore the work of our featured local artists. Get to know their music and stories.
            </li>
            <li>
              <strong>Music Events:</strong> Stay updated on local music events, concerts, and performances happening in your area.
            </li>
          </ul>
          <p>
            We are passionate about supporting local music scenes and helping artists thrive. Join us in celebrating the talent in your community.
          </p>
        </div>
      </section>

      {/* You can include other sections or components below */}
    </Layout>
  );
};

export default Services;
