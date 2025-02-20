import TodoModel from "../model/Todo.model";
import { Request, Response } from "express";
import AshishContact from "../model/AshishContact.model";

async function GetAllData(req:Request,res:Response) {
  const todos:object = await TodoModel.find({})
        res.status(200).json({ message: "Data not found", data: todos });
    
}
async function AshishGetAllData(req:Request,res:Response) {
  const todos:object = await AshishContact.find({})
        res.status(200).json({ message: "Data not found", data: todos });
    
}
export  {GetAllData,AshishGetAllData};