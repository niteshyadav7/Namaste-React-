import { LOGO_URL } from "../utils/constants";


const Header = () => {
  return (
    <div className="header">
      <div className="nav-logo">
        <img
          className="logo"
          alt="food-app-log"
          src={LOGO_URL}
        />
      </div>
      <ul className="nav-items">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">AboutUs</a>
        </li>
        <li>
          <a href="contact">ContactUs</a>
        </li>
        <li>
          <a href="cart">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Header