import  React from 'react'
import "./Middle.css"
import { Question } from './Question';
import { Answerbox } from './AnswerBox';
    function Middle(props){
        return (
            <div className='Middle'>
                <Question/>
                <Answerbox/>
            </div>
        )
    }
    export {Middle};