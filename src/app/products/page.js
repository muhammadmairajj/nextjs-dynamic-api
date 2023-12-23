import Link from "next/link";
import DeleteBtn from "../components/DeleteBtn";

const getProducts = async () => {
  const res = await fetch("http://localhost:8080/api/products");
  const data = await res.json();
  // console.log(data.result);
  return data.result;
};

const Products = async () => {
  const products = await getProducts();
  // console.log(products);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: "column",
      }}
    >
      <h1>Products List</h1>
      <Link
        href="/addproduct"
        style={{
          textDecoration: "none",
          border: "1px solid black",
          background: "blue",
          color: "#fff",
          padding: 10,
          margin: 10,
        }}
      >
        Add Product
      </Link>
      <table border="1px" style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr style={{ color: "red" }}>
            <th>_Id</th>
            <th>Name</th>
            <th>Company</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id} style={{ fontWeight: 500 }}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.company}</td>
                <td>{product.color}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    href={`/products/${product._id}`}
                    style={{
                      textDecoration: "none",
                      color: "dodgerblue",
                      fontWeight: "bold",
                    }}
                  >
                    View
                  </Link>
                  &nbsp; &nbsp;
                  <Link
                    href={`/products/${product._id}/update`}
                    style={{
                      textDecoration: "none",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </Link>
                  <DeleteBtn productId={product._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
