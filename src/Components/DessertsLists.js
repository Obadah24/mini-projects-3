import React from 'react'
import '../App.css'
export default function DessertsLists(props) {
  const LowCaloriesDessert = props.data1
      .filter(dessert => {
    return  dessert.dessertCalories < 500
      })
      .sort((a, b) => {
        return  a.dessertCalories - b.dessertCalories
      })
      .map((dessert) => {
        return (
          <li className='span-color span'>{dessert.dessertName} - {dessert.dessertCalories} cal</li>
        )
      })
  return (
    <section className='main'>
      <article className='article'>
      <h1 className='header'>List of low calorie desserts:</h1>
      <ul className='list'>
        {LowCaloriesDessert}
      </ul>
      </article>
    </section>
  )
}