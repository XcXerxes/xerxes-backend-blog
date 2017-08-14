import config from '../config'
import { getCookie, formatSort } from '../utils'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const _parenResponse = (response) => {
  return response.json()
}

// 解析参数

const _parseParams = (method, params) => {
  const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'xc_token': getCookie('xc_token')
  }
  if (method === 'POST') {
    return {
      headers,
      method,
      body: JSON.stringify(params)
    }
  }
  return {
    headers,
    method: method || 'GET'
  }
}

/**
 * @method login
 */
export default {
  login (params) {
    console.log(`${config.api}/backend/admin/login`)
    return fetch(`${config.api}/backend/admin/login`, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  getCateList (params) {
    params = formatSort(params)
    console.log(params)
    return fetch(`${config.api}/backend/cate/list${params}`, _parseParams())
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  addCate (params) {
    return fetch(`${config.api}/backend/cate`, _parseParams('POST', params))
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  updateCate (params) {
    return fetch(`${config.api}/backend/cate/update`, _parseParams('POST', params))
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .then(err => err)
  },
  deleteCateById (id) {
    return fetch(`${config.api}/backend/cate/${id}`, _parseParams('DELETE'))
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  getAllCates () {
    return fetch(`${config.api}/backend/cate/all`, _parseParams())
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  getArticleList (params) {
    params = formatSort(params)
    return fetch(`${config.api}/backend/article/list${params}`, _parseParams())
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  getArticleItem (id) {
    return fetch(`${config.api}/backend/article/${id}`, _parseParams())
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  addArticle (params) {
    return fetch(`${config.api}/backend/article`, _parseParams('POST', params))
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  updateArticle (params) {
    return fetch(`${config.api}/backend/article/update`, _parseParams('POST', params))
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  },
  deleteArticleById (id) {
    return fetch(`${config.api}/backend/article/${id}`, _parseParams('DELETE'))
      .then(checkStatus)
      .then(_parenResponse)
      .then(data => data)
      .catch(err => err)
  }
}
