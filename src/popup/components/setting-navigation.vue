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
@import "../theme/v1/variable";
nav{
  display: flex;
  height: 50px;
  align-items: center;
  background-color: $bg-shallow;
  padding: 0 15px;
  span{
    display: inline-block;
  }
}
.back-icon{
  cursor: pointer;
  width: 15px;
  height: 30px;
}
.title{
  line-height: 50px;
  padding-left: 30px;
  text-align: left;
  font-size: 18px;
}
</style>
