import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const EditContact = () => {
    return (
      <div className="create-main">
        <h1 className="title-brand">Edit New Contact</h1>
        <div className="create-contacts-container">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" />
                  <Form.Text className="text-muted">
                    Change the first name
                  </Form.Text>
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                  <Form.Text className="text-muted">
                    Change the last name
                  </Form.Text>
                </Col>
              </Form.Row>
              
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Change email
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
        </div>
      </div>
    )
  };

export default EditContact;