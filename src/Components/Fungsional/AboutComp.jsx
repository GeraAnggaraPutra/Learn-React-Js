import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardComp from './CardComp'

const AboutComp = () => {
  return (
    <Container>
    <h1>About Us</h1>
    <Row>
        <Col><CardComp id='1' judul='Belajar React' tanggal='22/02/2023'/></Col>
        <Col><CardComp id='2' judul='Belajar Laravel' tanggal='23/02/2023'/></Col>
        <Col><CardComp id='3' judul='Belajar Flutter' tanggal='24/02/2023'/></Col>
    </Row>
    </Container>
  )
}

export default AboutComp