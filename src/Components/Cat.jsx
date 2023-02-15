import React from 'react'

const Cat = (props) => {
    // console.log(props)
  return (
    <div>
        <h1>{props.katous.name}</h1>
        <img src={props.katous.pic} alt={props.katous.name} />
        <h3>{props.katous.race}</h3>
        <button onClick={()=>props.handle(props.katous)}>Info</button>
    </div>
  )
}

export default Cat