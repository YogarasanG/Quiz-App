import React, { useState } from "react";
import './quiz.css'

function Quiz({Questions}) {
  const [questions, setQuestions] = useState(0);
  const [getScore, setGetScore] = useState(0);
  const [score, setScore] = useState(false);
  const cQues = Questions[questions];
 
  const scoreFun = (selectedOptionIndex) => {
    if (cQues.answer === selectedOptionIndex) {
      setGetScore(getScore + 1);
    }
    const nextQuestion = questions + 1;
    if (nextQuestion < Questions.length) {
      setQuestions(questions + 1);
    } else {
      setScore(true);
    }
  };
  const handleRestartQuiz = () => {
    setQuestions(0);
    setGetScore(0);
    setScore(false);
  };

  return (
    <div className="container">    
      <div className="quizApp">
      {score ? (
        <div className="score">
        <h2>Your Total Score <span style={{textDecoration:'underline'}}>{getScore}</span><span style={{color:'#9E9FA5'}}>  Out Of {Questions.length}</span></h2> <br />
        <button onClick={handleRestartQuiz}> restart Quiz</button>
        </div>
      ) : (
        <>
        
          <div className="quizQuestion">
            <h2> {cQues.question}</h2>
          </div>
          <div className="quizOptions">
            {cQues.options.map((option, idx) => {
              return (
                <ul>
                 <li key={idx} onClick={() => scoreFun(idx)}>{option}</li>
                </ul>
              );
            })}
          </div>
        </>
      )}
    </div>
     
    
    
    </div>
  );
}

export default Quiz;
