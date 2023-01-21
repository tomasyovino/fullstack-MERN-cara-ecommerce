import { Router } from "express";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken.js";
import { findAllProductsController, findProductByIdController, createProductController, updateProductByIdController, deleteProductByIdController } from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.get("/", async (req, res) => {
    try {
        const query = req.query.new;
        const products = await findAllProductsController(query);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    };
});

productRouter.get("/find/:id", async (req, res) => {
    try {
        const product = await findProductByIdController(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    };
});

productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const product = await createProductController(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }; 
});

productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const product = await updateProductByIdController(req.params.id, req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    };
});

productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedProduct = await deleteProductByIdController(req.params.id);
        res.status(200).json({ message: "The product has been deleted...", deletedProduct });
    } catch (err) {
        res.status(500).json(err);
    };
});

export default productRouter;