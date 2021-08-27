import React from 'react'
import { Form, Button } from 'react-bootstrap';
import '../../styles/styleLogin.css'

const login = () => {
    return (
        <div>
          <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu E-mail" /> 
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>	
        </div>
    )
}
export default login;