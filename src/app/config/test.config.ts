import { DB_PASSWORD } from './variate';

// 测试版
export default {
  mariadb: {
    host: 'xxx.xxx.xxx.xxx', // 数据库地址
    user: 'root', // 数据库账号
    password: DB_PASSWORD, // 数据库密码
    database: 'koa-ts-full-template-db' // 数据库名
  }
};
