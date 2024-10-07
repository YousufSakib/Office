require("dotenv").config();
// require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const packageRouter = require("./routes/package");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// app.use((req, res, next) => {
//   // Log request information
//   console.log(`Request Method: ${req.method}`);
//   console.log(`Request URL: ${req.url}`);
//   console.log(`Request Headers: ${JSON.stringify(req.headers)}`);

//   // Log query parameters
//   if (Object.keys(req.query).length) {
//     console.log(`Query Parameters: ${JSON.stringify(req.query)}`);
//   }

//   // Store the start time for response duration
//   const start = Date.now();

//   // Listen for the response finish event
//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     console.log(`Response Status: ${res.statusCode}`);
//     console.log(`Response Time: ${duration}ms`);
//   });

//   next();
// });

// routes
app.use("/api/v1/packages", packageRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
