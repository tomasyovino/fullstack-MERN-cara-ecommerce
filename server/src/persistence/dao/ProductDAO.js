import DAOContainer from "../DAOContainer.js";
import { ProductModel } from "../../models/Product.js";

let instance = null;

class ProductDAO extends DAOContainer {
    constructor() {
        super(ProductModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new ProductDAO();
        };
        return instance;
    };

    async createProduct(obj) {
        try {
            const newProduct = new ProductModel(obj);
            const product = await newProduct.save();
            return product;
        } catch (err) {
            console.log(err)
        }
    };
};

export default ProductDAO;