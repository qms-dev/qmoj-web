<template>
  <div class="questionDescription-wrapper" v-html="questionHTML"></div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'QuestionDescription',
  setup () {
    const questionHTML = ref('')

    onMounted(() => {
      axios.post('api/questions?id=1').then(res => {
        const data = res.data.data
        if (data) {
          questionHTML.value = data.content.replace(/\\n/g, '\n')
        }
      }, err => {
        console.log(err)
      })
    })

    return {
      questionHTML
    }
  } 
}

</script>

<style lang="less" scoped>
.questionDescription-wrapper {
  padding: 12px;
}
</style>