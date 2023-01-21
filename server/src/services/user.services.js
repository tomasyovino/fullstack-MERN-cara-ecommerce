import UserDAO from "../persistence/dao/UserDAO.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userDAO = UserDAO.createInstance();

async function createUser(firstName, lastName, username, email, address, password) {
    try {
        return await userDAO.createUser(firstName, lastName, username, email, address, password);
    } catch (err) {
        console.log(err);
    };
};

async function findAllUsers(query) {
    return await userDAO.findAllElements(query);
};

async function findUserById(id) {
    return await userDAO.findElementById(id);
};

async function findUserByParam(param) {
    return await userDAO.findUserByParam(param);
};

async function getUserStats(lastYear) {
    return await userDAO.getUserStats(lastYear);
};

async function updateUserById(id, obj) {
    return await userDAO.updateElementById(id, obj);
};

async function deleteUserbyId(id) {
    return await userDAO.deleteElementbyId(id);
};

async function hashUserPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 8);
    return hashedPassword;
};

function compareUserPassword(password, user, userDTO, jwt_sec, res) {
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) res.status(401).json(err);
        if (isMatch) {
            const secureUser = new userDTO(user);
            const accessToken = jwt.sign({
                id:  user._id,
                isAdmin: user.isAdmin
            }, 
            jwt_sec,
            { expiresIn: "3d" }
            );
            return res.status(200).json({...secureUser, accessToken});
        }; 
        return res.status(401).json({ message: "The user password is wrong"});
    });
};

export { createUser, findAllUsers, findUserById, findUserByParam, getUserStats, updateUserById, deleteUserbyId, compareUserPassword, hashUserPassword };