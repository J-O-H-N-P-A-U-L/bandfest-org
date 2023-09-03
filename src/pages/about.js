import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      {/* You can place your header or navigation here */}
      
      <section className="about-section">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Welcome to Bandfest.org, your ultimate destination for discovering and supporting local musicians and artists. Our mission is to bring together music enthusiasts and talented artists, creating a thriving community of music lovers.
          </p>
          <p>
            At Bandfest.org, we believe that local talent deserves recognition. We provide a platform for emerging artists to showcase their music, connect with fans, and reach a wider audience. Our commitment to supporting local musicians is at the core of everything we do.
          </p>
          <p>
            Whether you're a music enthusiast looking for new sounds or a local artist looking to share your music with the world, Bandfest.org is here for you. Join us in celebrating the diversity and creativity of the local music scene.
          </p>
        </div>
      </section>

      {/* You can include other sections or components below */}
    </Layout>
  );
};

export default About;
