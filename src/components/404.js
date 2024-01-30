import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <Row>
        <Col md={12} className="text-center my-3">
          <h3 style={{ color: 'orange' }}> Something went wrong!</h3>
        </Col>
      </Row>
      <Row>
        <img src="/movies/404.png" alt="404" style={{ width: '30vw' }} />
      </Row>
      <Row>
        <Link to='/'>
          <Button className="bg-warning border-bottom border-0 m-3 py-2 px-4 rounded shadow button">Back</Button>
        </Link>
      </Row>
    </div>
  )
}