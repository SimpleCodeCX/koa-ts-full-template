import { dbHelper, sqlHelper, dalHelper } from '../common';
import { UserDbModel } from '@model/v1';

export async function getUserList(dbModel?: UserDbModel,
  search?: string, pageNo?: number, pageSize?: number): Promise<Array<UserDbModel>> {
  const sqlWhere = getCommonWhere(dbModel, search);
  const whereSql = sqlWhere.whereSql;
  const whereParams = sqlWhere.whereParams;

  const sql = `SELECT * FROM user ${whereSql}`;
  const sqlWithPaging = sqlHelper.sqlPaging(sql, pageNo, pageSize);
  const sqlParams = [...whereParams];
  return dbHelper.query(sqlWithPaging, sqlParams);
}

export async function getByName(userName): Promise<Array<UserDbModel>> {
  const sql = 'SELECT * FROM user where user_name=?';
  const sqlParams = [userName];
  return dbHelper.query(sql, sqlParams);
}

function createSearchWhereSql(search: string, tbName?: string) {
  tbName = tbName ? `${tbName}.` : '';
  // 关键词查询 where
  let searchWhereSql;
  if (search && search !== '') {
    searchWhereSql = `(${tbName}user_name like '%${search}%'
        or ${tbName}hobby like '%${search}%')`;
  }
  return searchWhereSql;
}

function getCommonWhere(dbModel: UserDbModel, search: string) {
  // 关键词查询 where
  const searchWhereSql = createSearchWhereSql(search);
  const searchWhere = {
    sql: searchWhereSql,
    params: []
  };
  // 根据参数精确查询 where
  const modelWhere = dalHelper.andByModel(dbModel);

  const sqlWhere = dalHelper.joinAnd([searchWhere, modelWhere]);
  const whereSql = sqlWhere.sql ? `where ${sqlWhere.sql}` : ' ';
  const whereParams = sqlWhere.params && Array.isArray(sqlWhere.params) ? sqlWhere.params : [];

  return {
    whereSql,
    whereParams
  };
}
