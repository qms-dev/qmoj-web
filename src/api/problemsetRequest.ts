import request from '../utils/request'
import { interfaceQuestionListAll } from '@/views/Problemset/config/problemInterface'

export function getProblemListRequest(pageNum: number, pageSize: number, orderby = 'id'): Promise<interfaceQuestionListAll> {
  return Promise.resolve({
    "pageNum": 1,
    "pageSize": 2,
    "total": 12,
    "pages": 3,
    "list": [
        {
            "id": 1,
            "title": "两数之和",
            "difficulty": 0,
            "topicTags": [
                "数组",
                "哈希表"
            ]
        },
        {
            "id": 2,
            "title": "三数之和",
            "difficulty": 1,
            "topicTags": [
                "数组",
                "哈希表"
            ]
        }
    ]
})
  // return request({
  //   url: '/api/questionset',
  //   method: 'get',
  //   params: {
  //     pageNum,
  //     pageSize,
  //     orderby
  //   }
  // })
}
