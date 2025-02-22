"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GetAllData_1 = require("../controller/GetAllData");
const Post_1 = require("../controller/Post");
const DeleteAll_1 = require("../controller/DeleteAll");
const Router = express_1.default.Router();
Router.get("/", GetAllData_1.GetAllData);
Router.post("/", Post_1.PostData);
Router.post("/Ashish", Post_1.AshishPost);
Router.get("/Ashish", GetAllData_1.AshishGetAllData);
Router.delete("/", DeleteAll_1.DeleteAll);
Router.delete("/Ashish", DeleteAll_1.AshishDeleteAll);
exports.default = Router;
