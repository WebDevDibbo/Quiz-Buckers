import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import './QuizDetails.css'

const QuizDetails = () => {
  const quizDetail = useLoaderData().data;
  console.log(quizDetail)
  const { name, id, questions } = quizDetail;
  
  return (
    <div>
      {/* <h1>name:{name}</h1> */}
      <div className="question">
        {questions.map((question) => (
          <Question key = {question.id}  questionDetails={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
