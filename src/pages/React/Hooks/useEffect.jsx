import Code from "../../../components/Code";
import Highlight from "../../../components/Highlight";
import HorizontalSpace from "../../../components/HorizontalSpace";

const ReactUseEffect = () => {
  const one = `useEffect(() => { 
  // Runs on every render
});`;
  const two = `useEffect(() => { 
  // Runs on first render
}, []);`;
  const three = `useEffect(() => { 
  // Runs on first render + whenever dependency changes
}, [name]);`;
  const four = `useEffect(() => { 
  // Runs on first render + whenever dependency changes


  return () => {
    // whenever component unmounts
  };
}, [name]);`;
  return (
    <>
      <h1 className="text-yellow-400 text-4xl md:text-6xl mb-10 md:mb-24 uppercase font-bold">
        useEffect Hook
      </h1>{" "}
      <p className="p">
        useEffect hook allows to perform{" "}
        <Highlight text="effects or side-effects" /> on a functional components.
      </p>
      <HorizontalSpace num={1} />
      <p className="p">useEffect on every render</p>
      <Code code={one} />
      <HorizontalSpace num={2} />
      <p className="p">
        useEffect on 1st render, i.e. on mount. This is an alternate to{" "}
        <Highlight text="componentDidMount" />.
      </p>
      <Code code={two} />
      <HorizontalSpace num={3} />
      <p className="p">
        useEffect on mount and when the dependency changes. This is an alternate
        to <Highlight text="componentDidUpdate" />.
      </p>
      <Code code={three} />
      <HorizontalSpace num={4} />
      <p className="p">
        Same as above but with addition of a return function that is called when
        component unmounts and any clean up code can this placed here. The
        return function is alternate to{" "}
        <Highlight text="componentWillUnmount" />.
      </p>
      <Code code={four} />
      <h3 className="text-yellow-400 text-2xl font-semibold mt-24 md:mt-36">
        Notes:
      </h3>
      <ul className="ml-12">
        <li className="list-disc">
          <p className="p">
            Unmounting can happen when component is about to re-render.
          </p>
        </li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default ReactUseEffect;
