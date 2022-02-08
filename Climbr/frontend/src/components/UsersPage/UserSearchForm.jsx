import React from "react";
import { Form, Col, Row, FloatingLabel } from "react-bootstrap";

function UserSearchForm() {
  return (
    <Form className="user-search-form">
      <Row className="mb-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Preffered Climbing Gym or Crag"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="floating-label"
            >
              <option>Choose a gym:</option>
              <option value="1">The Cliffs at LIC</option>
              <option value="2">Gravity Vault</option>
              <option value="3">The Gunks</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Preffered Time to Climb"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="floating-label"
            >
              <option>Choose a time:</option>
              <option value="1">Morning</option>
              <option value="2">Afternoon Vault</option>
              <option value="3">Evening</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Preffered Style of Climbing"
          >
            <Form.Select
              aria-label="Floating label select"
              className="custom-floating-label"
            >
              <option>Choose a style:</option>
              <option className="custom-floating-label" value="1">
                Trad
              </option>
              <option className="floating-label" value="2">
                Sport
              </option>
              <option value="3">Top Rope</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
}

export default UserSearchForm;
