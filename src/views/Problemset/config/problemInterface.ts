// 从后端获取到题目列表的信息配置的有关字段
export interface interfaceQuestionList {
  accepted?: boolean;
  difficulty: number;
  id: number;
  title: string;
  topicTags: string[]
}

// 返回所有信息的字段（分页）
export interface interfaceQuestionListAll {
  pageNum: number;
  pageSize: number;
  total: number;
  pages: number;
  list: interfaceQuestionList[];
}