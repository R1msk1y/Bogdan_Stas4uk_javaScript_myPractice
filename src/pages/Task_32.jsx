import { Link } from "react-router-dom";
import condition_task32 from "./../img/tasks/condition_task32.png";
import solution_task32 from "./../img/tasks/solution_task32.png";
const Task_32 = () => {
  /**
   *
   * 1. Добавьте элементы в начало массива:
   * - сначала строку 'Привет'
   * - потом число 100
   *
   * 2. Выведите длинну результирующего массива в консоль
   */
  return (
    <div>
      <div className="task">
        <h2 className="task__mainTitle">
          Добавление элементов в начало массива
        </h2>
        <h2 className="task__title">Задача</h2>
        <div className="task__imgBox">
          <img className="task__img" src={condition_task32} alt="" />
        </div>
        <div className="task__imgBox">
          <h2 className="solution__title">Решение</h2>
          <img className="task__img" src={solution_task32} alt="" />
        </div>
        <Link className="task__btn" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
};
export default Task_32;