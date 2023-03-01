import { useState } from "react";
import Logo from "../assets/images/foodvilla.png";
import { Link } from "react-router-dom";

//Named export
export const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                LogIn
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                LogOut
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header; //default export
