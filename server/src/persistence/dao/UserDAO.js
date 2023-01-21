import DAOContainer from "../DAOContainer.js";
import { UserModel } from "../../models/User.js";

let instance = null;

class UserDAO extends DAOContainer {
    constructor() {
        super(UserModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new UserDAO();
        };
        return instance;
    };

    async createUser(firstName, lastName, username, email, address, password) {
        try {
            const newUser = await UserModel({
                firstName,
                lastName,
                username,
                email,
                address,
                password
            });
            await newUser.save();
            
            return newUser;
        } catch (err) {
            console.log(err)
        };
    };

    async findUserByParam(param) {
        try {
            const user = await UserModel.findOne({$or: [{ username: param }, { email: param }]}, (err, user) => {
                if (err) console.log(err);
                if (!user) return console.log("Credential does not match with any user");
            }).clone();
    
            return user;     
        } catch (err) {
            console.log(err)
        };
    };

    async getUserStats(lastYear) {
        try {
            const data = await UserModel.aggregate([
                { $match: { createdAt: { $gte: lastYear } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 },
                    },
                },
            ]);
            return data;
        } catch (err) {
            console.log(err)
        };
    };
};

export default UserDAO;