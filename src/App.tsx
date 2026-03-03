import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Clock from "./plugins/clock";
import ForEach from "./plugins/foreach";
import OnLoad from "./plugins/onLoad";
import DebugUrlParameter from "./plugins/debug-url-parameter";
import DropdownParameterTest from "./plugins/dropdown-parameter-test";
import RandomNumber from "./plugins/random-number";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/foreach" element={<ForEach />} />
        <Route path="/onload" element={<OnLoad />} />
        <Route path="/debug-url-parameter" element={<DebugUrlParameter />} />
        <Route path="/dropdown-parameter-test" element={<DropdownParameterTest />} />
        <Route path="/random-number" element={<RandomNumber />} />
      </Routes>
    </Router>
  );
}

export default App;
