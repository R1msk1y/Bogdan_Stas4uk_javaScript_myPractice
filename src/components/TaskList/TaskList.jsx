import { Link } from "react-router-dom";
const TaskList = () => {
  return (
    <div className="task-list">
      <Link to="task_31">Задача 31. Интервалы и таймауты</Link>
      <Link to="task_32">Задача 32. Добавление элементов в начало массива</Link>
      <Link to="task_33">
        Задача 33. Добавление элемента в массив по определенному индексу
      </Link>
    </div>
  );
};
export default TaskList;
