import React from 'react'
import '../App.css'
const Main = ({children}) => {
  return(
    <div className='main'>{children}</div>
  )
}
const Box = ({children}) => {
  return(
    <div className='Box' >{children}</div>
  )
}
const Heading = (props) => {
  return(
    <h1 className='Row'>{props.children}</h1>
  )
}
const Row = ({children, spacing}) => {
  const childStyle = {
    marginLeft:`${spacing}px`
  }
  return(
    <div className='Row'>
      {React.Children.map(children,(child, index) => {
        console.log(child)
        return React.cloneElement(child,{
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
            color: "rgb(73, 94, 87)"
          }
        })
      })}
    </div>
  )
}
export default function LivesOrder() {
  return (
    <div className='App'>
      <Main>
      <Box>
      <Heading>
      Lives Orders 01
      </Heading>
      <Row spacing={32} >
        <span >Pizza Margarita<b>:</b></span>
        <span >2</span>
        <span >30$</span>
        <span >18:30</span>
        <span >Jonhn</span>
      </Row>
      </Box>
      <Box>
      <Heading>
      Lives Orders 02
      </Heading>
      <Row spacing={32}>
        <p >Chicken<b>:</b></p>
        <p >4</p>
        <p >40$</p>
        <p >12:00</p>
        <p >March</p>
      </Row>
      </Box>
      <Box>
      <Heading>
      Lives Orders 03
      </Heading>
      <Row spacing={32}>
        <p>Soup Lemon<b>:</b></p>
        <p>5</p>
        <p>25$</p>
        <p>4:30</p>
        <p>Apirl</p>
      </Row>
      </Box>
      <Box>
      <Heading>
      Lives Orders 04 
      </Heading>
      <Row spacing={32}>
        <p>Pizza Hut<b>:</b></p>
        <p>1</p>
        <p>10$</p>
        <p>18:35</p>
        <p>Maikle</p>
      </Row>
      </Box>
      </Main>
    </div>
  )
}
