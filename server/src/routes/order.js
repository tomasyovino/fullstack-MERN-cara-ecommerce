import { Router } from "express";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verifyToken.js";
import { findAllOrdersController, findOrdersByUserIdController, getOrdersStatsController, createOrderController, updateOrderByIdController, deleteOrderByIdController } from "../controllers/order.controllers.js";

const orderRouter = Router();

orderRouter.get("/", async (req, res) => {
    try {
        const query = req.query.new;
        const orders = await findAllOrdersController(query);
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    };
});

orderRouter.get("/find/:userId", async (req, res) => {
    try {
        const query = req.query.new;
        const orders = await findOrdersByUserIdController(req.params.userId, query);
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    };
});

orderRouter.get("/income", verifyTokenAndAdmin, async (req, res) => {
    try {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
        
        const data = await getOrdersStatsController(previousMonth);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    };
});

orderRouter.post("/", async (req, res) => {
    try {
        const order = await createOrderController(req.body);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    };
});

orderRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const order = await updateOrderByIdController(req.params.id, req.body);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    };
});

orderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedOrder = await deleteOrderByIdController(req.params.id);
        res.status(200).json({ message: "The order has been deleted...", deletedOrder });
    } catch (err) {
        res.status(500).json(err);
    };
});

export default orderRouter;