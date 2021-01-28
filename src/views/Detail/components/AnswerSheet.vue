<template>
  <div class="answerSheet-wrapper">
    <div class="top-toolbars">
      <a-select
        v-model:value="langSelectValue"
        style="width: 120px"
      >
        <a-select-option v-for="item in langSelectData" :key="item.value" :value="item.value">{{item.name}}</a-select-option>
      </a-select>
      <SettingOutlined class="setting-icon" @click="showSettingMOdal"/>
    </div>
    <code-mirror 
      ref="AnsCodeMirror"
      :lang="langSelectValue"
      :theme="themeSelectValue"
    >
    </code-mirror>
    <div class="bottom-btns">
      <a-button type="primary" class="test-btn"><CaretRightOutlined />测试代码</a-button>
      <a-button type="primary" class="submit-btn" @click="submitAnswer">提交代码</a-button>
    </div>
    <!-- 设置按钮模态框 -->
    <a-modal v-model:visible="settingModalStatus" title="编辑器设置" :footer="null">
      <div class="setting-item-container">
        <span>主题: </span>
        <a-select v-model:value="themeSelectValue" style="width: 120px">
          <a-select-option v-for="theme in themeSelectData" :key="theme.value">{{theme.name}}</a-select-option>
        </a-select>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { ref, watch, Ref } from 'vue'
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons-vue'
import axios from 'axios'
import CodeMirror from '@/component/codeMirror/CodeMirror.vue'
import { message } from 'ant-design-vue'

interface LangSelectItem {
  name: string;
  value: string;
  code: string;
}

// 语言选择select
const useLangSelectEffect = () => {
  const langSelectValue = ref('text/x-java')
  const langSelectData = ref<LangSelectItem[]>([
    { name: 'C++', value: 'text/x-c++src', code: '0' },
    { name: 'C', value: 'text/x-csrc', code: '4' },
    { name: 'C#', value: 'text/x-csharp', code: '5' },
    { name: 'Java', value: 'text/x-java', code: '1' },
    { name: 'JavaScript', value: 'text/javascript', code: '6' },
    { name: 'Python', value: 'text/x-python', code: '3' },
    { name: 'PHP', value: 'text/x-php', code: '13' },
  ])
  
  return { langSelectValue, langSelectData }
}

// 主题选择select
const useThemeSelectEffect = () => {
  const themeSelectValue = ref('blackboard')
  const themeSelectData = ref([
    { name: 'blackboard', value: 'blackboard' },
    { name: 'eclipse', value: 'eclipse'},
    { name: 'cobalt', value: 'cobalt' }
  ])

  return { themeSelectValue, themeSelectData }
}

// 设置--模态框
const useSettingModalEffect = () => {
  const settingModalStatus = ref(false)
  const showSettingMOdal = () => {
    settingModalStatus.value = true
  }

  return { settingModalStatus, showSettingMOdal }
}

// 提交
const useSubmitEffect = (langSelectValue: Ref<string>, langSelectData: Ref<LangSelectItem[]>) => {
  let languageCode = '1' // 默认是java语言
  const AnsCodeMirror: any = ref(null)
  
  // 发送获取判题结果的请求
  const sendJudgeResultRequest = async (id: number | string) => {
    const ans = await axios.get('/api/judgement?id=' + id).then(res => {
      const { data, status } = res.data
      return {
        data,
        status
      }
    })
    return await ans
  }

  // 获取判题结果
  let timer: any = null // 轮询定时器
  const getJudgeResult = async (id: number | string) => {
    const res = await sendJudgeResultRequest(id)
    const { data, status } = res
    if (status == -2) { // 正在判题
      timer = setInterval(() => {
        console.log('timer 2000')
        getJudgeResult(id)
      }, 2000)
    } else if (status == 0) { // 判题完成
      clearInterval(timer)
      console.log('判题完成', data)
    } else { // 服务器异常
      console.log('服务器异常了哟')
    }
  }

  // 点击提交按钮时触发
  const submitAnswer = () => {
    const codeText = AnsCodeMirror.value.getCodeText()
    const paramData = {
      id: 1,
      answer: codeText,
      language: languageCode
    }
    axios.post('/api/answers/submit', paramData).then(res => {
      const { status, data } = res.data
      const { submissionId } = data
      if (status == 0) {
        message.success('提交成功，请耐心等待') // message需要注册到全局（待优化）
        getJudgeResult(submissionId)
      } else {
        message.error('提交失败，请重新提交')
      }
    }, () => {
      message.error('提交失败，请重新提交')
    })
  }

  watch(langSelectValue, (newVal) => {
    console.log('sadadasda', newVal)
    const item = langSelectData.value.find((item: LangSelectItem) => item.value === newVal)
    if (item) languageCode = item.code
  })

  return  { submitAnswer, AnsCodeMirror }
}

export default {
  name: 'AnswerSheet',
  setup () {
    const { langSelectValue, langSelectData } = useLangSelectEffect()
    const { themeSelectValue, themeSelectData } = useThemeSelectEffect()
    const { settingModalStatus, showSettingMOdal } = useSettingModalEffect()
    const { submitAnswer, AnsCodeMirror } = useSubmitEffect(langSelectValue, langSelectData)

    return {
      langSelectValue,
      langSelectData,
      themeSelectValue,
      themeSelectData,
      AnsCodeMirror,
      submitAnswer,
      showSettingMOdal,
      settingModalStatus
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
  .setting-item-container {
    display: flex;
  }
}
</style>