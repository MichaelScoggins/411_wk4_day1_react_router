import React from 'react'
import cars from '../cars.json'

// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  const id = props.match.params.id
  const car = cars.find((car) => id == car.id)
  //   console.log({ car, id })
  return <h1>{car.Name}</h1>
}

export default Car
