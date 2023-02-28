import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const CardComp = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/300/200" />
      <Card.Body>
        <Card.Title><h3>{props.judul}</h3></Card.Title>
        <p>{props.tanggal}</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
            <Link to={
                {
                    pathname : `/detail/${props.id}`,
                    state : {
                        judul : props.judul,
                        tanggal : props.tanggal
                    }
                }
            }>Detail</Link>
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardComp