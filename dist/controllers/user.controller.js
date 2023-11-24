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
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const user_validation_1 = __importDefault(require("../validation/user.validation"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const zodParseData = user_validation_1.default.parse(userData);
        const result = yield user_service_1.userServices.createUser(zodParseData);
        res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong"
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userServices.getAllUsers();
        res.status(200).json({
            status: "success",
            message: "User fetched successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong"
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_service_1.userServices.getSingleUser(id);
        res.status(200).json({
            status: "success",
            message: "Single user fetched successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong"
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const id = req.params.id;
        const result = yield user_service_1.userServices.updateUser(id, userData);
        res.status(200).json({
            status: "success",
            message: "User updated successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong"
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield user_service_1.userServices.deleteUser(id);
        res.status(200).json({
            status: "success",
            message: "User deleted successfully"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error.message || "Something went wrong"
        });
    }
});
exports.userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
};
