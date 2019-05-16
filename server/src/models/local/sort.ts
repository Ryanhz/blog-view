import { Table, Column, PrimaryKey, AutoIncrement, Comment, AllowNull, DataType } from "sequelize-typescript";
import Base from './base';

@Table
export default class Sort extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @Column(DataType.CHAR(50))
  name: string

  @Comment("分类别名")
  @Column(DataType.CHAR(15))
  alias: string

  @Comment('分类描述')
  @Column(DataType.TEXT)
  des: string

  @Comment('分类父分类id')
  @Column(DataType.BIGINT)
  pid: number

}
