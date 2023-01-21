import CartDAO from "../persistence/dao/CartDAO.js";

const cartDAO = CartDAO.createInstance();

async function findAllCarts(query) {
    return await cartDAO.findAllElements(query);
};

async function findCartByUserId(userId) {
    return await cartDAO.findCartByUserId(userId);
};

async function createCart(obj) {
    return await cartDAO.createCart(obj);
};

async function updateCartById(id, obj) {
    return await cartDAO.updateElementById(id, obj);
};

async function deleteCartById(id) {
    return await cartDAO.deleteElementById(id);
};

export { findAllCarts, findCartByUserId, createCart, updateCartById, deleteCartById };