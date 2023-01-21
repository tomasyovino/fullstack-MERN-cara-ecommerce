import DAOContainer from "../DAOContainer.js";
import { CartModel } from "../../models/Cart.js";

let instance = null;

class CartDAO extends DAOContainer {
    constructor() {
        super(CartModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new CartDAO();
        };
        return instance;
    };

    async createCart(obj) {
        try {
            const newCart = new CartModel(obj);
            const savedCart = await newCart.save();
            return savedCart;
        } catch (err) {
            console.log(err)
        }
    };

    async findCartByUserId(userId) {
        try {
            const cart = await CartModel.findOne({ userId });
            return cart;
        } catch (err) {
            console.log(err)
        };
    };
};

export default CartDAO;