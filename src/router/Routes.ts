import express from "express";
import {GetAllData,AshishGetAllData} from "../controller/GetAllData";
import {PostData,AshishPost} from "../controller/Post";
import {DeleteAll,AshishDeleteAll} from "../controller/DeleteAll";
const Router: express.Router = express.Router();
Router.get("/", GetAllData);
Router.post("/", PostData);
Router.post("/Ashish", AshishPost);
Router.get("/Ashish", AshishGetAllData);
Router.delete("/", DeleteAll);
Router.delete("/Ashish", AshishDeleteAll);
export default Router;

