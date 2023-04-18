import React from "react";
import ReactDOM from "react-dom/client";

const RestCard = () => {
  return (
    <div className="res-container">
      <div className="res-card">
        <img
          src="https://w7.pngwing.com/pngs/804/495/png-transparent-cooked-food-with-rice-fizzy-drinks-hyderabadi-biryani-chicken-65-biryani-food-animals-recipe-thumbnail.png"
          alt="images"
          width={200}
        />
        <h3>Meghna Foods</h3>
        <h4>Briyani,North India,Asian</h4>
        <h4>4.4 stars</h4>
        <h4>#8 min</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div>SearchBar</div>
      <div className="card">
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="nav-logo">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
          width={200}
          alt="log of food"
        />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Body />
      <div>Footer</div>
    </>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<AppLayOut />);
