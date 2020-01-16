<template>
  <div id="app">
    {{mes}}
    {{allDate}}
    <router-view/>
  </div>
</template>

<script>
import mixin from './components/mixin'
export default {
  name: 'App',

  mixins: [mixin],

}
</script>

<style>
#app {
  
}
</style>
