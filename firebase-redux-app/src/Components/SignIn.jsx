import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router";

const SignIn = () => {
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
    return (
        <>
            <Container>
                <h2>Login Form</h2>
                <Form>
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
                            <button type='submit'>SignIn</button>
                        </Col>
                    </Form.Group>
                </Form>
                <p>Create a New Account ? <Link to="/signUp">SignUp</Link> </p>
            </Container>
        </>
    )
}

export default SignIn;