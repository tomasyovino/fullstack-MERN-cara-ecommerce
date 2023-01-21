import { findAllProducts, findProductById, createProduct, updateProductById, deleteProductById } from "../services/product.services.js";

async function findAllProductsController(query) {
    return await findAllProducts(query);
};

async function findProductByIdController(id) {
    return await findProductById(id);
};

async function createProductController(obj) {
    return await createProduct(obj);
};

async function updateProductByIdController(id, obj) {
    return await updateProductById(id, obj);
};

async function deleteProductByIdController(id) {
    return await deleteProductById(id);
};

export { findAllProductsController, findProductByIdController, createProductController, updateProductByIdController, deleteProductByIdController };