import React, { Component } from "react";
// import "./img";

class Home extends Component {
  render() {
    return (
      <div>
        <section className="showcase">
          <h3 className="showcase_header">CHILL OUT RESTAURANT</h3>
          <h6 className="showcase_subheading">COZY & NATURAL INGREDIENTS</h6>
          {/* <button className="showcase_cta">VISIT US</button> */}
        </section>
        <div className="footer-container">
          <footer className="footer2">
            <h6 className="footer_header2">Chill Out</h6>
            <p>Copyright © Chill Out Restaurant and Cafe</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
