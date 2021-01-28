<template>
  <div class="codeMirror-wrapper">
    <textarea class="codeMirror-container" ref="textarea"></textarea>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watch } from 'vue'
import _CodeMirror  from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/go/go.js'
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/lib/codemirror.css'

// 主题样式
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/eclipse.css'

export default {
  name: 'CoderMirror',
  props: {
    lang: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    }
  },
  setup(props: any) {
    let coder: CodeMirror.EditorFromTextArea | null = null
    const CodeMirror = window.CodeMirror || _CodeMirror
    const options = {
      tabSize: 2,
      theme: 'blackboard',
      lineNumbers: true,
      line: true
    }
    const textarea = ref(null)

    const getCodeText = () => {
      if (coder !== null) return coder.getValue()
    }

    onMounted(() => {
      coder = CodeMirror.fromTextArea(textarea.value as any, options)
      coder.setOption('mode', 'text/x-java')
      coder.setSize('auto', '520px')
    })

    watch(() => props.lang, (lang) => {
      if (coder !== null) {
        coder.setOption('mode', lang)
      }
    })

    watch(() => props.theme, (theme) => {
      console.log(theme)
      if (coder !== null) {
        
        coder.setOption('theme', theme)
      }
    })

    return {
      textarea,
      getCodeText
    }
  }
}

</script>

<style lang="less" scoped>
.codeMirror-wrapper {
  .codeMirror-container {
    height: 600px;
  }
}
</style>