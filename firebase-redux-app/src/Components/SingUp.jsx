import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router";

const SignUp = () => {
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm)
    }
    return (
        <>
            <Container>
                <h2>Register Form</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="email" value={inputForm.email} onChange={handleChanged} placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" value={inputForm.password} onChange={handleChanged} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            
                        </Form.Label>
                        <Col sm="10">
                            <button type='submit'>SignUp</button>
                        </Col>
                    </Form.Group>
                </Form>
                <p>Already an Account ? <Link to="/signIn">SignIn</Link> </p>
            </Container>
        </>
    )
}

export default SignUp;