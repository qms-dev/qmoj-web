<template>
<div class="question-list-container">
  <QuestionListBase :data="data" />
  <a-pagination
      class="question-list-pagination"
      :current="current"
      :pageSize="pageSize"
      :total="total"
      show-size-changer
      :page-size-options="pageSizeOptions"
      @showSizeChange="changeSizeChange"
      @change="changePage"
    >
      <template #buildOptionText="props">
        <span>{{ props.value }}条/页</span>
      </template>
    </a-pagination>
</div>
</template>

<script lang="ts">
import QuestionListBase from './components/question-list-base.vue';
import { interfaceQuestionList } from './config/problemInterface';
import { getProblemListRequest } from '@/api/problemsetRequest'

import { reactive, ref } from 'vue';

export default {
  setup() {
    const current = ref(1);
    const total = ref(0);
    const pageSize = ref(20);
    
    const pageSizeOptions = ['10', '20', '30', '40', '50'];

    const data: interfaceQuestionList[] = reactive([
      {
        accepted: true,
        difficulty: 0,
        id: 1,
        title: "两数之和",
        topicTags: ["数组", "哈希表"],
      }
    ])

    const sendProblemList = (page: number, size: number) => {
      getProblemListRequest(page, size).then(({pageSize: remoteSize, total: remoteTotal, pages: remotePages, list: remoteList}) => {
        total.value = remoteTotal;
        pageSize.value = remoteSize;
        current.value = remotePages;

        data.splice(0,data.length, ...remoteList);
      })
    }

    const changePage = (page: number, size: number): void => {
      sendProblemList(page, size);
    }

    const changeSizeChange = (page: number, size: number): void => {
      sendProblemList(page, size);
    }

    /**
     * 加载页面，初始化操作
     */
    sendProblemList(current.value, pageSize.value);
    return {
      data,
      current,
      total,
      pageSize,
      pageSizeOptions,
      changePage,
      changeSizeChange
    }
  },
  components:{
    QuestionListBase
  }
}
</script>

<style lang="less" scoped>
.question-list-container{
  margin: 10px;
  display: flex;
  flex-direction: column;
  .question-list-pagination{
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
}
</style>