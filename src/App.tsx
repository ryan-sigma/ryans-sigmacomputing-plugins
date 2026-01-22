import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clock from "./plugins/clock";
import ForEach from "./plugins/foreach";
import OnLoad from "./plugins/onLoad";
import DebugUrlParameter from "./plugins/debug-url-parameter";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router basename="/ryans-sigmacomputing-plugins">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/foreach" element={<ForEach />} />
        <Route path="/onload" element={<OnLoad />} />
        <Route path="/debug-url-parameter" element={<DebugUrlParameter />} />
      </Routes>
    </Router>
  );
}

export default App;
