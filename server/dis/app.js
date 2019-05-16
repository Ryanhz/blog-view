"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config");
const server_1 = __importDefault(require("./server"));
const mysqlConfig = config_1.configs.mysql;
const _ = new sequelize_typescript_1.Sequelize({
    host: mysqlConfig.host[0],
    database: mysqlConfig.database,
    username: mysqlConfig.user,
    password: mysqlConfig.password,
    // 或者一些其他的数据库
    dialect: 'mysql',
    // 加载我们的实体
    modelPaths: [path_1.default.resolve(__dirname, `./models/${mysqlConfig.modelPath}`)],
    pool: {
        // 连接池的一些相关配置
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false,
    // true会在控制台打印每次sequelize操作时对应的SQL命令
    logging: true,
});
exports.default = server_1.default;
//# sourceMappingURL=app.js.map