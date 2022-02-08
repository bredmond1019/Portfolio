import React, { useState } from "react";
import { Form, Col, Row, FloatingLabel, Button } from "react-bootstrap";

import Select, { components } from "react-select";

import { daysOfWeek } from "./data";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function UserSearchForm() {
  const [field, setField] = useState([]);
  const [optionSelected, setOptionSelected] = useState(null);

  const handleChange = (selected) => {
    setOptionSelected(selected);
  };

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

      <Row>
        <Col>
          <Select
            options={daysOfWeek}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
            }}
            value={optionSelected}
            onChange={handleChange}
            placeholder="Which Days of the Week?"
          />
        </Col>
        <Col>
          <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="They Can Lead" />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit" className="mb-2 mt-2" md={{ span: 4, offset: 4 }}>
        Submit
      </Button>
    </Form>
  );
}

export default UserSearchForm;
