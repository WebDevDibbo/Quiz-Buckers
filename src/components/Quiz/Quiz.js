import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name,logo} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <button>Start Practice</button>
        </div>
    );
};

export default Quiz;