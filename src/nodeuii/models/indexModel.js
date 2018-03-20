/**
* @fileOverview 实现index数据模型
* @author 727040141@qq.com
*/
import { resolve } from "dns";
/**
* IndexModel 类生成一段异步数据
* @class
*/
export default class IndexModel {
  /**
  * @constructor
  * @param {string} app koa2的执行上下文
  */

  constructor(app) {}
  /**
  *获取具体api接口数据
  * @return {Promise}
  * return new Promise
  * getData()
  */
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello indexAction");
      }, 1000);
      // throw new Error('test')
    });
  }
}
