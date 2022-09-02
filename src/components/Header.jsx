import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-5 bg-neutral-900 fixed w-full z-50">
      <div className="logo uppercase text-yellow-400 text-xl font-bold pl-4">
        <Link to="/">Programing</Link>
      </div>
      <ul className="flex items-center justify-center">
        {/* <li className="link px-4 inline-block">
          <Link to="/react-basic">React Basics</Link>
        </li> */}
        <li className="link px-4 inline-block">
          <Link to="/react-hooks">React Hooks</Link>
        </li>
        <li className="link px-4 inline-block">
          <Link to="/react-redux">React Redux</Link>
        </li>
        {/* <li className="link px-4 inline-block">C++</li> */}
      </ul>
    </header>
  );
};

export default Header;
