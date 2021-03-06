import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />

        <div className="home__row">
          <Product
            id={190902323}
            title="The lean Startup"
            price={29.9}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id={2323123213}
            title="The Economics Book:Big Ideas Simply Explained"
            price={30.9}
            image="https://images-na.ssl-images-amazon.com/images/I/61+WG1uj4GL._SX417_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={123123213}
            title="Fossil Men's Copeland Stainless Steel  "
            price={90.2}
            image="https://images-na.ssl-images-amazon.com/images/I/81E2IhbmPBL._AC_UX466_.jpg"
            rating={3}
          />
          <Product
            id={2321312312}
            title="New Apple iPhone 12 (64GB, Black) [Locked]"
            price={90.2}
            image="https://m.media-amazon.com/images/I/81hCytKTUTL.jpg"
            rating={3}
          />
          <Product
            id={32321321}
            title="The Menace of Fiscal QE"
            price={90.2}
            image="https://images-na.ssl-images-amazon.com/images/I/51jDdNgCklL._SX322_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={23123123123123}
            title="TCL 32 3-Series 720p Roku Smart TV - 32S335"
            price={900.2}
            image="https://images-na.ssl-images-amazon.com/images/I/61ficuy07aL._AC_SL1200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
