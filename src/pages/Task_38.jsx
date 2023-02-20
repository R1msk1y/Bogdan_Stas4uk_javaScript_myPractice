import { Link } from "react-router-dom";
import condition_task38 from "./../img/tasks/condition_task38.png";
import solution_task38 from "./../img/tasks/solution_task38.png";
const Task_38 = () => {
  return (
    <div>
      <div className="task">
        <h2 className="task__mainTitle">Использование тернарного оператора</h2>
        <h2 className="task__title">Задача</h2>
        <div className="task__imgBox">
          <img className="task__img" src={condition_task38} alt="" />
        </div>
        <div className="task__imgBox">
          <h2 className="solution__title">Решение</h2>
          <img className="task__img" src={solution_task38} alt="" />
        </div>
        <Link className="task__btn" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
};
export default Task_38;
