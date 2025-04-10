import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CoursesD from './CoursesD'
import { Row,Col, Container } from 'react-bootstrap'

export default function Product() {
  let [fuck,setFuck] = useState(CoursesD)

  let params = useParams()

  let unknown = fuck.find(det => det.title == params.courseID)
  

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <h1>
            {unknown.title}
            
          </h1>
          <p>
          {unknown.description}
          </p>
        </Col>
        <Col>
          <img src={unknown.img} alt="" />
        </Col>
        

      </Row>
    </Container>
  )
}
