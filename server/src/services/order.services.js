import OrderDAO from "../persistence/dao/OrderDAO.js";

const orderDAO = OrderDAO.createInstance();

async function findAllOrders(query) {
    return await orderDAO.findAllElements(query);
};

async function findOrdersByUserId(userId, query) {
    return await orderDAO.findOrdersByUserId(userId, query);
};

async function getOrdersStats(previousMonth) {
    return await orderDAO.getOrdersStats(previousMonth);
};

async function createOrder(obj) {
    return await orderDAO.createOrder(obj);
};

async function updateOrderById(id, obj) {
    return await orderDAO.updateElementById(id, obj);
};

async function deleteOrderById(id) {
    return await orderDAO.deleteElementById(id);
};

export { findAllOrders, findOrdersByUserId, getOrdersStats, createOrder, updateOrderById, deleteOrderById };