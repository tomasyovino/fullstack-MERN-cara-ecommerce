import { Router } from "express";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middlewares/verifyToken.js";
import { findAllCartsController, findCartByUserIdController, createCartController, updateCartByIdController, deleteCartByIdController } from "../controllers/cart.controllers.js";

const cartRouter = Router();

cartRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await findAllCartsController(false);
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    };
});

cartRouter.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = findCartByUserIdController(req.params.userId);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    };
});

cartRouter.post("/", verifyToken, async (req, res) => {
    try {
        const cart = await createCartController(req.body);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    };
});

cartRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await updateCartByIdController(req.params.id, req.body);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    };
});

cartRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const deletedCart = await deleteCartByIdController(req.params.id);
        res.status(200).json({ message: "The cart has been deleted...", deletedCart });
    } catch (err) {
        res.status(500).json(err);
    }
});

export default cartRouter;