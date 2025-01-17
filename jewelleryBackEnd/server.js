import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import colors from "colors";
import path from "path";
import ConnectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
ConnectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/jewellery/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "jewellery", "build", "index.html"));
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on ${PORT} in ${process.env.NODE_ENV} mode`.cyan.underline
      .bold
  )
);
