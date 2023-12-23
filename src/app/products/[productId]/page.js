const getProductById = async (id) => {
    const res = await fetch(`http://localhost:8080/api/products/${id}`);
    const data = await res.json();
    console.log(data.result);
    return data.result;
  };

const page = async (params) => {
  // console.log(params);
    const product = await getProductById(params.params.productId);
    // console.log(product);
  return (
    <div>
      <h1>Product Detail Page</h1>
      <ul>
        <li>ProductName: {product.name}</li>
        <li>Company: {product.company}</li>
        <li>Category: {product.category}</li>
        <li>Color: {product.color}</li>
        <li>Price: {product.price}</li>
      </ul>
    </div>
  )
}

export default page