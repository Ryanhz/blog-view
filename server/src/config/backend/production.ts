import { ConfigMap } from 'config'

export const configs: ConfigMap = {
  mysql: {
    host: ['127.0.0.1'],
    user: 'root',
    password: 'hanzf',
    database: 'blog',
    key: 'mysql',
    modelPath: 'pro',
  },
}
