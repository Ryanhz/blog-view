"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const cerDir = path_1.default.join(__dirname, "..", "SSL", "www.enight.club", "Nginx");
console.log(cerDir);
// 根据项目的路径导入生成的证书文件
const privateKey = fs_1.default.readFileSync(path_1.default.join(cerDir, "2_www.enight.club.key"), 'utf8');
const certificate = fs_1.default.readFileSync(path_1.default.join(cerDir, '1_www.enight.club_bundle.crt'), 'utf8');
const credentials = {
    key: privateKey,
    cert: certificate,
};
// 创建https服务器实例
const httpsServer = https_1.default.createServer(credentials, app_1.default.callback());
// 设置https的访问端口号
const SSLPORT = 8008;
// 启动服务器，监听对应的端口
httpsServer.listen(SSLPORT, () => {
    console.log(`HTTPS Server is running on: https://localhost:${SSLPORT}`);
});
//# sourceMappingURL=https.js.map