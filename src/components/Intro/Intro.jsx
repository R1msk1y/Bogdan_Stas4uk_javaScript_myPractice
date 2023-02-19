
import TaskList from "../TaskList/TaskList";
import mainLogo from "./../../img/logo.jpg";
const Intro = () => {
  return (
    <>
      <div className="main__logo">
        <img className="main__logo-img" src={mainLogo} />
      </div>
      <div className="main__content">
        <h1>Курс Богдана Стасчука, JavaScript за 11 часов - отличный курс</h1>
        <h2>
          К курсу прилагается 80 практических задач. Их я буду дико решать.
        </h2>
        <h2>
          А потом(а потом!), ниже, буду дико выкладывать мои варианты решения.
        </h2>
        <h2>Зачем?</h2>
        <h2>Практика в javaScript - раз!</h2>
        <h2>Практика в React - два! Этот сайт создается на Реакте!</h2>
        <h2>
          Проект в портфолио - три! И это главное. Работодатель - смотри что
          умею. Срочно нужно брать меня front'эндером на работу!
        </h2>
      </div>
      <TaskList/>


    </>
  );
};
export default Intro;
