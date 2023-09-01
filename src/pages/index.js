import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

// Import images
import upspot from "../images/gif/7upspot.gif";
import ie_logo from "../images/gif/ie_logo.gif";
import ns_logo from "../images/gif/ns_logo.gif";
import noframes from "../images/gif/noframes.gif";
import notepad from "../images/gif/notepad.gif";
import yahooweek from "../images/gif/yahooweek.gif";
import community from "../images/gif/community.gif";
import wabwalk from "../images/gif/wabwalk.gif";
import webtrips from "../images/gif/webtrips.gif";
import hot from "../images/gif/hot.gif";
import newgif from "../images/gif/new.gif";
import mchammer from "../images/gif/mchammer.gif";
import spinningearth from "../images/gif/spinningearth.gif";
import emailme from "../images/gif/emailme.gif";
import construction from "../images/gif/construction.gif";
import new2 from "../images/gif/new2.gif";
import geocities from "../images/gif/geocities.jpg";
import hacker from "../images/gif/hacker.gif";
import wyld_stallyns from "../images/wyld_stallyns.gif";
import counter2 from "../images/gif/counter2.gif";
import drudgesiren from "../images/gif/drudgesiren.gif";

const imageList = [
  upspot, ie_logo, ns_logo, noframes, notepad, yahooweek,
  community, wabwalk, webtrips, hot, newgif, mchammer,
  spinningearth, emailme, construction, new2, geocities,
  hacker, wyld_stallyns, counter2, drudgesiren
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
};

// ... (Previous code)

const MusicSharingPlatform = () => (
  <Layout>
    <Seo title="Music Sharing Platform - Bandfest.org" />

    {/* Header */}
    <header
      className="bg-primary text-white py-5"
      style={{
        backgroundImage: `url(${getRandomImage()})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        fontFamily: 'Comic Sans MS, cursive',
        textAlign: 'center',
        fontSize: '36px',
      }}
    >
      <div className="container">
        <h1>Welcome to Bandfest.org</h1>
        <p>Upcoming Music Groups Share Sound Snippets Here!</p>
        <Link
          to="/about"
          className="btn btn-light btn-lg"
          style={{
            backgroundColor: '#FF6600',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '24px',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          About Us
        </Link>
      </div>
    </header>

    {/* Featured Sound Snippet */}
    <section
      className="py-5"
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2>Featured Sound Snippet</h2>
        {/* Replace the iframe with the SoundCloud embed code */}
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/12345&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <p>
          Check out the latest music from upcoming artists. Want your music
          featured here? <Link to="/contact">Contact Us</Link>.
        </p>
        <img src={getRandomImage()} alt="Random Image" />
      </div>
    </section>

    {/* Explore Music */}
    <section
      className="bg-light py-5"
      style={{
        backgroundImage: `url(${getRandomImage()})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: '24px',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2>Explore New Music</h2>
        <p>
          Browse through a diverse collection of sound snippets and discover
          emerging talent.
        </p>
        <Link
          to="/explore"
          className="btn btn-primary btn-lg"
          style={{
            backgroundColor: '#FF6600',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '24px',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Explore Music
        </Link>
        <img src={getRandomImage()} alt="Random Image" />
      </div>
    </section>

    {/* Share Your Music */}
    <section
      className="py-5"
      style={{
        backgroundColor: '#FFFFCC',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2>Share Your Music</h2>
        <p>
          Are you an upcoming music group? Share your sound snippets with the
          world!
        </p>
        <Link
          to="/upload"
          className="btn btn-success btn-lg"
          style={{
            backgroundColor: '#FF6600',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '24px',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Upload Music
        </Link>
        <img src={getRandomImage()} alt="Random Image" />
      </div>
    </section>

    {/* Contact Section */}
    <section
      className="bg-dark py-5 text-white"
      style={{
        backgroundColor: 'black',
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: '24px',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to reach out to us.
        </p>
        <Link
          to="/contact"
          className="btn btn-warning btn-lg"
          style={{
            backgroundColor: '#FF6600',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '24px',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Contact Us
        </Link>
        <img src={getRandomImage()} alt="Random Image" />
      </div>
    </section>

    {/* Footer */}
    <footer
      className="bg-secondary text-white py-3"
      style={{
        backgroundColor: 'black',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Bandfest.org. All rights reserved.</p>
        <img src={getRandomImage()} alt="Random Image" />
      </div>
    </footer>
  </Layout>
);

export default MusicSharingPlatform;

