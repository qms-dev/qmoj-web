<template>
  <div>
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ref } from 'vue'
import _CodeMirror  from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/cobalt.css'

const CodeMirror = window.CodeMirror || _CodeMirror

@Options({
  props: {
    msg: String
  },
  data () {
    return {
      options: {
        tabSize: 2,
        theme: 'cobalt',
        lineNumbers: true,
        line: true
      },
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
  mounted () {
    this.coder = CodeMirror.fromTextArea(this.$refs.textarea, this.options)
    this.coder.setOption('mode', 'text/x-java')
  }
})

export default class HelloWorld extends Vue {
  setUp() {
    const coder = ref(null)
    return {
      coder
    }
  }
}

</script>

<style lang="less" scoped>

</style>