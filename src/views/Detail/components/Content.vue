<template>
  <div class="content-wrapper">
    <div class="content-left">
      <a-tabs>
        <a-tab-pane key="1">
          <template #tab>
            <span>
              <ReadOutlined />
              题目描述
            </span>
          </template>
          <div>
            <question-description></question-description>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab>
            <span>
              <HistoryOutlined />
              提交记录
            </span>
          </template>
          <div>222</div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="content-right">
      <answer-sheet></answer-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import { ReadOutlined, HistoryOutlined } from '@ant-design/icons-vue'
import QuestionDescription from './QuestionDescription.vue'
import AnswerSheet from './AnswerSheet.vue'

export default {
  name: 'Content',
  components: {
    ReadOutlined,
    HistoryOutlined,
    QuestionDescription,
    AnswerSheet
  }
}

</script>

<style lang="less" scoped>
.content-wrapper {
  display: flex;
  height: 600px;
  .content-left {
    width: 460px;
    background-color: #ffffff;
  }
  .content-right {
    flex: 1;
    margin-left: 16px;
  }
}
</style>