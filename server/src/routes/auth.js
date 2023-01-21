import { Router } from "express";
import { createUserController, authenticateUserController } from "../controllers/user.controllers.js";

const authRouter = Router();

// REGISTER
authRouter.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, username, email, address, password } = req.body;
        const savedUser = await createUserController(firstName, lastName, username, email, address, password);
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    };
});

// LOGIN
authRouter.post("/login", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user;
        if(username) user = username;
        if(email) user = email;
        
        await authenticateUserController(user, password, res);
    } catch (err) {
        res.status(500).json(err);
    };
});

export default authRouter;