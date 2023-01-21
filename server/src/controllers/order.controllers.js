import { findAllOrders, findOrdersByUserId, getOrdersStats, createOrder, updateOrderById, deleteOrderById } from "../services/order.services.js";

async function findAllOrdersController(query) {
    return await findAllOrders(query);
};

async function findOrdersByUserIdController(userId, query) {
    return await findOrdersByUserId(userId, query);
};

async function getOrdersStatsController(previousMonth) {
    return await getOrdersStats(previousMonth);
};

async function createOrderController(obj) {
    return await createOrder(obj);
};

async function updateOrderByIdController(id, obj) {
    return await updateOrderById(id, obj);
};

async function deleteOrderByIdController(id) {
    return await deleteOrderById(id);
};

export { findAllOrdersController, findOrdersByUserIdController, getOrdersStatsController, createOrderController, updateOrderByIdController, deleteOrderByIdController };