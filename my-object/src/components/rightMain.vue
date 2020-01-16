<template>
  <div>
    <p  @click="propsParent">{{rightData}}</p>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "rightMain",
  props: ["rightData"],

  methods: {
    propsParent() {
        this.$emit('propsParent', '我是right子组建传值过来的')
    }
  }
};
</script>

<style lang="" scoped>
</style>