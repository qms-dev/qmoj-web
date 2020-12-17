<template>
  <div class="header-wrapper">
    <a-row type="flex" justify="space-around" align="middle" style="height: 100%;">
      <a-col :span="7">
        <div>
          <LeftOutlined />
          <span>1.两数之和</span>
        </div>
      </a-col>
      <a-col :span="8"></a-col>
      <a-col :span="2">
        <a-row type="flex" align="middle">
          <MailOutlined class="message-icon"/>
          <a-avatar class="user-avatar">USER</a-avatar>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import {
  LeftOutlined,
  MailOutlined
} from '@ant-design/icons-vue'

export default {
  name: 'Header',
  components: {
    LeftOutlined,
    MailOutlined
  }
}

</script>

<style lang="less" scoped>
.header-wrapper {
  height: 50px;
  background-color: #ffffff;
  border-bottom: 1px solid #ebebeb;
  .message-icon {
    font-size: 24px;
  }
  .user-avatar {
    margin-left: 18px;
  }
}
</style>