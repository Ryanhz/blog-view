"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let port = 8001;
app_1.default.listen(port, () => {
    console.log(`服务启动：${port} 端口`);
});
exports.default = app_1.default;
//# sourceMappingURL=http.js.map