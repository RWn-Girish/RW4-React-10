// import './App.css'

import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import AddProperty from "./Components/AddProperty/AddProperty";
import Header from "./Components/Header";
import EditProperty from "./Components/EditProperty";

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>

    </>
  )
}

export default App;
