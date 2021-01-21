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
import { interfaceQuestionList } from '@/@types/Problemset/problemInterface';
import { getProblemListRequest } from '@/api/problemsetRequest'

import { reactive, ref } from 'vue';

export default {
  setup() {
    const current = ref(1);
    const total = ref(0);
    const pageSize = ref(20);
    
    const pageSizeOptions = ['10', '20', '30', '40', '50'];

    const data: interfaceQuestionList[] = reactive([])

    const sendProblemList = (page: number, size: number) => {
      /**
       * 这个res的类型绕来绕去给绕晕了
       */
      getProblemListRequest(page, size).then((res: any) => {
        console.log('res: ', res)
        const { size: remoteSize, total: remoteTotal, current: remotePages, records: remoteList } = res;
        total.value = remoteTotal;
        pageSize.value = remoteSize;
        current.value = remotePages;
        console.log(' current.value : ',  current.value )

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