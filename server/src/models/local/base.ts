import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  paranoid: true,
  charset: "utf8_general_cs"
})
export default class Base extends Model<Base> {

  // @PrimaryKey
  // @AutoIncrement
  // @Column(DataType.BIGINT(255))
  // id: number

}