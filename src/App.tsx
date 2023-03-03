import React, { useState } from 'react'
import { Button, Col, FormGroup, ListGroup, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  const [age, setAge] = useState(25)
  const [name, setName] = useState("Thang Simon")
  const [career, setCareer] = useState("Developer")

  return (
    <Form style={{padding: '100px'}}>
      <Row>
        <Col>
          {/* Input value */}
          <h1>FORM</h1>
          <Form>
            <FormGroup className='mb-3'>
              <Form.Control type="text" value={name} placeholder="Name" />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Form.Control type="age" value={age} placeholder="Age" />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Form.Control as="textarea" value={career} placeholder="Career" />
            </FormGroup>
          </Form>
          <Button variant='danger'>Submit</Button>
        </Col>
          
        {/* List Group */}
        <Col>
          <ListGroup>
           <h1>LIST</h1>
            <ListGroup.Item>
            {name} - {age} - {career}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Form>
  )
}
