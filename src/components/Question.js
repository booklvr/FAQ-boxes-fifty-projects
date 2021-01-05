import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Question = ({ text, title }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={isActive ? 'faq active' : 'faq'}>
      <h3 className='faq-title'>{title}</h3>
      <p className='faq-text'>{text}</p>

      <button className='faq-toggle' onClick={() => setIsActive(!isActive)}>
        <i className='fas fa-chevron-down'></i>
        <i className='fas fa-times'></i>
      </button>
    </div>
  )
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Question
