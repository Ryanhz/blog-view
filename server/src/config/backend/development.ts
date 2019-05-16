import { ConfigMap } from "config";

export const configs: ConfigMap = {
  mysql: {
    host: ['127.0.0.1'],
    user: 'root',
    password: 'hanzf',
    database: 'blog_dev',
    key: 'mysql',
    modelPath: 'dev',
  },
}
