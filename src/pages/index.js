import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
import counter2 from "../images/gif/counter2.gif";
import drudgesiren from "../images/gif/drudgesiren.gif";
import artist1 from "../images/artist1.png";
import artist2 from "../images/artist2.png";
import artist3 from "../images/artist3.png";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import SoundCloudIntegration from "../components/soundCloudIntegration";

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="bs-component">
        <div className="jumbotron">
          <h1 className="display-3">
            <img src={upspot} alt="7upspot.gif" />&nbsp; 
            <span style={{ color: '#FF0000' }}>B</span>
            <span style={{ color: '#FF5A00' }}>a</span>
            <span style={{ color: '#FFB400' }}>n</span>
            <span style={{ color: '#FFff00' }}>d</span>
            <span style={{ color: '#A5ff00' }}>f</span>
            <span style={{ color: '#4Bff00' }}>e</span>
            <span style={{ color: '#00ff00' }}>s</span>
            <span style={{ color: '#00ff5A0' }}>t</span>
            <blink>
              <span style={{ color: '#00ffB4' }}>.</span>
              <span style={{ color: '#00ffff' }}>o</span>
              <span style={{ color: '#00B4ff' }}>r</span>
              <span style={{ color: '#005Aff' }}>g</span>
            </blink>
          </h1>
          <p className="lead">Harmonize Your Passion, Unite the Sound at Bandfest.org.</p>
          <center>
            <table cellPadding="2" cellSpacing="2">
              <tr>
                <td>
                  <img src={ie_logo} alt="ie_logo.gif" />
                </td>
                <td>
                  <img src={ns_logo} alt="ns_logo.gif" />
                </td>
                <td>
                  <img src={noframes} alt="noframes.gif" />
                </td>
                <td>
                  <img src={notepad} alt="notepad.gif" />
                </td>
              </tr>
            </table>
          </center>
          <hr className="my-4" />
          <p>
            <center>
              <img src={yahooweek} alt="yahooweek.gif" />
              <img src={community} alt="community.gif" />
              <img src={wabwalk} alt="wabwalk.gif" />
              <img src={webtrips} alt="webtrips.gif" />
            </center>
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
          <div className="span4">
            <h3>Postal addresses</h3>
            <address>
              <img src={spinningearth} alt="spinningearth.gif" />&nbsp; <strong>Platos, Inc.</strong>
              <br /> 14 3/5ths Station St, Frankston VIC 3199 <br /> Frankston, Vic 3199 <br />
              <abbr title="Phone">P:</abbr> 0408 341 924.
            </address>
            <address>
              <strong>MEDIA QUERIES</strong>
              <br />
              <a href="mailto:#" />
              <img src={emailme} alt="emailme.gif" />
            </address>
          </div>
        </div>
        <br />
        <br />
        <center>
          {/* <!-- TRIPLE MC HAMMER -->  */}
          <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp; 
          <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp; 
          <img src={mchammer} alt="mchammer.gif" />
        </center>
      </div>
    </section>
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="display-4">Discover Local Talent</h1>
        <p className="lead">Bandfest.org - Your one-stop destination to explore and support local musicians.</p>
        <Link to="/upload" className="btn btn-primary btn-lg">Get Started</Link>
      </div>
    </section>
    <section className="soundcloud-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Listen to the Latest Tracks</h2>
            <p>Explore a wide variety of music from local artists. Stream and discover new sounds.</p>
            <a href="#" className="btn btn-secondary">Browse SoundCloud</a>
          </div>
          <div className="col-md-6">
            <SoundCloudIntegration />
          </div>
        </div>
      </div>
    </section>
    <section className="upload-section text-center">
      <div className="container">
        <h2>Share Your Music with the World</h2>
        <p>Are you a local musician? Upload your tracks and reach a wider audience.</p>
        <Link to="/upload" className="btn btn-primary btn-lg">Upload Your Music</Link>
      </div>
    </section>
    <section className="featured-artists-section">
      <div className="container">
        <h2>Featured Local Artists</h2>
        <div className="row">
          {/* Featured Artist Cards */}
          <div className="col-md-4">
            <div className="card">
              <img src={artist1} className="card-img-top" alt="Artist 1" />
              <div className="card-body">
                <h5 className="card-title">Michael Flatliner</h5>
                <p className="card-text">Michael Flatliner, a remarkable rock artist, dazzles with masterful guitar skills, poetic lyrics, and electrifying performances, forging a deep connection with fans worldwide through his authentic charisma and music.</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={artist2} className="card-img-top" alt="Artist 2" />
              <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Jane Smith: Iconic rock music sensation with a powerhouse voice that shook stages worldwide. A living legend known for timeless hits and electrifying performances. Rock 'n' roll royalty.</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={artist3}  className="card-img-top" alt="Artist 3" />
              <div className="card-body">
                <h5 className="card-title">Bit Dusty</h5>
                <p className="card-text">Bit Dusty, a jazz pianist extraordinaire, mesmerizes with soulful melodies and improvisational genius. With a unique blend of tradition and innovation, Bit captivates audiences, creating memorable musical journeys.</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="row">
          {/* Testimonial Cards */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Bandfest.org has helped me discover amazing local talent. I love the variety of music available here."</p>
                <p className="card-title">Michael Flatliner</p>
                <p className="card-subtitle mb-2 text-muted">Music Enthusiast</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"As a musician, Bandfest.org has provided me with a platform to share my music and connect with fans."</p>
                <p className="card-title">Jane Smith</p>
                <p className="card-subtitle mb-2 text-muted">Local Artist</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"I've found so many hidden gems on Bandfest.org. It's a fantastic resource for discovering local music."</p>
                <p className="card-title">Emily Johnson</p>
                <p className="card-subtitle mb-2 text-muted">Music Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <Seo />
);
