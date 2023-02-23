import { Link } from "react-router-dom";
const TaskList = () => {
  return (
    <div className="task-list">
      <Link to="task_31">Задача 31. Интервалы и таймауты</Link>
      <Link to="task_32">Задача 32. Добавление элементов в начало массива</Link>
      <Link to="task_33">
        Задача 33. Добавление элемента в массив по определенному индексу
      </Link>
      <Link to="task_34">Задача 34. Массив объектов</Link>
      <Link to="task_38">Задача 38. Использование тернарного оператора</Link>
      <Link to="task_39">Задача 39. Перебор элементов массива</Link>
      <Link to="task_40">Задача 40. Конвертация JSON в JavaScript объекты</Link>
      <Link to="task_41">Задача 41. Поиск объектов в массиве</Link>
      <Link to="task_43">Задача 43. Сравнение двух массивов</Link>
      <Link to="task_44">
        Задача 44. Поиск элементов примитивных типов в массиве
      </Link>
    </div>
  );
};
export default TaskList;
