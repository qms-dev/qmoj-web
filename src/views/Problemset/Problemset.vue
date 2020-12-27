<template>
<div>
  <QuestionListBase :data="data" />
</div>
</template>

<script lang="ts">
import QuestionListBase from './components/question-list-base.vue';
import { interfaceQuestionList } from './config/problemInterface';

/**
 * mock数据
 */
const data: interfaceQuestionList[] = [
  {
    accepted: true,
    number: 1,
    title: '两数之和',
    answer: '999',
    passRate: '80%',
    difficulty: 'middle',
    frequency: '?'
  }
];

export default {
  setup() {
    return {
      data
    }
  },
  components:{
    QuestionListBase
  }
}
</script>

<style>

</style>