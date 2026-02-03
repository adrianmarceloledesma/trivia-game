import { useEffect, useState } from "react";
import "./App.css";
import type { Question } from "./types/Question";
import QuestionCard from "./components/QuestionCard";
import type { UserAnswer } from "./types/UserAnswer";
import FormOptions from "./components/FormOptions";
import fetchTrivia from "./hooks/fetchTrivia";
import Finished from "./components/Finished";
import iconTitle from './icon-title.png'

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [points, setPoints] = useState(0);
  const [initiateTimer, setInitiateTimer] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // to go to the next question
  const [changeSettings, setChangeSettings] = useState(false);

  const finished = currentQuestionIndex >= 10 ? true : false;

  //mix answers
  const adaptedAnswers = questions.map((e) =>
    [...e.incorrectAnswers, e.correctAnswer].sort(),
  ); //aleatoriamente

  const [userOptions, setUserOptions] = useState({
    category: "general_knowledge",
    difficulty: "easy",
  });
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //handleChange recibe automáticamente:
    // e.target.value = "general_knowledge" (lo que seleccionó el usuario)
    // e.target.name = "category" (el atributo name del select)
    setUserOptions((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const handleFetch = await fetchTrivia(
      userOptions.category,
      userOptions.difficulty,
      );
      setQuestions(handleFetch);
      console.log(userOptions);
      //reset
      setCurrentQuestionIndex(0);
      setUserAnsweredQuestion(0);
      setPoints(0);
      setUserAnswers([]);
      setInitiateTimer(true);
      setTime(10);
      setChangeSettings(false);
      
    } catch (error) {
      
      setError(true);
    } finally{
      setLoading(false); 
    }
  };

  //handle answers
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [userAnsweredQuestion, setUserAnsweredQuestion] = useState(0);

  const handleAnswer = (
    userAnswer: string,
    questionIndex: number,
    correct_answer: string,
  ) => {
    //blocked mulitple answers because during 3 seconds userAnsweredQuestion is +1
    if (userAnsweredQuestion == currentQuestionIndex) {
      const isCorrect = userAnswer == correct_answer ? true : false;
      

      setUserAnswers((prev) => [
        ...prev,
        { answerIndex: questionIndex, userAnswer, is_correct: isCorrect },
      ]);

      if (isCorrect) setPoints((prev) => prev + 1);

      setInitiateTimer(false); //stop the timer when answered

      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setTime(10);
        setInitiateTimer(true);
      }, 2000);

      setUserAnsweredQuestion((prev) => prev + 1);
    }
  };

  //timer
  const [time, setTime] = useState(10);
  useEffect(() => {
    if (time > 0 && initiateTimer) {
      const timerId = setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      // Limpia el timeout anterior
      //Esta es la función de limpieza que React ejecuta automáticamente antes de:
      //El próximo render (cuando cambian las dependencias)
      //El desmontaje del componente
      return () => clearTimeout(timerId);
    } else if (initiateTimer && time === 0) {
      // Solo ejecuta handleAnswer si el tiempo llega a 0
      handleAnswer("userDidntAnswer", currentQuestionIndex, "noCorrectAnswer");
    }
  }, [time, initiateTimer, currentQuestionIndex]);




  //condicional render
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <>
        <p>Error! Try again</p>
        
      </>
    );
  } else if (!finished && questions.length > 0) {
    content = questions.map((e, index) =>
      currentQuestionIndex === index ? (
        <QuestionCard
          key={index}
          e={e}
          index={index}
          adaptedAnswers={adaptedAnswers}
          handleAnswer={handleAnswer}
          points={points}
          userAnswers={userAnswers}
          time={time}
        />
      ) : null
    );
  } else if (!finished || changeSettings) {
    content = (
      <FormOptions
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    );
  } else if (finished && !changeSettings) {
    content = (
      <Finished
        handleSubmit={handleSubmit}
        points={points}
        setChangeSettings={() => setChangeSettings(true)}
      />
    );
  }


  return (
    <div className="container">
      <div className="cont-title">
        <img src={iconTitle} />
        <h1>Trivia Game</h1>
      </div>
  
      <div className="cont-components">
        {content}
      </div>
    </div>
  );
}

export default App;



// 5️⃣ Guardar resultados en localStorage
// 
// Mostrar:
// 
// Best score
// 
// Games played