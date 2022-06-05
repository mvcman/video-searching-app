import React from 'react'

const details = ({ item, setStep }) => {
  return (
    <div className='details'>
        <img src={item.Poster} alt={item.Title} style={{ maxWidth: '100%', height: 300}}/>
        <h2>{item.Title}</h2>
        <p>Demo {item.Type}</p>
        <span>{item.Year}</span>
        <button onClick={() => setStep(false)}>Back</button>
    </div>
  )
}

export default details