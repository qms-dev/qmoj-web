<template>
  <a-table :columns="columnsBaseTitle" :data-source="data">
    <template #name="{text}">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang="ts">
// import { interfaceQuestionList } from '../config/problemInterface';
import columnsBaseTitle from '../config/columnsBaseTitle';

export default {
  /**
   * 这个data应该是interfaceQuestionList[]的数据类型，但是死活不知道怎么正确写好
   */
  props: {
    data: Array,
  },
  data() {
    return {
      columnsBaseTitle,
    };
  },
  setup(){
    return {

    }
  }
};
</script>
