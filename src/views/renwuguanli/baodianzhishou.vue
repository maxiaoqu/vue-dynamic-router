<template>
  <div class="admin">
    <div>定点值守定点值守定点值守</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component<Admin>({
  name: 'Admin'
})
export default class Admin extends Vue {
  get isRouteTitle() {
    return this.$route.meta.title
  }
}
</script>

<style lang="less">
.admin {
  text-align: center;

  button {
    font-size: 18px;
    color: #2db7f5;
  }
}
</style>
