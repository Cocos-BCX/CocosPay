<template>
  <header>
    <img class="left-img" src="/icons/logo-small.png" alt>
    <span class="title">COCOSPay</span>
    <span class="right-icon" @click="goSettings">
      <v-icon name="cog" scale="1.6"></v-icon>
    </span>
  </header>
</template>
<script>
export default {
  name: "common-header",
  props: {
    showSetting: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    goSettings() {
      this.$router.push({ name: "settings" });
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  position: relative;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
  .title {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding: 0 50px;
    line-height: 60px;
  }
  .left-img {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 30px;
  }
  .right-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    cursor: pointer;
  }
}
</style>
