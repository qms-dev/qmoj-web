import request from '../utils/request'
import { interfaceQuestionListAll } from '@/@types/Problemset/problemInterface'
import { AxiosPromise } from 'axios'

export function getProblemListRequest(pageNum: number, pageSize: number, orderby = 'id'): AxiosPromise<interfaceQuestionListAll> {
    return request({
        url: '/mock/problemset.json',
        method: 'get',
        params: {
            pageNum,
            pageSize,
            orderby
        }
    })
}
