import { userDal } from '@dal/v1';
import { UserResModel, UserDbModel } from '@model/v1';

/**
 * bll 层主要对 dal 层进行调用，并且格式化数据，并被 controller 层调用
 */

export async function getUserList(dbModel?: UserDbModel, search?: string, pageNo?: number, pageSize?: number) {
  const userList: Array<UserDbModel> = await userDal.getUserList(dbModel, search, pageNo, pageSize);
  return formatDbList(userList);
}

export async function getByName(userName) {
  const users: Array<UserDbModel> = await userDal.getByName(userName);
  return formatDb(users[0]);
}

export function formatDb(db: UserDbModel): UserResModel {
  const user: UserResModel = {
    userName: db.user_name,
    age: db.age,
    hobby: db.hobby
  };
  return user;
}

export function formatDbList(dbList: Array<UserDbModel>): Array<UserResModel> {
  const dataList: Array<UserResModel> = [];
  for (let i = 0; i < dbList.length; i++) {
    const data = formatDb(dbList[i]);
    dataList.push(data);
  }
  return dataList;
}
