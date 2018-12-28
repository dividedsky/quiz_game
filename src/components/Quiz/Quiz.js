import React from 'react';
import EditModal from './EditModal';
import './Quiz.css';

const Quiz = props => {
  console.log('quiz component', props);
  return (
    <>
      {props.showModal && <EditModal />}
      <div className="quiz-sidebar">
        <h3 className="quiz-title">{props.quiz.title}</h3>
        <h4 className="quiz-author">by {props.quiz.author.username}</h4>
        <h4 className="quiz-topic">Category: {props.quiz.topic}</h4>
        <p className="quiz-description">{props.description}</p>
        {props.isUserQuiz && (
          <div>
            <button onClick={() => props.deleteQuiz()}>delete!</button>
            <button onClick={() => props.editQuiz()}>edit!</button>
          </div>
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
