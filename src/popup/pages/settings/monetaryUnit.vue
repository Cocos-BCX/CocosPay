<template>
  <section>
    <setting-navigation :showSetting="false" :title="$t('settings.language')" />
    <section class="app-container">
      <section class="setting-tip">{{$t('message.changeLanguage')}}</section>
      <el-select class="mt20" v-model="lang" style="width: 100%;" @change="changeLanguage">
        <el-option
          v-for="(item, index) in langs"
          :key="index"
          :value="item.value"
          :label="item.name"
        ></el-option>
      </el-select>
      <!-- <el-button class="full-btn mt100" type="primary" @click="changeLang">{{$t('button.sure')}}</el-button> -->
    </section>
  </section>
</template>
<script>
import SettingNavigation from "../../components/setting-navigation";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    SettingNavigation
  },
  data() {
    return {
      lang: "中文",
      langs: [
        { name: "CNY", value: "cny" },
        { name: "English", value: "EN" }
      ]
    };
  },
  computed: {
    ...mapState(["curLng"])
  },
  created() {
    // this.lang = this.curLng;
    this.lang = this.$i18n.locale;
  },
  methods: {
    ...mapMutations(["setCurLng"]),
    changeLanguage() {
      
      this.setCurLng(this.lang);
      this.$i18n.locale = this.lang;
      window.localStorage.setItem("lang_type", this.lang);
      this.$kalert({
        message: this.$i18n.t("alert.modifySuccess")
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.setting-tip {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px dashed #e6e6e6;
}
</style>
