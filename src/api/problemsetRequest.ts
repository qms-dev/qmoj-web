import request from '../utils/request'
import { interfaceQuestionListAll } from '@/@types/Problemset/problemInterface'
import { AxiosPromise } from 'axios'

/**
 * 
 * @param page 第page页
 * @param size 需要的size，用户可选的
 * @param orderby 后台暂时还没有做这个功能
 */
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
