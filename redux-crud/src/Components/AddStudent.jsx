import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';
import { addNewStudent } from "../services/actions/studentsAction";

const AddStudent = () => {
    const dispatch = useDispatch();
    const initalState = {
        id: "",
        name: "",
        email: "",
        gender: "",
        course: "",
        hobbies: [],
        image: ""
    }

    const [inputForm, setInputForm] = useState(initalState);

    const handleChanged = (e) => {
        const { name, value, type } = e.target;
        if (type == 'checkbox') {
            if (!inputForm.hobbies.includes(value)) {
                inputForm.hobbies.push(value)
            } else if (inputForm.hobbies.includes(value)) {
                inputForm.hobbies = inputForm.hobbies.filter(v => v != value)
            }
        } else {
            setInputForm({
                ...inputForm,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = generateUniqueId({
            length: 5,
            useLetters: false
        })
        inputForm.id = id
        // console.log("Data: ", inputForm);
        dispatch(addNewStudent(inputForm))
    }

    return (
        <>
            <Container>
                <h2>Add Student</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="name" value={inputForm.name} onChange={handleChanged} placeholder="Enter Full Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" name="email" value={inputForm.email} onChange={handleChanged} placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Gender
                        </Form.Label>
                        <Col sm="1">
                            <Form.Check type='radio' name="gender" label={`Male`} value={'Male'} onChange={handleChanged} />
                            <Form.Check type='radio' name="gender" label={`Female`} value={'Female'} onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Course
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select name="course" aria-label="Default select example" onChange={handleChanged}>
                                <option>Select Course</option>
                                {['UI/UX Designer', 'Graphics Designer', 'Full-Stack Development', 'Python Development', 'Game Development'].map((course, i) => (
                                    <option key={i} value={course}>{course}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Hobbies
                        </Form.Label>
                        <Col sm="1">
                            <Form.Check type="checkbox" name="hobbies" onChange={handleChanged} label={`Reading`} value={'Reading'} />
                            <Form.Check type="checkbox" name="hobbies" onChange={handleChanged} label={`Music`} value={'Music'} />
                            <Form.Check type="checkbox" name="hobbies" onChange={handleChanged} label={`Sport`} value={'Sport'} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Profile Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="image" value={inputForm.image} onChange={handleChanged} placeholder="Enter Profile Image URL" />
                        </Col>
                    </Form.Group>

                    <Button type="submit">Add Student</Button>
                </Form>
            </Container>
        </>
    )
};

export default AddStudent;