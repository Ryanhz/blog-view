import { ConfigMap } from 'config'

export const configs: ConfigMap = {
  mysql: {
    host: ['127.0.0.1'],
    user: 'root',
    password: 'hzy123456',
    database: 'blog_local',
    key: 'mysql',
    modelPath: 'local',
  },
}
