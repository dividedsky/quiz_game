import React from 'react';
import './Quiz.css';

const EditModal = props => {
  return (
    <>
      <div className="modal-bg" />
      <div className="edit-modal">
        <h1>edit modal!</h1>
        <form onSubmit={props.editQuiz}>
          <input type="text" placeholder={props.title} name="title" />
          <input type="text" placeholder={props.topic} name="topic" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default EditModal;
