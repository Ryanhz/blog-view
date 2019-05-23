
import {
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  Comment,
  DataType
} from "sequelize-typescript";
import Base from './base';
import Post_category from "./post_category";

@Table
export default class Category extends Base {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Comment('分类父分类id')
  @Column(DataType.INTEGER)
  pid: number

  @Column(DataType.CHAR(50))
  name: string

  @Comment("分类别名")
  @Column(DataType.CHAR(15))
  alias: string

  @Comment('分类描述')
  @Column(DataType.TEXT)
  des: string

  @HasMany(() => Post_category)
  post_categorys: Post_category[]

}
