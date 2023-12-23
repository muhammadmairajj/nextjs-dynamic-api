import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
});

// const Product = mongoose.model('products', productModel);
// export default Product;

const Product = mongoose.model.products || mongoose.model('products', productModel);
export default Product;