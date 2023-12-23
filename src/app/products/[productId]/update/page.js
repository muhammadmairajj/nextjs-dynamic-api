"use client";
import React, { useEffect, useState } from "react";

const UpdateProduct = ({ params }) => {
  // console.log(params)
  const id = params.productId;
  // console.log(id);
  const [products, setProducts] = useState({
    name: "",
    company: "",
    category: "",
    color: "",
    price: "",
  });

  // DESTRUCTURING
  const { name, company, category, color, price } = products;

  const onInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(`http://localhost:8080/api/products/${id}`);
    const data = await res.json();
    // console.log(data);
    setProducts(data.result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateUser = {
      name,
      company,
      category,
      price,
      color,
    };

    const res = await fetch(`http://localhost:8080/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });

    const data = await res.json();
    // console.log(data);
    if(data) {
      setProducts(data);
      location.pathname = '/products';
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update Product</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            value={name}
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Company Name"
            name="company"
            value={company}
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Category Name"
            name="category"
            value={category}
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Color Name"
            name="color"
            value={color}
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            value={price}
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>

        <input
          type="submit"
          value="SUBMIT"
          style={{
            color: "#fff",
            background: "#0073c7",
            border: 0,
            padding: 10,
            width: 300,
          }}
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
