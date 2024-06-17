require("dotenv").config();
// async errors - provides an async wrapper
// errors handled by configured error handler
require("express-async-errors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// connect DB
const connectDB = require("./db/connect");

// routers imports
const productsRouter = require("./routes/products");

//middleware imports
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use("/api/v1/products", productsRouter);

//middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//start
const start = async () => {
    try {
        // connect DB
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
    } catch(error) {
        console.log(error);
    }
}

start();
