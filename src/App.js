import React from 'react'
import DessertsLists from './Components/DessertsLists'
import LivesOrder from './Components/LivesOrder'
export default function App() {
  const data = [
    {
      dessertName: "Ice Cream",
      dessertCalories: "450",
    },
    {
      dessertName: "Tiramisu",
      dessertCalories: "300",
    },
    {
      dessertName: "Chocolate Cake",
      dessertCalories: "401",
    },
    {
      dessertName: "Milk Cake",
      dessertCalories: "400",
    },
    {
      dessertName: "Milk Cake",
      dessertCalories: "600",
    }
  ]
  return (
    <div className='App'>
      <DessertsLists data1={data} />
      <LivesOrder  />
    </div>
  )
}