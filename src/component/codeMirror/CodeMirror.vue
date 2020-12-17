<template>
  <div class="codeMirror-wrapper">
    <textarea class="codeMirror-container" ref="textarea"></textarea>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import _CodeMirror  from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/cobalt.css'

export default {
  name: 'CoderMirror',
  props: {
    msg: String
  },
  data () {
    return {
      
      modes: [{
        value: 'css',
        label: 'CSS'
      }, {
        value: 'javascript',
        label: 'Javascript'
      }, {
        value: 'html',
        label: 'XML/HTML'
      }, {
        value: 'x-java',
        label: 'Java'
      }]
    }
  },
  setup() {
    

    let coder = null
    const CodeMirror = window.CodeMirror || _CodeMirror
    const options = {
      tabSize: 2,
      theme: 'cobalt',
      lineNumbers: true,
      line: true
    }
    const textarea = ref(null)

    onMounted(() => {
      coder = CodeMirror.fromTextArea(textarea.value as any, options)
      coder.setOption('mode', 'text/x-java')
      coder.setSize('auto', '520px')
    })

    return {
      textarea
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