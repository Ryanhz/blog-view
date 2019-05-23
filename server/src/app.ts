import path from 'path';
import { Sequelize } from 'sequelize-typescript'
import { MysqlConfig } from 'config'
import { distPath, configs } from './config'

import server from "./server"

const mysqlConfig = configs.mysql as MysqlConfig

console.log(mysqlConfig)
const sequelize = new Sequelize({
  host: mysqlConfig.host[0],
  database: mysqlConfig.database,
  username: mysqlConfig.user,
  password: mysqlConfig.password,
  // 或者一些其他的数据库
  dialect: 'mysql',
  // 加载我们的实体
  pool: {
    // 连接池的一些相关配置
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false, //是否识别字段别名中的下滑线
  // true会在控制台打印每次sequelize操作时对应的SQL命令
  logging: true,
  define: {
    timestamps: false,
    paranoid: true, //开启假删除
    charset: 'utf8',
    freezeTableName: true, //固定表名为单数
  },
  timezone: '+8:00',//北京时间
  modelPaths: [path.resolve(__dirname, `./models/${mysqlConfig.modelPath}`)],
})
sequelize.sync({ force: true })

export default server;