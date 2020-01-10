<template>
  <section class="prompt-base">
    <router-view/>
  </section>
</template>
<script>
  import { mapActions } from "vuex";
  import { apis } from "../../../lib/BrowserApis";
  import Prompt from "../../../models/prompt/Prompt";
  export default {
    created() {
      let prompt =
        window.data || apis.extension.getBackgroundPage().notification || null;
      prompt = Prompt.fromJson(prompt);
      this.pushPrompt(prompt);
      this.$router.push({ name: "prompt_signature" });
    },
    methods: {
      ...mapActions("wallet", ["pushPrompt"])
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/prompt";
</style>
