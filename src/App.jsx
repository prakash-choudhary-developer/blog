import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basics from "./pages/React/Basics/Basics";
import ReactHooks from "./pages/React/Hooks/ReactHooks.jsx";
import ReactUseState from "./pages/React/Hooks/useState.jsx";
import ReactUseEffect from "./pages/React/Hooks/useEffect.jsx";
import Header from "./components/Header.jsx";
import ReactRedux from "./pages/React/Redux/ReactRedux";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen min-h-screen bg-neutral-900 text-white">
        <Header />
        <section className="md:container mx-auto p-6 pt-36 md:pt-64">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/react-basic" element={<Basics />}></Route>
            <Route path="/react-hooks" element={<ReactHooks />}></Route>
            <Route
              path="/react-hooks/use-state"
              element={<ReactUseState />}
            ></Route>
            <Route
              path="/react-hooks/use-effect"
              element={<ReactUseEffect />}
            ></Route>
            <Route path="/react-redux" element={<ReactRedux />}></Route>
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
