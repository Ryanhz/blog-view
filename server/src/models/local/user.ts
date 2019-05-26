import {
  Table, Column,
  PrimaryKey,
  AutoIncrement,
  Comment,
  HasMany,
  AllowNull,

  DataType,
  Default
} from "sequelize-typescript";
import Base from './base';

import Auth from "./auth";
import Post from "./post";
import Social from "./social";
import Tag from "./tag";
import Category from "./category";

@Table({
  initialAutoIncrement: "5000",
  comment: "用户表",
  timestamps: true,
})

export default class User extends Base<User> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT(20))
  id: number

  @Comment('用户名')
  @Column({
    type: DataType.CHAR,
    defaultValue: '',
  })
  name: string

  @Comment("昵称")
  @Column(DataType.CHAR)
  nickName: string

  @Comment('等级')
  @Default('0')
  @Column(DataType.CHAR)
  leve: string

  @Column({
    type: DataType.CHAR(1),
    comment: '性别, 1:男，2:女，3：保密',
    defaultValue: '1',
    values: ['1', '2', '3']
  })
  get sex(): string {
    let sex = this.getDataValue('sex')
    return sex == 1 && "男" || sex == 2 && "女" || "保密"
  }
  set sex(value: string) {
    this.setDataValue('sex', value)
  }

  @Comment('用户状态，1:正常，2:冻结')
  @Column({
    type: DataType.STRING(2),
    defaultValue: '1'
  })
  state: string

  @Comment('登陆ip')
  @Column(DataType.STRING(100))
  ip: string

  @Comment("个性签名")
  @Default('')
  @Column(DataType.TEXT)
  signature: string

  @Comment('email')
  @Column(DataType.CHAR)
  email: string

  @Comment('头像')
  @Column(DataType.CHAR)
  avatar: string

  @Comment("权限")
  @Default('')
  @Column(DataType.CHAR)
  rights: string

  @AllowNull
  @Comment('生日')
  @Column(DataType.CHAR)
  birthday: string

  @Comment('电话号码')
  @Column(DataType.TINYINT)
  phone: number

  @Comment("注册时间")
  @Column(DataType.DATE)
  createdAt: Date

  @Comment("上次登陆时间")
  @Column(DataType.DATE)
  loginedAt: Date

  @Comment("修改时间")
  @Column(DataType.DATE)
  updatedAt: Date

  @HasMany(() => Auth)
  auths: Auth[]

  @HasMany(() => Post)
  posts: Post[]

  @HasMany(() => Social)
  socials: Social[]

  @HasMany(() => Tag)
  tags: Tag[]

  @HasMany(() => Category)
  categorys: Category[]

}
