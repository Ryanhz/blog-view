import {
  Table, Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasMany,
  AutoIncrement, Comment, DataType
} from "sequelize-typescript";

import Base from './base';
import User from "./user";
import Post_tag from "./post_tag";
import Post_category from "./post_category";

@Table({
  timestamps: true,
  paranoid: true,
})
export default class Post extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @Comment('文章title')
  @Column(DataType.STRING)
  title: string

  @Comment('文章正文')
  @Column(DataType.TEXT("long"))
  content: string

  @Comment('文章浏览数')
  @Column(DataType.INTEGER)
  views: number

  @Comment('文章封面图片')
  @Column(DataType.STRING)
  cover: string

  @Comment('文章封面简介')
  @Column(DataType.TEXT)
  digest: string

  @BelongsTo(() => User, "user_id")
  user: User

  @ForeignKey(() => User)
  @Comment('发表用户id')
  @Column(DataType.BIGINT)
  user_id: number

  @HasMany(() => Post_tag)
  post_tags: Post_tag[]

  @HasMany(() => Post_category)
  post_categorys: Post_category[]

}