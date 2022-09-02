import React from "react";
import Dot from "../../../components/Dot";
import { Link } from "react-router-dom";

const ReactHooks = () => {
  return (
    <div>
      <h1 className="text-yellow-400 text-4xl md:text-6xl mb-10 md:mb-24 uppercase font-bold">
        React Hooks
      </h1>
      <p className="p">
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class. <br />
        Hooks are functions that let you “hook into” React state and lifecycle
        features from function components. Hooks don't work inside classes —
        they let you use React without classes.{" "}
      </p>
      <ul>
        <li className="mb-6">
          Basic Hooks
          <ul>
            <li className=" ml-8 my-2">
              <Dot />
              <Link to="/react-hooks/use-state" className="link">
                useState
              </Link>
            </li>
            <li className=" ml-8 my-2">
              <Dot />
              <Link to="/react-hooks/use-effect" className="link">
                useEffect
              </Link>
            </li>
            {/* <li className=" ml-8 my-2">
              <Dot />
              <Link to="/react-hooks/useState" className="link">
                useContext
              </Link>
            </li> */}
          </ul>
        </li>
        <li className="mb-6">Additional Hooks</li>
      </ul>
    </div>
  );
};

export default ReactHooks;
