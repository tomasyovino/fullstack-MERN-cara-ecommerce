import { Router } from "express";
import userRouter from "./user.js";
import productRouter from "./product.js";
import cartRouter from "./cart.js";
import orderRouter from "./order.js";
import authRouter from "./auth.js";
import paymentRouter from "./payment.js";

const router = Router();

router.use("/user", userRouter);
router.use("/products", productRouter);
router.use("/cart", cartRouter);
router.use("/orders", orderRouter);
router.use("/auth", authRouter);
router.use("/checkout", paymentRouter);

export default router;