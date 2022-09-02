import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1 className="text-yellow-500 text-4xl my-2">Welcome to my blog.</h1>
      <h2 className="text-2xl mb-20">
        This blog mostly consists of React.js tutorials, how-to's, etc
      </h2>

      <p className="mb-4">Here are few links:</p>
      <div>
        <Link
          to="/react-hooks"
          className="text-2xl text-yellow-400 hover:text-white block"
        >
          {" "}
          React Hooks
        </Link>
        <Link
          to="/react-redux"
          className="text-2xl text-yellow-400 hover:text-white block"
        >
          {" "}
          React Redux
        </Link>
      </div>
    </div>
  );
};

export default Landing;
