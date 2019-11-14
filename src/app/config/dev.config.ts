import { MARIADBPWD } from './variate';

// 本地开发版
export default {
  mariadb: {
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库账号
    password: MARIADBPWD, // 数据库密码
    database: 'koa-ts-full-template-db' // 数据库名
  }
};
