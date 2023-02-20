import { Routes, Route } from "react-router-dom";
import "../src/assets/reset.css";
import "./style.css";
import Intro from "./components/Intro/Intro";
import Task_31 from "./pages/Task_31";
import Task_32 from "./pages/Task_32";
import Task_33 from "./pages/Task_33";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="task_31" element={<Task_31 />} />
          <Route path="task_32" element={<Task_32 />} />
          <Route path="task_33" element={<Task_33 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
