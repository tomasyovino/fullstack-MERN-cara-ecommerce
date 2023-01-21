import { Router } from "express";
import stripe from "stripe";
import config from "../utils/config.js";

const paymentRouter = Router();
const stripePAY = stripe(config.stripe_key);

paymentRouter.post("/payment", (req, res) => {
    stripePAY.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (err, stripeRes) => {
        if(err) res.status(500).json(err);
        res.status(200).json(stripeRes);
    });
});

export default paymentRouter;