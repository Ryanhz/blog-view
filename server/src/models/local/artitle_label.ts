import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Artitle_label extends Base {

  @Comment('文章id')
  @Column(DataType.BIGINT(255))
  article_id: number

  @Comment('标签id')
  @Column(DataType.BIGINT)
  label_id: number

}