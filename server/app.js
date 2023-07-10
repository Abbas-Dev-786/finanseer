const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const helmet = require("helmet");

const kpiRouter = require("./routes/kpiRoutes");
const productRouter = require("./routes/productRoutes");
const transactionRouter = require("./routes/transactionRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/kpis", kpiRouter);
app.use("/product", productRouter);
app.use("/transaction", transactionRouter);

module.exports = app;
