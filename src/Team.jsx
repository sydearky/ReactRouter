import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="gallery">Team</h1>
        </div>
        <div className="teamcontainer">
          <div className="teamimg">
            <img src="./img/baker.png" alt="Cortez" />
          </div>
          <div className="teamimg">
            <img src="./img/pizza.jpg" alt="Hagupit" />
          </div>
          <div className="teamimg">
            <img src="./img/web.jpg" alt="Pilapil" />
          </div>
          <div className="teamimg">
            <img src="./img/chef.jpg" alt="Pomarejos" />
          </div>
          <div className="teamname">Cortez Cedrick</div>
          <div className="teamname">Hagupit Erika</div>
          <div className="teamname">Pilapil Angel</div>
          <div className="teamname">Pomarejos Yvez</div>
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

export default Team;
