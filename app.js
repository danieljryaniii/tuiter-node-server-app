import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/tuiter);

import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());

console.log("Server Started.............");
console.log("Listening on Port 4000.....");

TuitsController(app);
HelloController(app);
UsersController(app);
app.listen(process.env.PORT || 4000);

