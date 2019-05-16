import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Label extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
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
}