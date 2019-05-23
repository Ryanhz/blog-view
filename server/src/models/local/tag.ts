import {
  Table, Column,
  PrimaryKey,
  HasMany,
  AutoIncrement,
  Comment, DataType
} from "sequelize-typescript";
import Base from './base';

import Post_tag from "./post_tag";

@Table
export default class Tag extends Base {

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
  @Column(DataType.BIGINT)
  des: string


  @HasMany(() => Post_tag)
  post_tags: Post_tag[]


}