import TodoModel from "../model/Todo.model";
import { Request, Response } from "express";
import AshishContact from "../model/AshishContact.model";

async function DeleteAll(req:Request,res:Response) {
    const todos = await TodoModel.deleteMany({});
    res.status(200).json({ message: "Data deleted successfully", data: todos });
}
async function AshishDeleteAll(req:Request,res:Response) {
    const todos = await AshishContact.deleteMany({});
    res.status(200).json({ message: "Data deleted successfully", data: todos });
}
export  {DeleteAll,AshishDeleteAll};