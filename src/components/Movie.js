import React from 'react'

function Movie(props) {
  return (
    <div className='movie'>
      <img src={props.img} alt="" />
      <p>title: {props.title}</p>
      <p>Year:{props.year}</p>
      <p></p>
    </div>
  )
}

export default Movie;