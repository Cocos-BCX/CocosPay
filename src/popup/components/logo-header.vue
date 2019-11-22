<template>
  <header>
    <img class="left-img" src="/icons/logo-small.png" alt>
    <span class="title">CocosPay</span>
  </header>
</template>
<script>
  export default {
    name: "logo-header"
  };
</script>
<style lang="scss" scoped>
  header {
    position: relative;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 20px;
      padding-left: 10px;
    }
  }
</style>
