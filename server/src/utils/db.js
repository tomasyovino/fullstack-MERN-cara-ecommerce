import mongoose from "mongoose";

const DBConnect = async (MONGO_URI) => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(MONGO_URI, () => console.log("Database has been successfully connected"));
    } catch (err) {
        console.log(err);
    };
};

export { DBConnect }