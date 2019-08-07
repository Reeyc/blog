/**
 * article接口
 */

import axios from 'js/http'; // 导入封装的axios实例
import base from '../base'; // 导入接口域名列表

export default {
  // 所有文章
  all_Article() {
    return axios.get(base.all);
  },
  // 详情文章
  detail_Article(id) {
    return axios.get(base.detail, {
      params: {
        id
      }
    })
  }
};
