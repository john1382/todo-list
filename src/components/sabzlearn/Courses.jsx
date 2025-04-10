import React from 'react'
import CoursesD from'./CoursesD'
import { useState } from 'react'
import Course from './Course'
import { Container } from '@mui/material'

export default function Courses() {
  const [cards,setCards] = useState(CoursesD)
  return (
    <Container className='courseCon' style={{display:'flex',justifyContent:'space-between',marginTop:'40px'}}>
      {cards.map(cardInfo =>(
        <Course {...cardInfo}/>

      ))}

    </Container>
  )
}
