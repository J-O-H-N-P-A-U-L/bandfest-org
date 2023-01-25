import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import upspot from "../images/gif/7upspot.gif"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="display-3">
                    <img src={upspot} alt="7upspot.gif" />&nbsp; 
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
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
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
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)