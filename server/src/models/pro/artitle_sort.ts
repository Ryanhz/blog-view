import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Artitle_sort extends Base {

  @Column(DataType.BIGINT(255))
  article_id: number

  @Column(DataType.BIGINT)
  sort_id: number

}