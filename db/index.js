import express from "express";
import consig rom "consig";

const app = express();


consig()
.include("db.js")
.then("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);


