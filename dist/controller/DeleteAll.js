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
exports.DeleteAll = DeleteAll;
exports.AshishDeleteAll = AshishDeleteAll;
const Todo_model_1 = __importDefault(require("../model/Todo.model"));
const AshishContact_model_1 = __importDefault(require("../model/AshishContact.model"));
function DeleteAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield Todo_model_1.default.deleteMany({});
        res.status(200).json({ message: "Data deleted successfully", data: todos });
    });
}
function AshishDeleteAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield AshishContact_model_1.default.deleteMany({});
        res.status(200).json({ message: "Data deleted successfully", data: todos });
    });
}
