import type { Question } from "../types/Question"
import type { UserAnswer } from "../types/UserAnswer"
import './QuestionCard.css'

interface QuestionCardProps {
  e:Question, //la estructura de la info de la API
  index:number,
  adaptedAnswers:string[][],
  userAnswers: UserAnswer[],
  points:number,
  time:number;
  handleAnswer: (userAnswer: string, questionIndex: number, correct_answer:string) => void
}
export default function QuestionCard({e,index,adaptedAnswers,handleAnswer,userAnswers,points,time}:QuestionCardProps) {
  // respuesta del usuario para ESTA pregunta
  const userAnswerForThisQuestion = userAnswers.find(
    (a) => a.answerIndex === index
  );

  return (
    <div className="cont-questionCard">
      <div className="cont-time-index-points">
        <p>Time: <strong className="time">{time}</strong></p>
        <p><strong>{index + 1}</strong> of <strong>10</strong></p>
        <p>Score: <strong>{points}</strong></p>
      </div>

      <div className="cont-title-options">
        <p>{e.question.text}</p>

        <div className="cont-options">
          {adaptedAnswers[index].map((option) => {
            let optionClass = "option";
            //adding classes depending of their state
            if (userAnswerForThisQuestion) {
              if (option === e.correctAnswer) {
                optionClass += "-correct";
              } else if (option === userAnswerForThisQuestion.userAnswer) {
                optionClass += "-incorrect";
              } else {
                optionClass += "-disabled";
              }
            }

            return (
              <input key={option} type="button" value={option} className={optionClass} onClick={() =>
                  handleAnswer(option, index, e.correctAnswer)
                }
                disabled={userAnswerForThisQuestion ? true : false} //desabilita que se pueda volver a hacer click
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
