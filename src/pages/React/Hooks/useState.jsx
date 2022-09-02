import Code from "../../../components/Code";
import Highlight from "../../../components/Highlight";
import HorizontalSpace from "../../../components/HorizontalSpace";

const ReactUseState = () => {
  const one = `const [state, setState] = useState(initialState);`;
  const two = `setState(newState);`;
  const three = `function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }`;
  const four = `function Data() {

    function getSomeData() {
      // ...time consuming operation
    }

    const [data, setData] = useState(getSomeData());  // Performance issues
    const [data, setData] = useState(() => getSomeData());  // Better option

    return (
      <p>Data: {data} </p>
    );
  }`;
  return (
    <>
      <h1 className="text-yellow-400 text-4xl md:text-6xl mb-10 md:mb-24 uppercase font-bold">
        useState Hook
      </h1>
      <HorizontalSpace num={1} />
      <Code code={one} />
      <p className="p">
        Returns a stateful value, and a function to update it. <br />
        During the initial render, the returned state (
        <Highlight text="state" />) is the same as the value passed as the first
        argument (<Highlight text="initialState" />
        ). <br />
        The <Highlight text="setState" /> function is used to update the state.
        It accepts a new state value and enqueues a re-render of the component.
      </p>

      <HorizontalSpace num={2} />

      <Code code={two} />
      <p className="p">
        During subsequent re-renders, the first value returned by useState will
        always be the most recent state after applying updates.
      </p>

      <HorizontalSpace num={3} />

      <p className="p">
        If the new state is computed using the previous state, you can pass a
        function to setState. The function will receive the previous value, and
        return an updated value. Here's an example of a counter component that
        uses both forms of setState:
      </p>
      <Code code={three} />

      <HorizontalSpace num={4} />

      <p className="p">
        If the initialValue for a piece of state is a expensive calculation, it
        is better to lazy load as shown below. Even though, React only uses the
        value generated from the function <Highlight text="getSomeData" /> on
        the initial render but this function will run on every re-render.
      </p>
      <Code code={four} />

      <h3 className="text-yellow-400 text-2xl font-semibold mt-24 md:mt-36">
        Notes:
      </h3>
      <ul className="ml-12">
        <li className="list-disc">
          <p className="p">
            useState Hook preserves values between renders and trigger a
            re-render of the component.
          </p>
        </li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default ReactUseState;
