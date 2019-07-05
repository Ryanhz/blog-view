import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  paranoid: true,
  charset: "utf8"
})
export default class Base<T extends Base<T>> extends Model<T> {

  // @PrimaryKey
  // @AutoIncrement
  // @Column(DataType.BIGINT(255))
  // id: number

}