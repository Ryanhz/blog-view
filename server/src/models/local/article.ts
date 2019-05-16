import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Article extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT(255))
  id: number

  @Comment('发表用户id')
  @Column(DataType.BIGINT(255))
  user_id: number

  @Comment('文章title')
  @Column(DataType.TEXT)
  title: string

  @Comment('文章正文')
  @Column(DataType.TEXT("long"))
  content: string

  @Comment('文章浏览数')
  @Column(DataType.BIGINT(255))
  views: number

  @Comment('文章封面图片')
  @Column(DataType.TEXT)
  cover: string

  @Comment('文章封面简介')
  @Column(DataType.TEXT("long"))
  digest: string


}