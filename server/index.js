import express from "express";
import router from "./src/routes/index.js";
import config from "./src/utils/config.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(config.PORT, () => {
    console.log(`Server is running at port ${config.PORT}`);
});