<template>
  <div class="home">
    <code-mirror></code-mirror>
    <a-button>2131213</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CodeMirror from '@/component/codeMirror/CodeMirror.vue'

@Options({
  components: {
    CodeMirror
  },
})
export default class Home extends Vue {}
</script>
