/**
 * 后期需要根据实际数据结构更改
 */
// 从后端获取到题目列表的信息配置的有关字段
export interface interfaceQuestionList {
  accepted?: boolean;
  number: number;
  title: string;
  answer: string;
  passRate: string;
  difficulty: string;
  frequency: string;
}