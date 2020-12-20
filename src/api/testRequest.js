import request from '../utils/request'

export function testApi() {
  return request({
    url: '/testApi',
    method: 'get',
  })
}

/**
 * how to use
import { testApi } from '';
export default {
  setup(){
    testApi().then(res => {
      console.log('res: ', res)
    })
  }
}
 */