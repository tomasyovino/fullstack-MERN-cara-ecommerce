import { Router } from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verifyToken.js";
import { findAllUsersController, findUserByIdController, getUserStatsController, updateUserByIdController, deleteUserbyIdController, hashUserPasswordController } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const query = req.query.new;
        const users = await findAllUsersController(query);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err)
    }
})

userRouter.get("/find/:id", async (req, res) => {
    try {
        const user = await findUserByIdController(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    };
});

userRouter.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await getUserStatsController(lastYear);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    };
});

userRouter.put("/:id", async (req, res) => {
    try {
        if(req.body.password) {
            req.body.password = await hashUserPasswordController(req.body.password);
        };
        const user = await updateUserByIdController(req.params.id, req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    };
});

userRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const deletedUser = await deleteUserbyIdController(req.params.id);
        res.status(200).json({ message: "The user has been deleted...", deletedUser });
    } catch (err) {
        res.status(500).json(err)
    };
});

export default userRouter;