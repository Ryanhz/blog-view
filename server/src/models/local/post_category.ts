import {
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  Comment, DataType
} from "sequelize-typescript";
import Base from './base';
import Post from "./post";
import Category from "./category";

@Table
export default class Post_category extends Base {

  @ForeignKey(() => Post)
  @Comment('文章id')
  @Column(DataType.BIGINT(255))
  post_id: number

  @ForeignKey(() => Category)
  @Comment('分类id')
  @Column(DataType.INTEGER)
  category_id: number


  @BelongsTo(() => Post)
  post: Post

  @BelongsTo(() => Category)
  tag: Category
}