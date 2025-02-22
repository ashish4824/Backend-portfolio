"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostData = PostData;
exports.AshishPost = AshishPost;
const Todo_model_1 = __importDefault(require("../model/Todo.model"));
const AshishContact_model_1 = __importDefault(require("../model/AshishContact.model"));
function PostData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const todo = new Todo_model_1.default(body);
        const newtodo = yield todo.save();
        res.status(200).json({ message: "Data save successfully", data: newtodo });
    });
}
function AshishPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const todo = new AshishContact_model_1.default(body);
        const newtodo = yield todo.save();
        res.status(200).json({ message: "Data save successfully", data: newtodo });
    });
}
