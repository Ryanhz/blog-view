import {
  Table,
  Column,
  Comment,
  ForeignKey,
  BelongsTo,
  DataType
} from "sequelize-typescript";
import Base from './base';
import Post from "./post";
import Tag from "./tag";

@Table({
  comment: "文章标签关系表"
})
export default class Post_tag extends Base<Post_tag> {

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