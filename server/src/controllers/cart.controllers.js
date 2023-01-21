import { findCartByUserId, createCart, updateCartById, deleteCartById } from "../services/cart.services.js";

async function findAllCartsController(query) {
    return await findAllCarts(query);
};

async function findCartByUserIdController(userId) {
    return await findCartByUserId(userId);
};

async function createCartController(obj) {
    return await createCart(obj);
};

async function updateCartByIdController(id, obj) {
    return await updateCartById(id, obj);
};

async function deleteCartByIdController(id) {
    return await deleteCartById(id);
};

export { findAllCartsController, findCartByUserIdController, createCartController, updateCartByIdController, deleteCartByIdController };