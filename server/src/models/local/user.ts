import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';


@Table
export default class User extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT(255))
  id: number

  // @AllowNull
  @Comment('登陆ip')
  @Column
  ip: string

  @Comment('用户名')
  @Column(DataType.CHAR)
  name: string

  @Comment("个性签名")
  @Column(DataType.TEXT)
  signature: string

  @Comment('密码')
  @Column(DataType.CHAR)
  password: string

  @Comment('email')
  @Column(DataType.CHAR)
  email: string

  @Comment('头像')
  @Column(DataType.CHAR)
  avatar: string

  @Comment('等级')
  @Column(DataType.CHAR)
  leve: string

  @Comment("权限")
  @Column(DataType.CHAR)
  rights: string

  @Comment("注册时间")
  @Column(DataType.DATE)
  sign_up: Date

  @AllowNull
  @Comment('生日')
  @Column(DataType.CHAR)
  birthday: string

  @Comment('电话号码')
  @Column(DataType.TINYINT)
  phone: number

  @Comment("昵称")
  @Column(DataType.CHAR)
  nickName: string

}
