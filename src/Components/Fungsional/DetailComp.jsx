import React from 'react'
import { Container } from 'react-bootstrap'
const DetailComp = (props) => {
  return (
    <Container>
      <p>detail</p>
        <h1>{props.location.state.judul}</h1>
        <p>{props.location.state.tanggal}</p>
    </Container>
  )
}

export default DetailComp