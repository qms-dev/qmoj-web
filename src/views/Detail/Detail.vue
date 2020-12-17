<template>
  <div>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script lang="ts">
import Header  from '@/component/common/Header.vue'
import Content from './components/Content.vue'

export default {
  name: 'Detail',
  components: {
    Header,
    Content
  }
}
</script>

<style lang="less" scoped>

</style>