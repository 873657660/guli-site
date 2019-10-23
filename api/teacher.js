import request from '@/utils/request'

export default {
  getList() {
    return request({
      url: '/edu/teacher',
      method: 'get'
    })
  },

  getById(teacherId) {
    return request({
      url: `/edu/teacher/${teacherId}`,
      method: 'get'
    })
  },

  getPageList(page, limit) {
    return request({
      url: `/edu/teacher/${page}/${limit}`,
      method: 'get'
    })
  }

}

