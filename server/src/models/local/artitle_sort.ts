import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Artitle_sort extends Base {

  @Comment('文章id')
  @Column(DataType.BIGINT(255))
  article_id: number

  @Comment('分类id')
  @Column(DataType.BIGINT)
  sort_id: number

}