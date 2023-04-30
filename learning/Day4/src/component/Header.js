import { LOGO_URL } from "../utils/constants";
import Auth from "./Auth";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-log">
        <img src={LOGO_URL} alt="logo" width={200} className="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="About">About Us</Link></li>
        <li><Link to="Contact">Contact Us</Link></li>
        <li>Cart</li>
        <li>
          <Auth />
        </li>
      </ul>
    </div>
  );
};

export default Header;
