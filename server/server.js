require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");
const KPI = require("./models/kpiModel");
const Product = require("./models/productModel");
const Transaction = require("./models/transactionModel");

const { kpis, products, transactions } = require("./dev-data/data");

const port = process.env.PORT || 1337;
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(port, () => {
      console.log(`Listening to request on port ${port}`);
      console.log("DB Connected Successfully");
    });

    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((err) => console.log(err.message));
