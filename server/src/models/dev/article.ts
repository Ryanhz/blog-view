import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Article extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT(255))
  id: number

  @Column(DataType.BIGINT(255))
  user_id: number

  @Column(DataType.TEXT)
  title: string

  @Column(DataType.TEXT("long"))
  content: string

  @Column(DataType.BIGINT(255))
  views: number

}