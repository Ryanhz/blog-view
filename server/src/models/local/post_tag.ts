import {
  Table,
  Column,
  Comment,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
  HasOne,
  DataType
} from "sequelize-typescript";
import Base from './base';
import Post from "./post";
import Tag from "./tag";

@Table
export default class Post_tag extends Base {

  @ForeignKey(() => Post)
  @Comment('文章id')
  @Column(DataType.BIGINT)
  post_id: number

  @ForeignKey(() => Tag)
  @Comment('标签id')
  @Column(DataType.INTEGER)
  tag_id: number

  @BelongsTo(() => Post)
  post: Post

  @BelongsTo(() => Tag)
  tag: Tag
}