<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component<App>({
  name: 'App'
})

export default class App extends Vue {
  mounted() {

  }
}
</script>
