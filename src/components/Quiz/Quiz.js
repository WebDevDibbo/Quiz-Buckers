import React from 'react';
import './Quiz.css'
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id,name,logo} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <Link to={`/quiz/${id}`}><button>Start Practice</button></Link>
        </div>
    );
};

export default Quiz;