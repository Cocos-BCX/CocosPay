<template>
  <nav>
    <span @click="goBack">
      <v-icon class="back-icon" name="angle-left"></v-icon>
    </span>
    <span class="title">{{title}}</span>
  </nav>
</template>
<script>
export default {
  name: 'navigation',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
nav{
  position: relative;
  padding: 0 50px;
  border-bottom: 1px dashed #e6e6e6;
}
.back-icon{
  position: absolute;
  top: 10px;
  left: 0;
  width: 15px;
  height: 30px;
  text-align: center;
  cursor: pointer;
}
.title{
  display: inline-block;
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
}
</style>
