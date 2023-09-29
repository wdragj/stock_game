import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
//HTTP request methods
//GET: get data from server
//POST: send data to server
//PUT: update data on server
//DELETE: delete data from server
const router = express.Router();

