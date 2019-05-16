"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mz_1 = require("mz");
const path_1 = __importDefault(require("path"));
class Account {
    static async list(ctx, next) {
        console.log(ctx.request.body);
        let root = path_1.default.join(__dirname, '../../public/data');
        let listPath = path_1.default.join(root, 'book.json');
        let jsondata = await mz_1.fs.readFile(listPath);
        let data = jsondata.toString();
        ctx.success(JSON.parse(data));
    }
}
exports.default = Account;
//# sourceMappingURL=art.js.map