import { post } from '@/utils/request';

export default class User {
  /**
   * 登录
   * @param {String} username
   * @param {String} password
   * @returns
   */
  static async login(username, password) {
    return post('/login', {
      username,
      password,
    });
  }
}
