import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';
import { getStorageData, setStorageData } from "../services/storageData";

const EditProduct = () => {
    const {id} = useParams();
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

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let data =getStorageData();

       let updateData =  data.map(product => {
            if(product.id == inputForm.id){
                return inputForm
            }else{
                return product
            }
        })

        setStorageData(updateData);
        setInputForm(intialState);
        navigate("/");
    }

    useEffect(()=> {
        let data = getStorageData();
        let record = data.find(pro => pro.id == id)
        // console.log(record);
        setInputForm(record)

    }, [id]);

    return (
        <>
            <Container>
                <h2> Edit Product</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="title" value={inputForm.title} placeholder="Enter Title" onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="desc" value={inputForm.desc} placeholder="Enter Description" onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name="price" value={inputForm.price} placeholder="Enter Price" onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name="quantity" value={inputForm.quantity} placeholder="Enter Quntity" onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                                <option>Select Category</option>
                                <option value="Mobile" selected= {inputForm.category == "Mobile"}>Mobile</option>
                                <option value="Furniture" selected= {inputForm.category == "Furniture"}>Furniture</option>
                                <option value="Fashion" selected= {inputForm.category == "Fashion"}>Fashion</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Product Image
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="image" value={inputForm.image} placeholder="Enter Image URL" onChange={handleChanged} />
                        </Col>
                    </Form.Group>

                    <Button type="submit">Update Product</Button>
                </Form>
            </Container>
        </>
    )
};

export default EditProduct;


/*
    1. app init
    2. required packages install => react-router react-router-dom
    3. Main component => BrowserRouter import
    4. App Component => Routes and Route
    5. CRUD Operation => required Service convert
    6. Add New => Controlled Component => submit Event
    7. View => Home Page
    8. Delete => filter method / splice method
    9. Edit => Navigate => useParams => fetch => Controlled => submit

*/