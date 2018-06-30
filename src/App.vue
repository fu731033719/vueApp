<template>
<div id="app">
  <m-heard></m-heard>
  <tab></tab>
  <router-view></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import MHeard from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default{
  components: {
    MHeard,
    Tab
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color : $color-theme
</style>
