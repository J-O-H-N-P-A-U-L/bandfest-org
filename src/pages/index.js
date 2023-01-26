import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import upspot from "../images/gif/7upspot.gif"
import ie_logo from "../images/gif/ie_logo.gif"
import ns_logo from "../images/gif/ns_logo.gif"
import noframes from "../images/gif/noframes.gif"
import notepad from "../images/gif/notepad.gif"
import yahooweek from "../images/gif/yahooweek.gif"
import community from "../images/gif/community.gif"
import wabwalk from "../images/gif/wabwalk.gif"
import webtrips from "../images/gif/webtrips.gif"
import hot from "../images/gif/hot.gif"
import newgif from "../images/gif/new.gif"
import mchammer from "../images/gif/mchammer.gif"
import spinningearth from "../images/gif/spinningearth.gif"
import emailme from "../images/gif/emailme.gif"
import construction from "../images/gif/construction.gif"
import new2 from "../images/gif/new2.gif"
import geocities from "../images/gif/geocities.jpg"
import hacker from "../images/gif/hacker.gif"
import wyld_stallyns from "../images/wyld_stallyns.gif"
import counter2 from "../images/gif/counter2.gif"
import drudgesiren from "../images/gif/drudgesiren.gif"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
        <div className="well">
                <h1 className="display-3">
                      <text style={{color: '#FF0000'}}>B</text>
                      <text style={{color: '#FF5A00'}}>a</text>
                      <text style={{color: '#FFB400'}}>n</text>
                      <text style={{color: '#FFff00'}}>d</text>
                      <text style={{color: '#A5ff00'}}>f</text>
                      <text style={{color: '#4Bff00'}}>e</text>
                      <text style={{color: '#00ff00'}}>s</text>
                      <text style={{color: '#00ff5A0'}}>t</text>
                      <blink>
                      <text style={{color: '#00ffB4'}}>.</text>
                      <text style={{color: '#00ffff'}}>o</text>
                      <text style={{color: '#00B4ff'}}>r</text>
                      <text style={{color: '#005Aff'}}>g</text>
                    </blink>
                    </h1>
                    <img src={wyld_stallyns} alt="wyld_stallyns.gif" />
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
          </div>
                          <center>
            <img src={yahooweek} alt="yahooweek.gif" />
            <img src={community} alt="community.gif" />
            <img src={wabwalk} alt="wabwalk.gif" />
            <img src={webtrips} alt="webtrips.gif" />
            </center>
          <StaticImage
            src="../images/photo1.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
                 <StaticImage
            src="../images/photo2.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
                 <StaticImage
            src="../images/photo3.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
                    <StaticImage
            src="../images/photo4.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

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
      <div className="row">
        <Link to="/about/" className="btn btn-primary btn-lg">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
      <footer class="footer">
        <p class="pull-left" style={{marginTop: '-14px'}}>
        <img src={geocities} alt="geocities.jpg" />
        </p>
        <p class="pull-right" style={{marginTop: '-14px'}}>
        <img src={hacker} alt="hacker.gif" />&nbsp; Built with <a href="http://bootswatch.com">Bootswatch</a>
        </p>
      </footer>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)