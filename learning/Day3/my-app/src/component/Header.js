import { LOGO_URL } from "../utils/constants";


const Header = () => {
    return (
      <div className="nav-bar">
        <div className="nav-logo">
          <img src={LOGO_URL} alt="LOGO" className="logo" width={150} />
        </div>
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };
  
  export default Header;