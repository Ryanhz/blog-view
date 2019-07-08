import { Model } from "sequelize-typescript";

export interface BindModelable {
  readonly ignoreAttributes?: string[]
  readonly Table: typeof Model
  readonly tColums: string[]
}

export abstract class BaseController implements BindModelable {

  ignoreAttributes?: string[] = ['deletedAt', 'createdAt']

  abstract get Table(): typeof Model

  get tColums() {
    return this.columsFor(this.Table)
  }

  columsFor = (model: typeof Model) => {
    return Object.keys(model.rawAttributes)
  }

  /**
   * 
   * @param fields 查询的colums
   * @param defaultFields 当fields为空或不合法是 colums
   */
  attributes(fields?: string, defaultFields?: string[]) {
    return this.attributesFor(this.Table, fields, defaultFields)
  }

  /**
   * 
   * @param model 表
   * @param fields 查询的colums
   * @param defaultFields 当fields为空或不合法是 colums
   */
  attributesFor(model: typeof Model, fields?: string, defaultFields?: string[]) {

    let attributes = fields && fields.split(',') || []
    let defaultColums = this.columsFor(model).filter(va => {
      return defaultFields && defaultFields.includes(va) || !this.ignoreAttributes.includes(va)
    })

    attributes = attributes.filter(va => {
      return defaultColums.includes(va)
    })
    attributes.length == 0 && (attributes = defaultColums)
    return attributes
  }
}