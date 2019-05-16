"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const base_1 = __importDefault(require("./base"));
let User = class User extends base_1.default {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BIGINT(255)),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "ip", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "profile_photo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "leve", void 0);
__decorate([
    sequelize_typescript_1.Comment("权限"),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "rights", void 0);
__decorate([
    sequelize_typescript_1.Comment("注册时间"),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "sign_up", void 0);
__decorate([
    sequelize_typescript_1.AllowNull,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "birthday", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TINYINT),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Comment("昵称"),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.CHAR),
    __metadata("design:type", String)
], User.prototype, "nickName", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.default = User;
//# sourceMappingURL=user.js.map