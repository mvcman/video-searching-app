import React from 'react'
import './styles.css';

const element = ({ setStep, item, setItem }) => {
  return (
    <div className='video-div' onClick={() => {
        setItem();
        setStep(true);
    }}>
        <img src={item.Poster} alt={item.Title} className='image'/>
        <div>
            <h5>{item.Title}</h5>
            <p>{item.Type}</p>
        </div>
    </div>
  )
}

export default element