import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="gallery">Food Gallery</h1>
        </div>
        <div className="gallerycontainer">
          <div className="galleryimg">
            <img src="img/gallery1.jpg" alt="Prawn" />
          </div>
          <div className="galleryimg">
            <img src="img/gallery2.jpg" alt="Vegetables" />
          </div>
          <div className="galleryimg">
            <img src="img/gallery3.jpg" alt="Bakery" />
          </div>
          <div className="galleryname">Lemon-Rosemary Prawn</div>
          <div className="galleryname">Lemon-Rosemary Vegetables</div>
          <div className="galleryname">Lemon-Rosemary Bakery</div>
          <div className="galleryinfo">
            Seafood&nbsp;/&nbsp;Shrimp&nbsp;/&nbsp;Lemon
          </div>
          <div className="galleryinfo">
            Tomato&nbsp;/&nbsp;Rosemary&nbsp;/&nbsp;Lemon
          </div>
          <div className="galleryinfo">
            Bread&nbsp;/&nbsp;Rosemary&nbsp;/&nbsp;Lemon
          </div>
          <div className="galleryimg">
            <img src="img/gallery6.jpg" alt="Cake" />
          </div>
          <div className="galleryimg">
            <img src="img/gallery4.jpg" alt="Salad" />
          </div>
          <div className="galleryimg">
            <img src="img/gallery5.jpg" alt="Pizza" />
          </div>
          <div className="galleryname">Lemon-Rosemary Cake</div>
          <div className="galleryname">Lemon-Rosemary Salad</div>
          <div className="galleryname">Lemon-Rosemary Pizza</div>
          <div className="galleryinfo">
            Cake&nbsp;/&nbsp;Rosemary&nbsp;/&nbsp;Lemon
          </div>
          <div className="galleryinfo">
            Chicken&nbsp;/&nbsp;Rosemary&nbsp;/&nbsp;Green
          </div>
          <div className="galleryinfo">
            Pasta&nbsp;/&nbsp;Rosemary&nbsp;/&nbsp;Green{" "}
          </div>
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
export default Gallery;
