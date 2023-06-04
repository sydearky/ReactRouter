import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <h4 className="footer_header">Open Hours</h4>
          <p className="open-days">Sunday</p>
          <p className="time-days">10:30 AM - 10:00 PM</p>
          <p className="open-days">Monday - Friday</p>
          <p className="time-days">10:30 AM - 8:00 PM</p>
          <p className="open-days">Saturday</p>
          <p className="time-days">1:30 AM - 10:00 PM</p>
        </div>
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

export default About;
