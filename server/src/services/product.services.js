import ProductDAO from "../persistence/dao/ProductDAO.js";

const productDAO = ProductDAO.createInstance();

async function findAllProducts(query) {
    return await productDAO.findAllElements(query);
};

async function findProductById(id) {
    return await productDAO.findElementById(id);
};

async function createProduct(obj) {
    return await productDAO.createProduct(obj);
};

async function updateProductById(id, obj) {
    return await productDAO.updateElementById(id, obj);
};

async function deleteProductById(id) {
    return await productDAO.deleteElementById(id);
};

export { findAllProducts, findProductById, createProduct, updateProductById, deleteProductById };