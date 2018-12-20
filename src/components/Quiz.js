import React from 'react';
import './Quiz.css';

const Quiz = props => {
  console.log('quiz component', props);
  return (
    <div className="quiz">
      <h3>{props.quiz.title}</h3>
      <h4>{props.quiz.topic}</h4>
      <p>{props.description}</p>
      <div className="questions">
        <ul>
          {props.questions.map((q, i) => (
            <li key={i}>
              {q.question}
              <ul>
                {q.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
