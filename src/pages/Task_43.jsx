import { Link } from "react-router-dom";
import condition_task43 from "./../img/tasks/condition_task43.png";
import solution_task43 from "./../img/tasks/solution_task43.png";
const Task_43 = () => {
  return (
    <div>
      <div className="task">
        <h2 className="task__mainTitle">Сравнение двух массивов</h2>
        <h2 className="task__title">Задача</h2>
        <div className="task__imgBox">
          <img className="task__img" src={condition_task43} alt="" />
        </div>
        <div className="task__imgBox">
          <h2 className="solution__title">Решение</h2>
          <img className="task__img" src={solution_task43} alt="" />
        </div>
        <Link className="task__btn" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
};
export default Task_43;
