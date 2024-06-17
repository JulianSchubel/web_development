const tasksRouter = require("./routes/tasks");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

const connectDB = require("./db/connect");
const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error_handler");
require("dotenv").config();

app.use(express.static("./public/"));
// deserialize JSON objects from a string
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasksRouter);
app.use('*', notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
    } catch(error) {
        throw new Error(error);
    }
}

start();
