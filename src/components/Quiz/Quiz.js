import React from 'react';
import './Quiz.css';

const Quiz = props => {
  console.log('quiz component', props);
  return (
    <>
      <div className="quiz-sidebar">
        <h3 className="quiz-title">{props.quiz.title}</h3>
        <h4 className="quiz-author">by {props.quiz.author.username}</h4>
        <h4 className="quiz-topic">Category: {props.quiz.topic}</h4>
        <p className="quiz-description">{props.description}</p>
        {props.isUserQuiz && (
          <button onClick={() => props.deleteQuiz()}>delete!</button>
        )}
      </div>
      <div className="quiz">
        <div className="quiz-body">
          <ol>
            {props.questions.map((q, i) => (
              <li className="quiz-question" key={i}>
                {q.question}
                <form className="option-form">
                  <ul className="quiz-options">
                    <hr />
                    {q.options.map((option, i) => (
                      <>
                        <p>
                          <input
                            type="radio"
                            name="option"
                            className="quiz-option"
                            key={i}
                            value={option}
                          />
                          <label htmlFor="option">{option}</label>
                        </p>
                      </>
                    ))}
                  </ul>
                </form>
                <hr />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Quiz;
