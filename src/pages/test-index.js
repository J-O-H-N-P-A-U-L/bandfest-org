import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Seo } from "../components/seo";

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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="bs-component">
        <div className="jumbotron">
          <h1 className="display-3">
            <img src={upspot} alt="7upspot.gif" />
            &nbsp;
            <span style={{ color: "#FF0000" }}>B</span>
            <span style={{ color: "#FF5A00" }}>a</span>
            <span style={{ color: "#FFB400" }}>n</span>
            <span style={{ color: "#FFff00" }}>d</span>
            <span style={{ color: "#A5ff00" }}>f</span>
            <span style={{ color: "#4Bff00" }}>e</span>
            <span style={{ color: "#00ff00" }}>s</span>
            <span style={{ color: "#00ff5A0" }}>t</span>
            <blink>
              <span style={{ color: "#00ffB4" }}>.</span>
              <span style={{ color: "#00ffff" }}>o</span>
              <span style={{ color: "#00B4ff" }}>r</span>
              <span style={{ color: "#005Aff" }}>g</span>
            </blink>
          </h1>
          <p className="lead">A theme for Gatsby, from Twitter Bootstrap.</p>
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
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
          <div className="span4">
            <h3>Example addresses</h3>
            <address>
              <img src={spinningearth} alt="spinningearth.gif" />&nbsp;
              <strong>Twitter, Inc.</strong>
              <br /> 795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107{" "}
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong>
              <br />
              <a href="mailto:#" />
              <img src={emailme} alt="emailme.gif" />
            </address>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid">
      {/* Content for the rest of your landing page */}
    </div>

    {/* Newly added section */}
    <br /><br /><br />
    <center>
    <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp;
    <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp;
    <img src={mchammer} alt="mchammer.gif" />
    </center>

{/* Buttons section */}
<section id="buttons" style={{ paddingTop: 0 }}>
  <div className="page-header">
    <h1>Buttons</h1>
  </div>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Button</th>
        <th>Large Button</th>
        <th>Small Button</th>
        <th>Disabled Button</th>
        <th>Button with Icon</th>
        <th>Split Button</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a className="btn btn-default" href="#">Default</a></td>
        <td><a className="btn btn-default btn-lg" href="#">Default</a></td>
        <td><a className="btn btn-default btn-sm" href="#">Default</a></td>
        <td><a className="btn btn-default disabled" href="#">Default</a></td>
        <td><a className="btn btn-default" href="#"><i className="glyphicon glyphicon-cog"></i> Default</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-default" href="#">Default</a>
            <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td><a className="btn btn-primary" href="#">Primary</a></td>
        <td><a className="btn btn-primary btn-lg" href="#">Primary</a></td>
        <td><a className="btn btn-primary btn-sm" href="#">Primary</a></td>
        <td><a className="btn btn-primary disabled" href="#">Primary</a></td>
        <td><a className="btn btn-primary" href="#"><i className="glyphicon glyphicon-shopping-cart"></i> Primary</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-primary" href="#">Primary</a>
            <a className="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td><a className="btn btn-success" href="#">Success</a></td>
        <td><a className="btn btn-success btn-lg" href="#">Success</a></td>
        <td><a className="btn btn-success btn-sm" href="#">Success</a></td>
        <td><a className="btn btn-success disabled" href="#">Success</a></td>
        <td><a className="btn btn-success" href="#"><i className="glyphicon glyphicon-ok"></i> Success</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-success" href="#">Success</a>
            <a className="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td><a className="btn btn-info" href="#">Info</a></td>
        <td><a className="btn btn-info btn-lg" href="#">Info</a></td>
        <td><a className="btn btn-info btn-sm" href="#">Info</a></td>
        <td><a className="btn btn-info disabled" href="#">Info</a></td>
        <td><a className="btn btn-info" href="#"><i className="glyphicon glyphicon-exclamation-sign"></i> Info</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-info" href="#">Info</a>
            <a className="btn btn-info dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td><a className="btn btn-warning" href="#">Warning</a></td>
        <td><a className="btn btn-warning btn-lg" href="#">Warning</a></td>
        <td><a className="btn btn-warning btn-sm" href="#">Warning</a></td>
        <td><a className="btn btn-warning disabled" href="#">Warning</a></td>
        <td><a className="btn btn-warning" href="#"><i className="glyphicon glyphicon-warning-sign"></i> Warning</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-warning" href="#">Warning</a>
            <a className="btn btn-warning dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td><a className="btn btn-danger" href="#">Danger</a></td>
        <td><a className="btn btn-danger btn-lg" href="#">Danger</a></td>
        <td><a className="btn btn-danger btn-sm" href="#">Danger</a></td>
        <td><a className="btn btn-danger disabled" href="#">Danger</a></td>
        <td><a className="btn btn-danger" href="#"><i className="glyphicon glyphicon-remove"></i> Danger</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-danger" href="#">Danger</a>
            <a className="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td><a className="btn btn-inverse" href="#">Inverse</a></td>
        <td><a className="btn btn-inverse btn-lg" href="#">Inverse</a></td>
        <td><a className="btn btn-inverse btn-sm" href="#">Inverse</a></td>
        <td><a className="btn btn-inverse disabled" href="#">Inverse</a></td>
        <td><a className="btn btn-inverse" href="#"><i className="glyphicon glyphicon-random"></i> Inverse</a></td>
        <td>
          <div className="btn-group">
            <a className="btn btn-inverse" href="#">Inverse</a>
            <a className="btn btn-inverse dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</section>

{/* Forms section */}
<section id="forms">
  <div className="page-header">
    <h1>Forms</h1>
  </div>

  <div className="row">
    <div className="span7 offset1">
      <form className="well form-search">
        <input type="text" className="input-medium search-query" />
        <button type="submit" className="btn">Search</button>
      </form>

      <form className="well form-search">
        <input type="text" className="input-small" placeholder="Email" />
        <input type="password" className="input-small" placeholder="Password" />
        <button type="submit" className="btn">Go</button>
      </form>

      <form className="form-horizontal well">
        <fieldset>
          <legend>Controls Bootstrap supports</legend>
          <div className="control-group">
            <label className="control-label" htmlFor="input01">Text input</label>
            <div className="controls">
              <input type="text" className="input-xlarge" id="input01" />
              <p className="help-block">In addition to freeform text, any HTML5 text-based input appears like so.</p>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="optionsCheckbox">Checkbox</label>
            <div className="controls">
              <label className="checkbox">
                <input type="checkbox" id="optionsCheckbox" value="option1" />
                Option one is this and that&mdash;be sure to include why it's great
              </label>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="select01">Select list</label>
            <div className="controls">
              <select id="select01">
                <option>something</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="multiSelect">Multicon-select</label>
            <div className="controls">
              <select multiple="multiple" id="multiSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="fileInput">File input</label>
            <div className="controls">
              <input className="input-file" id="fileInput" type="file" />
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="textarea">Textarea</label>
            <div className="controls">
              <textarea className="input-xlarge" id="textarea" rows="3"></textarea>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="focusedInput">Focused input</label>
            <div className="controls">
              <input className="input-xlarge focused" id="focusedInput" type="text" value="This is focused…" />
            </div>
          </div>
          <div className="control-group">
            <label className="control-label">Uneditable input</label>
            <div className="controls">
              <span className="input-xlarge uneditable-input">Some value here</span>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="disabledInput">Disabled input</label>
            <div className="controls">
              <input className="input-xlarge disabled" id="disabledInput" type="text" placeholder="Disabled input here…" disabled />
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="optionsCheckbox2">Disabled checkbox</label>
            <div className="controls">
              <label className="checkbox">
                <input type="checkbox" id="optionsCheckbox2" value="option1" disabled />
                This is a disabled checkbox
              </label>
            </div>
          </div>
          <div className="control-group warning">
            <label className="control-label" htmlFor="inputWarning">Input with warning</label>
            <div className="controls">
              <input type="text" id="inputWarning" />
              <span className="help-inline">Something may have gone wrong</span>
            </div>
          </div>
          <div className="control-group error">
            <label className="control-label" htmlFor="inputError">Input with error</label>
            <div className="controls">
              <input type="text" id="inputError" />
              <span className="help-inline">Please correct the error</span>
            </div>
          </div>
          <div className="control-group success">
            <label className="control-label" htmlFor="inputSuccess">Input with success</label>
            <div className="controls">
              <input type="text" id="inputSuccess" />
              <span className="help-inline">Woohoo!</span>
            </div>
          </div>
          <div className="control-group success">
            <label className="control-label" htmlFor="selectError">Select with success</label>
            <div className="controls">
              <select id="selectError">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <span className="help-inline">Woohoo!</span>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save changes</button>
            <button type="reset" className="btn">Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</section>

{/* Tables section */}
<section id="tables">
  <div className="page-header">
    <h1>Tables</h1>
  </div>

  <center><img src={construction} alt="construction.gif" /></center>

  <table className="table table-bordered table-striped table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</section>

{/* Miscellaneous section */}
<section id="miscellaneous">
  <div className="page-header">
    <h1>
      Miscellaneous  <img src={new2} alt="new2.gif" />
    </h1>
  </div>

  <div className="row">
    <div className="span4">
      <h3 id="breadcrumbs">Breadcrumbs</h3>
      <ul className="breadcrumb">
        <li className="active">Home</li>
      </ul>
      <ul className="breadcrumb">
        <li><a href="#">Home</a> <span className="divider">/</span></li>
        <li><a href="#">Library</a> <span className="divider">/</span></li>
        <li className="active">Data</li>
      </ul>
    </div>
    <div className="span4">
      <h3 id="pagination">Pagination</h3>
      <div className="pagination">
        <ul>
          <li><a href="#">&larr;</a></li>
          <li className="active"><a href="#">10</a></li>
          <li className="disabled"><a href="#">...</a></li>
          <li><a href="#">20</a></li>
          <li><a href="#">&rarr;</a></li>
        </ul>
      </div>
      <div className="pagination pagination-centered">
        <ul>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
        </ul>
      </div>
    </div>

    <div className="span4">
      <h3 id="pager">Pagers</h3>
      <ul className="pager">
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
      </ul>
      <ul className="pager">
        <li className="previous disabled"><a href="#">&larr; Older</a></li>
        <li className="next"><a href="#">Newer &rarr;</a></li>
      </ul>
    </div>
  </div>
</section>


{/* Navs section */}
<section id="navs">
  <div className="row">
    <div className="span4">
      <h3 id="tabs">Tabs</h3>
      <ul className="nav nav-tabs">
        <li className="active"><a href="#A" data-toggle="tab">Section 1</a></li>
        <li><a href="#B" data-toggle="tab">Section 2</a></li>
        <li><a href="#C" data-toggle="tab">Section 3</a></li>
      </ul>
      <div className="tabbable">
        <div className="tab-content">
          <div className="tab-pane active" id="A">
            <p>I'm in Section A.</p>
          </div>
          <div className="tab-pane" id="B">
            <p>Howdy, I'm in Section B.</p>
          </div>
          <div className="tab-pane" id="C">
            <p>What up girl, this is Section C.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="span4">
      <h3 id="pills">Pills</h3>
      <ul className="nav nav-pills">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            Dropdown <b className="caret"></b>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
        <li className="disabled"><a href="#">Disabled link</a></li>
      </ul>
    </div>

    <div className="span4">
      <h3 id="list">Lists</h3>
      <div className="well" style={{ padding: '8px 0' }}>
        <ul className="nav nav-list">
          <li className="nav-header">List header</li>
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Library</a></li>
          <li><a href="#">Applications</a></li>
          <li className="nav-header">Another list header</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li className="divider"></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* Labels and Badges Section */}
      <section id="labels-and-badges">
        <div className="page-header">
          <h1>Labels and Badges</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 id="labels">Labels</h3>
            <span className="label">Default</span>
            <span className="label label-success">Success</span>
            <span className="label label-warning">Warning</span>
            <span className="label label-important">Important</span>
            <span className="label label-info">Info</span>
            <span className="label label-inverse">Inverse</span>
          </div>
          <div className="col-md-6">
            <h3 id="badges">Badges</h3>
            <span className="badge">Default</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-important">Important</span>
            <span className="badge badge-info">Info</span>
            <span className="badge badge-inverse">Inverse</span>
          </div>
        </div>
      </section>

      {/* Add other content here */}


      



  </Layout>
);

export default IndexPage;
