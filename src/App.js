import { Routes, Route } from "react-router-dom";
import "../src/assets/reset.css";
import "./style.css";
import Intro from "./components/Intro/Intro";
import Task_31 from "./pages/Task_31";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="task_31" element={<Task_31 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
