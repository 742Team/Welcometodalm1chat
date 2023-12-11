import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <ul>About</ul>
      </Link>
      <Link to="/download">
        <ul>Download</ul>
      </Link>
      <a
        href="https://dalm1chat.online/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <ul className="signin">Sign in</ul>
        </div>
      </a>
    </div>
  );
}

export default Header;
