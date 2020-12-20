<template>
  <div class="answerSheet-wrapper">
    <div class="top-toolbars">
      <a-select
        v-model:value="langSelectValue"
        style="width: 120px"
      >
        <a-select-option v-for="item in langSelectData" :key="item.value" :value="item.value">{{item.name}}</a-select-option>
      </a-select>
      <SettingOutlined class="setting-icon"/>
    </div>
    <code-mirror ref="AnsCodeMirror" :lang="langSelectValue"></code-mirror>
    <div class="bottom-btns">
      <a-button type="primary" class="test-btn"><CaretRightOutlined />测试代码</a-button>
      <a-button type="primary" class="submit-btn" @click="submitAnswer">提交代码</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons-vue'
import axios from 'axios'
import CodeMirror from '@/component/codeMirror/CodeMirror.vue'

export default {
  name: 'AnswerSheet',
  setup () {
    const langSelectValue = ref('')
    const langSelectData = ref([
      { name: 'C++', value: 'text/x-c++src'},
      { name: 'C', value: 'text/x-csrc' },
      { name: 'C#', value: 'text/x-csharp' },
      { name: 'Java', value: 'text/x-java' },
      { name: 'JavaScript', value: 'text/javascript' },
      { name: 'Python', value: 'text/x-python' },
      { name: 'PHP', value: 'text/x-php' },
    ])

    const AnsCodeMirror: any = ref(null)

    const submitAnswer = () => {
      const codeText = AnsCodeMirror.value.getCodeText()
      console.log('codeText', codeText)
      axios.post('https://example.com/api/questions?id=1').then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }

    return {
      langSelectValue,
      langSelectData,
      AnsCodeMirror,
      submitAnswer
    }
  },
  components: {
    CodeMirror,
    CaretRightOutlined,
    SettingOutlined
  }
}

</script>

<style lang="less" scoped>
.answerSheet-wrapper {
  .top-toolbars {
    height: 36px;
    .setting-icon {
      margin-left: 24px;
      cursor: pointer;
    }
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