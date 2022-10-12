import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";
import MyImage from '../../Images/quiz.jpg'

const Home = () => {
  const quizes = useLoaderData().data;

  return (
    <div className="home">
      <img src={MyImage} alt="" />
      <h3>This website is about participating on Quiz.By participating on quiz you 
        can enrich your knowledge and win surprise gift.
      </h3>
      <div className="homequiz">
      {quizes.map((quiz) => (
        <Quiz
         key={quiz.id} 
         quiz={quiz}>

       </Quiz>
      ))}
      </div>
    </div>
  );
};

export default Home;
