import { Link } from "react-router-dom";
import condition_task31 from "./../img/tasks/condition_task31.png";
import solution_task31 from "./../img/tasks/solution_task31.png";
const Task_31 = () => {
  /** Задача - Интервалы и таймауты
   *
   * Используйте следующие встроенные функции:
   * setTimeout
   * setInterval
   * clearInterval
   *
   * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды
   * "Сообщение номер 1"
   * "Сообщение номер 2"
   * "Сообщение номер 3"
   * "Сообщение номер 4"
   * "Сообщение номер 5"
   */
  return (
    <div>
      <div className="task">
        <h2 className="task__mainTitle">Интервалы и таймауты</h2>
        <h2 className="task__title">Задача</h2>
        <div className="task__imgBox">
          <img className="task__img" src={condition_task31} alt="" />
        </div>
        <div className="task__imgBox">
          <h2 className="solution__title">Решение</h2>
          <img className="task__img" src={solution_task31} alt="" />
        </div>
        <Link className="task__btn" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
};
export default Task_31;
