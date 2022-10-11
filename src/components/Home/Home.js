import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  const quizes = useLoaderData().data;

  return (
    <div className="home">
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
