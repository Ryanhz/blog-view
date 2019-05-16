import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';


@Table
export default class User extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT(255))
  id: number

  // @AllowNull
  @Column
  ip: string

  @Column(DataType.CHAR)
  name: string


  @Column(DataType.CHAR)
  password: string

  @Column(DataType.CHAR)
  email: string

  @Column(DataType.CHAR)
  profile_photo: string

  @Column(DataType.CHAR)
  leve: string

  @Comment("权限")
  @Column(DataType.CHAR)
  rights: string

  @Comment("注册时间")
  @Column(DataType.DATE)
  sign_up: Date

  @AllowNull
  @Column
  birthday: Date

  @Column(DataType.TINYINT)
  phone: number

  @Comment("昵称")
  @Column(DataType.CHAR)
  nickName: string

}
