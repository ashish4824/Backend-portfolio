import TodoModel from "../model/Todo.model";
import { Request, Response } from "express";
 import AshishContact from "../model/AshishContact.model";
 async function PostData(req: Request, res: Response) {
    const body  = req.body;
    const todo = new TodoModel(body)
    const newtodo:object = await todo.save();
    res.status(200).json({ message: "Data save successfully", data: newtodo });

}
async function AshishPost(req: Request, res: Response) {
    const body  = req.body;
    const todo = new AshishContact(body)
    const newtodo:object = await todo.save();
    res.status(200).json({ message: "Data save successfully", data: newtodo });

}
export  {PostData,AshishPost};