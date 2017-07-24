const getCookie = (key) => {
  let cookies = {}
  let all = document.cookie
  if (all === '') {
    return ''
  }
  let list = all.split(';') // 分离成数组
  for (let i = 0; i < list.length; i++) {
    let item = list[i].trim()
    let p = item.indexOf('=')
    let name = item.substr(0, p)
    let value = item.substr(p + 1)
    cookies[name] = decodeURIComponent(value)
  }
  return cookies[key]
}

const setCookie = (key, value, expiredays) => {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  const expires = !expiredays ? '' : `;expires=${exdate.toGMTString()}`
  document.cookie = (key + '=' + escape(value) + expires)
}

const deleteCookie = (key) => {
  setCookie(key, '', -1)
}

const clearCookie = () => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    deleteCookie(cookies[i].split('=')[0])
  }
}

// 解析排序参数
const formatSort = (params) => {
  let {limit, page, sort} = params
  sort = sort ? `&sort=${sort}-desc` : ''
  return `?limit=${limit}&page=${page}${sort}`
}

// 返回首页
const backToIndex = (self, message) => {
  clearCookie()
  self.$message({
    message,
    type: 'warning'
  })
  self.$router.replace('/')
}

export {getCookie, setCookie, deleteCookie, clearCookie, formatSort, backToIndex}
