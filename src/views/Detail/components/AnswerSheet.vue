<template>
  <div class="answerSheet-wrapper">
    <div class="top-toolbars">
      <a-select
        v-model="langSelectValue"
        style="width: 120px"
      >
        <a-select-option v-for="item in langSelectData" :key="item.value" :value="item.value">{{item.name}}</a-select-option>
      </a-select>
    </div>
    <code-mirror></code-mirror>
    <div class="bottom-btns">
      <a-button type="primary" class="test-btn"><CaretRightOutlined />测试代码</a-button>
      <a-button type="primary" class="submit-btn">提交代码</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { CaretRightOutlined } from '@ant-design/icons-vue'
import CodeMirror from '@/component/codeMirror/CodeMirror.vue'

export default {
  name: 'AnswerSheet',
  setup () {
    const langSelectValue = ref('')
    const langSelectData = ref([
      { name: 'C++', value: 'cpp' },
      { name: 'C', value: 'clang' },
      { name: 'Java', value: 'java' },
      { name: 'JavaScript', value: 'javascript' },
      { name: 'Python2', value: 'python2' },
      { name: 'Python3', value: 'python3' },
    ])
    return {
      langSelectValue,
      langSelectData
    }
  },
  components: {
    CodeMirror,
    CaretRightOutlined
  }
}

</script>

<style lang="less" scoped>
.answerSheet-wrapper {
  .top-toolbars {
    height: 36px;
  }
  .bottom-btns {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    .submit-btn {
      margin-right: 16px;
    }
    .test-btn {
      margin-right: 8px;
    }
  }
}
</style>