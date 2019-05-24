
import {
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  BelongsTo,
  HasMany,
  Comment,
  DataType,
  Default
} from "sequelize-typescript";
import Base from './base';
import Post_category from "./post_category";
import User from "./user";

@Table({
  comment: "文章分类表"
})
export default class Category extends Base<Category> {

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
  @Column(DataType.STRING)
  des: string

  @HasMany(() => Post_category)
  post_categorys: Post_category[]

  @BelongsTo(() => User, "user_id")
  user: User

  @ForeignKey(() => User)
  @Comment('发表用户id')
  @Column(DataType.BIGINT)
  user_id: number

}
