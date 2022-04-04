import React, { useReducer, useState } from "react";
import { Form, Col, Row, FloatingLabel, Button } from "react-bootstrap";

import Select, { components } from "react-select";

import { daysOfWeek } from "../UsersPage/data";

const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value,
	};
};

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

function CreateProfile() {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [field, setField] = useState([]);
	const [optionSelected, setOptionSelected] = useState(null);

	const handleSelected = (selected) => {
		setOptionSelected(selected);
	};

	const handleChange = (event) => {
		if (Array.isArray(event)) {
			setOptionSelected(event);
			if (formData["days"]) {
				const days = [];
				event.forEach(({ value }) => days.push(value));
				setFormData({
					name: "days",
					value: days,
				});
			} else {
				setFormData({
					name: "days",
					value: [event[0].value],
				});
			}
		} else {
			const isCheckbox = event.target.type === "checkbox";
			setFormData({
				name: event.target.name,
				value: isCheckbox ? event.target.checked : event.target.value,
			});
		}
	};

	console.log(formData);

	return (
		<Form className="user-search-form">
			<Row className="mb-3">
				<Col md>
					<FloatingLabel controlId="floatingInputGrid" label="First Name">
						<Form.Control
							type="text"
							placeholder="First Name"
							name="first-name"
							onChange={handleChange}
						/>
					</FloatingLabel>
				</Col>
				<Col md>
					<FloatingLabel controlId="floatingInputGrid" label="Last Name">
						<Form.Control
							type="text"
							placeholder="Last Name"
							name="last-name"
							onChange={handleChange}
						/>
					</FloatingLabel>
				</Col>
			</Row>

			<Row className="mb-3">
				<Col md>
					<FloatingLabel
						controlId="floatingSelectGrid"
						label="Preffered Climbing Gym"
					>
						<Form.Select
							aria-label="Floating label select example"
							className="floating-label"
							name="preferred-gym"
							onChange={handleChange}
						>
							<option>Choose a gym:</option>
							<option value="cliffs-lic">The Cliffs at LIC</option>
							<option value="gravity-vault">Gravity Vault</option>
							<option value="cliffs-gowanus">The Cliffs at Gowanus</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
				<Col md>
					<FloatingLabel
						controlId="floatingSelectGrid"
						label="Preffered Time to Climb"
					>
						<Form.Select
							aria-label="Floating label select example"
							className="floating-label"
							name="preferred-time"
							onChange={handleChange}
						>
							<option>Choose a time:</option>
							<option value="morning">Morning</option>
							<option value="afternoon">Afternoon</option>
							<option value="night">Evening</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
			</Row>

			<Row>
				<Col md>
					<FloatingLabel
						controlId="floatingSelectGrid"
						label="Preffered Style of Climbing"
					>
						<Form.Select
							aria-label="Floating label select"
							className="custom-floating-label"
							name="preferred-style-climbing"
							onChange={handleChange}
						>
							<option>Choose a style:</option>
							<option className="custom-floating-label" value="trad">
								Trad
							</option>
							<option className="floating-label" value="sport">
								Sport
							</option>
							<option value="top-rope">Top Rope</option>
						</Form.Select>
					</FloatingLabel>
				</Col>
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
			</Row>
			<Col>
				<Form.Group className="mb-3 mt-3" id="formGridCheckbox">
					<Form.Check
						type="checkbox"
						label="I Can Lead"
						name="can-lead"
						onChange={handleChange}
					/>
				</Form.Group>
			</Col>
			<Button type="submit" className="mb-2 mt-2" md={{ span: 4, offset: 4 }}>
				Submit
			</Button>
		</Form>
	);
}

export default CreateProfile;
