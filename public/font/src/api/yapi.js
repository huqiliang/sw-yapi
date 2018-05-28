import request from '@/utils/request'

export function update(data) {
  return request({
    baseURL: 'http://localhost:3000/api/',
    url: '/yapi',
    method: 'post',
    data
  })
}
