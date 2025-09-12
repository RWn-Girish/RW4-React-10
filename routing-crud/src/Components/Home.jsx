import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import { getStorageData, setStorageData } from "../services/storageData";
import { Button, Card, Container } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortData, setSortData] = useState("");

    const handleEdit = (id) => {
        // console.log(id);
        navigate(`/edit-product/${id}`);
    }

    const handleDelete = (id) => {
        let data = getStorageData();
        let updateData = data.filter(pro => pro.id != id);
        // console.log(updateData);
        setStorageData(updateData);
        setProducts(updateData);
    }

    const handleSearch = () => {
        let data = getStorageData();
        let updateData = data.filter(product => {
            return product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.desc.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.price.includes(search)
        })
        setProducts(updateData);
        setSearch("")
    }

    const handleClear = () => {
        let data = getStorageData();
        setProducts(data);
    }

    const handleSort = () => {
        let data = [...products];
        let [field, type] = sortData.split(",");

        let updateData;
        
        if(type == 'asc'){
            if(field == 'price'){
                updateData = data.sort((a, b) => {
                        return a[field] - b[field]
                })
            }else{
                updateData = data.sort((a, b) => {
                        return a[field].localeCompare(b[field])
                })
            }
        }else{
            if(field == 'price'){
                updateData = data.sort((a, b) => {
                        return b[field] - a[field]
                })
            }else{
                updateData = data.sort((a, b) => {
                        return b[field].localeCompare(a[field])
                })
            }
        }
        setProducts(updateData);
    }
    // const handleASC = () => {
    //     let data = [...products];

    //     let updateData = data.sort((a, b) => {
    //         return a.title.localeCompare(b.title)
    //     })
    //     // console.log(updateData);
    //     setProducts(updateData);
    // }
    // const handleDESC = () => {
    //     let data = [...products];

    //     let updateData = data.sort((a, b) => {
    //         return b.title.localeCompare(a.title)
    //     })
    //     // console.log(updateData);
    //     setProducts(updateData);
    // }

    useEffect(() => {
        let data = getStorageData();
        setProducts(data);
    }, [])
    return (
        <>
            <h2>Home Page</h2>
            <div className="m-3">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} name="search" /> &nbsp;
                <button onClick={handleSearch}>Search</button>&nbsp;
                <button onClick={handleClear}>Clear</button>&nbsp;
                || &nbsp;&nbsp;
                {/* <button onClick={handleASC}>ASC</button>&nbsp; */}
                <select onChange={(e) => setSortData(e.target.value)}>
                    <option value="">Select Sorting</option>
                    <option value="title,asc">Title - ASC</option>
                    <option value="title,desc">Title - DESC</option>
                    <option value="price,asc">Price - ASC</option>
                    <option value="price,desc">Price - DESC</option>
                </select>
                <button onClick={handleSort}>Sort</button>&nbsp;
            </div>
            <Container className="d-flex gap-3">
                {products.map((product) => (
                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title} - {product.id}</Card.Title>
                            <Card.Text>
                                {product.desc}
                            </Card.Text>
                            <Card.Text>
                                {product.category}
                            </Card.Text>
                            <Card.Text>
                               Price: {product.price} - Qty: {product.quantity}
                            </Card.Text>
                            <Button onClick={() => handleEdit(product.id)} variant="primary">Edit</Button> &nbsp;
                            <Button onClick={() => handleDelete(product.id)} variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    )
};

export default Home;