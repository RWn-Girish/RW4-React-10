import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUnqiueId from 'generate-unique-id';
import { useDispatch } from 'react-redux';
import { addNewProperty } from "../../services/action/propertyAction";
import { useNavigate } from "react-router";

const AddProperty = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const intialState = {
        id: "",
        pname: "",
        pavialibity: "",
        category: "",
        image: "",
        facility: [],
        area: "",
        price: "",
        contactNo: "",
        address: ""
    }

    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
        const { name, value, type, checked } = e.target;
        if (type == 'checkbox') {
            setInputForm((prev) => ({
                ...prev,
                facility: checked ? [...prev.facility, value] : prev.facility.filter(v => v != value)
            }))
        } else {
            setInputForm({
                ...inputForm,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        inputForm.id = generateUnqiueId({
            length: 6,
            useLetters: false,
        })
        dispatch(addNewProperty(inputForm));
        navigate("/");
        // console.log('submit', inputForm);
    }
    return (
        <>
            <Container>
                <h2>Add Property Form</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="pname" value={inputForm.pname} onChange={handleChanged} placeholder="Enter Propert name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Availability
                        </Form.Label>
                        <Col sm="10">
                            <Form.Check type="radio" name="pavialibity" value={"Buy"} label="Buy" onChange={handleChanged} />
                            <Form.Check type="radio" name="pavialibity" value={"Rent"} label="Rent" onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Category
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select name="category" onChange={handleChanged} aria-label="Default select example">
                                <option value={""}>Select Category</option>
                                {['Apartment', 'Commercial', 'Industiral', "Office"].map(ele => (
                                    <option value={ele}>{ele}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="image" value={inputForm.image} onChange={handleChanged} placeholder="Enter Property Image URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Facility
                        </Form.Label>
                        <Col className="d-flex gap-3" sm="10">
                            {
                                ['Garden', 'CCTV', 'Parking', 'Cafe Area', 'Intercom'].map(ele => (
                                    <Form.Check type="checkbox" name="facility" onChange={handleChanged} value={ele} label={ele} />
                                ))
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Area
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="area" value={inputForm.area} onChange={handleChanged} placeholder="Enter Property Area" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" name="price" value={inputForm.price} onChange={handleChanged} placeholder="Enter Property Price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Contact No
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" name="contactNo" value={inputForm.contactNo} onChange={handleChanged} placeholder="Enter ContactNo" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Address
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="address" value={inputForm.address} onChange={handleChanged} placeholder="Enter Property Address" />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Add Property</Button>
                </Form>

            </Container>
        </>
    )
};

export default AddProperty;