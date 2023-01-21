import { createUser, findAllUsers, findUserById, findUserByParam, getUserStats, updateUserById, deleteUserbyId, hashUserPassword, compareUserPassword } from "../services/user.services.js";
import config from "../utils/config.js";
import UserDTO from "../persistence/dto/UserDTO.js";

async function createUserController(firstName, lastName, username, email, address, password) {
    try {
        const hashedPassword = await hashUserPassword(password);
        return await createUser(firstName, lastName, username, email, address, hashedPassword);
    } catch (err) {
        console.log(err);
    };
};

async function authenticateUserController(param, password, res) {
    try {
        const user = await findUserByParam(param);
        if(user) {
            compareUserPassword(password, user, UserDTO, config.jwt_sec, res);
        } else {
            res.status(401).json({ message: "No user found" });
        };
    } catch (err) {
        console.log(err);
    };
};

async function findAllUsersController(query) {
    return await findAllUsers(query);
};

async function findUserByIdController(id) {
    const user = await findUserById(id)
    return new UserDTO(user);
};

async function getUserStatsController(lastYear) {
    return await getUserStats(lastYear);
};

async function updateUserByIdController(id, obj) {
    return await updateUserById(id, obj);
};

async function deleteUserbyIdController(id) {
    return await deleteUserbyId(id);
};

async function hashUserPasswordController(password) {
    return await hashUserPassword(password);
};

export { createUserController, authenticateUserController, findAllUsersController, findUserByIdController, getUserStatsController, updateUserByIdController, deleteUserbyIdController, hashUserPasswordController };