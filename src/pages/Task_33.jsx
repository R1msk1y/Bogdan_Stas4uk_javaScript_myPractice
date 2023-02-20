import { Link } from "react-router-dom";
import condition_task33 from "./../img/tasks/condition_task33.png";
import solution_task33 from "./../img/tasks/solution_task33.png";
const Task_33 = () => {
  return (
    <div>
      <div className="task">
        <h2 className="task__mainTitle">
          Добавление элементов в массив по определенному индексу
        </h2>
        <h2 className="task__title">Задача</h2>
        <div className="task__imgBox">
          <img className="task__img" src={condition_task33} alt="" />
        </div>
        <div className="task__imgBox">
          <h2 className="solution__title">Решение</h2>
          <img className="task__img" src={solution_task33} alt="" />
        </div>
        <Link className="task__btn" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
};
export default Task_33;
