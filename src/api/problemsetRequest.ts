import request from '../utils/request'
import { interfaceQuestionListAll } from '@/@types/Problemset/problemInterface'
import { AxiosPromise } from 'axios'

export function getProblemListRequest(page: number, size: number, orderby = 'id'): AxiosPromise<interfaceQuestionListAll> {
    return request({
        url: '/api/question/page',
        method: 'get',
        params: {
            page,
            size,
            orderby
        }
    })
}
