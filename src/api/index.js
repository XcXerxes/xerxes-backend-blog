import config from '../config'
import {getCookie} from '../utils'

const checkStatus = (response) => {
  if (response.checkStatus >= 200 && response.status < 300) {
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

const parseParams = (method, params) => {
  const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'xc_token': getCookie('xc_token')
  }
  if (!method) {
    return {
      headers
    }
  }
  return {
    headers,
    method,
    body: JSON.stringify(params)
  }
}

export default {

}