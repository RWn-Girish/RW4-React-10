import { useState } from "react";
import { useNavigate } from 'react-router';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';
import { getStorageData, setStorageData } from "../services/storageData";

const AddProduct = () => {
    const navigate = useNavigate();
    const intialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        quantity: "",
        category: "",
        image: ""
    }
    const [inputForm, setInputForm] = useState(intialState);
    const [error, setError] = useState({});

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })

    }

    const validationForm = () => {
        let formError = {};

        if(inputForm.title == ""){
            formError.title = "Title is Not Empty"
        }else if(inputForm.title.length < 5){
            formError.title = "Title minimum length is 5"
        }

        if(inputForm.desc == ""){
            formError.desc = "Description is not Empty"
        }
       
        if(inputForm.price == ""){
            formError.price = "Price is not Empty"
        }
        
        if(inputForm.quantity == ""){
            formError.quantity = "Qunatity is not Empty"
        }
        if(inputForm.category == ""){
            formError.category = "Category is not Empty"
        }
        if(inputForm.image == ""){
            formError.image = "Image is not Empty"
        }

        setError(formError);

        return Object.keys(formError).length !== 0
    }

    // Math.floor -> down value / Math.ceil -> up value  / Math.round
    const handleSubmit = (e) => {
        e.preventDefault();

        // form validation
        if(!validationForm()){
        // inputForm.id = Math.floor(Math.random() * 100000)
        inputForm.id = generateUniqueId({
            length: 5,
            useLetters: false
        });
        console.log('submit', inputForm);
        let oldData = getStorageData();
        oldData.push(inputForm);
        setStorageData(oldData);
        setInputForm(intialState);
        navigate("/");
        }

        
    }

    return (
        <>
            <Container>
                <h2> Add Product</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control style={{borderColor: error.title ? "red": ""}} type="text" name="title" value={inputForm.title} placeholder="Enter Title" onChange={handleChanged} />
                            {error.title ? <span style={{color: "red"}}>{error.title}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="desc" value={inputForm.desc} placeholder="Enter Description" onChange={handleChanged} />
                            {error.desc ? <span>{error.desc}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name="price" value={inputForm.price} placeholder="Enter Price" onChange={handleChanged} />
                            {error.price ? <span>{error.price}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name="quantity" value={inputForm.quantity} placeholder="Enter Quntity" onChange={handleChanged} />
                            {error.quantity ? <span>{error.quantity}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                                <option value="">Select Category</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Fashion">Fashion</option>
                            </Form.Select>
                            {error.category ? <span>{error.category}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Product Image
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="image" value={inputForm.image} placeholder="Enter Image URL" onChange={handleChanged} />
                            {error.image ? <span>{error.image}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Button type="submit">Add Product</Button>
                </Form>
            </Container>
        </>
    )
};

export default AddProduct;