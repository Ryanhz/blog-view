import {
  Table, Column, PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
  Comment,
  DataType
} from "sequelize-typescript";
import Base from './base';
import User from "./user";

@Table
export default class Social extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Comment('社交')
  @Column(DataType.CHAR(20))
  name: string

  @Comment("社交别名")
  @Column(DataType.CHAR(15))
  alias: string

  @Comment("图标")
  @Column(DataType.STRING)
  icon: string

  @Comment("链接")
  @Column(DataType.STRING)
  link: string

  @Comment('社交描述')
  @Column(DataType.BIGINT)
  des: string

  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT(20),
    comment: "外键"
  })
  user_id: number
}