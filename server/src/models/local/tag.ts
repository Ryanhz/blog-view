import {
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  HasMany,
  BelongsTo,
  AutoIncrement,
  Comment, DataType
} from "sequelize-typescript";
import Base from './base';
import User from "./user";

import Post_tag from "./post_tag";
@Table({
  comment: "文章标签表",
  indexes:[{index:"SPATIAL",fields:["name"]}]
})
export default class Tag extends Base<Tag> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Comment('标签名')
  @Column(DataType.CHAR(20))
  name: string

  @Comment("标签别名")
  @Column(DataType.CHAR(15))
  alias: string

  @Comment('标签描述')
  @Column(DataType.STRING)
  des: string

  @HasMany(() => Post_tag)
  post_tags: Post_tag[]

  @BelongsTo(() => User, "user_id")
  user: User

  @ForeignKey(() => User)
  @Comment('发表用户id')
  @Column(DataType.BIGINT)
  user_id: number

}