/**
 * comment接口
 */

import axios from 'js/http'; // 导入封装的axios实例
import base from '../base'; // 导入接口域名列表

export default {
  // 添加评论
  add_comment({
    id,
    name,
    content,
    email
  }) {
    return axios.get(base.add_comment, {
      params: {
        id,
        name,
        content,
        email
      }
    })
  }
};
