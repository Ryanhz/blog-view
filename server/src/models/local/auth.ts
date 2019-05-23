import {
  Table, Column,
  PrimaryKey, AutoIncrement,
  BelongsTo,
  ForeignKey,
  Comment,
  DataType
} from "sequelize-typescript";
import Base from './base';
import User from "./user";

@Table({
  timestamps: true,
  paranoid: true,
  comment: "账号表"
})
export default class Auth extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @Comment('登录类型（手机号 邮箱 用户名）或第三方应用名称（微信 微博等）')
  @Column(DataType.STRING)
  type: string

  @Comment('标识（手机号 邮箱 用户名或第三方应用的唯一标识）')
  @Column(DataType.STRING)
  identifier: string

  @Comment("密码凭证（站内的保存密码，站外的不保存或保存token）")
  @Column(DataType.CHAR)
  credential: string

  @Comment("创建时间")
  @Column(DataType.DATE)
  createdAt: Date

  @Comment("上次登陆时间")
  @Column(DataType.DATE)
  loginedAt: Date

  @Comment("修改时间")
  @Column(DataType.DATE)
  updatedAt: Date

  @BelongsTo(() => User)
  user: User

  @Comment('用户id')
  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  user_id: number
}
