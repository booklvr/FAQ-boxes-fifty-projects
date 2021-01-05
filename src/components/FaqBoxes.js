import React, { Fragment } from 'react'
import Question from './Question'
import questions from '../data/questions'

console.log(questions)

const FaqBoxes = () => {
  return (
    <Fragment>
      <h1>Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <Question key={index} title={question.title} text={question.text} />
      ))}
    </Fragment>
  )
}

export default FaqBoxes
