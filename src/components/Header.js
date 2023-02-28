import { useState } from "react";

//Named export
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>

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
        </ul>
      </div>
    </div>
  );
};

export default Header; //default export
