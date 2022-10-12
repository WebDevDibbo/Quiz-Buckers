import React from 'react';
import './Quiz.css'
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id,name,logo} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <button><Link to={`/quiz/${id}`}>Start Practice</Link></button>
        </div>
    );
};

export default Quiz;