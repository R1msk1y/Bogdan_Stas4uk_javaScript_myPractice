import { Routes, Route } from "react-router-dom";
import "../src/assets/reset.css";
import "./style.css";
import Intro from "./components/Intro/Intro";
import Task_31 from "./pages/Task_31";
import Task_32 from "./pages/Task_32";
import Task_33 from "./pages/Task_33";
import Task_38 from "./pages/Task_38";
import Task_39 from "./pages/Task_39";
import Task_34 from "./pages/Task_34";
import Task_40 from "./pages/Task_40";
import Task_41 from "./pages/Task_41";
import Task_43 from "./pages/Task_43";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="task_31" element={<Task_31 />} />
          <Route path="task_32" element={<Task_32 />} />
          <Route path="task_33" element={<Task_33 />} />
          <Route path="task_34" element={<Task_34 />} />
          <Route path="task_38" element={<Task_38 />} />
          <Route path="task_39" element={<Task_39 />} />
          <Route path="task_40" element={<Task_40 />} />
          <Route path="task_41" element={<Task_41 />} />
          <Route path="task_43" element={<Task_43/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
