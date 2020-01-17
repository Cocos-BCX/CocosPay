<template>
  <section>
    <setting-navigation :showSetting="false" :title="$t('settings.monetaryUnit')" />
    <section class="app-container">
      <section class="setting-tip">{{$t('message.changeUnit')}}</section>
      <el-select class="mt20" v-model="unitName" style="width: 100%;" @change="changeUnit">
        <el-option
          v-for="(item, index) in unitList"
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
import Storage from "../../../lib/storage";
export default {
  components: {
    SettingNavigation
  },
  data() {
    return {
      unitName: Storage.get("currentCurrency") || "CNY",
      unitList: [
        { name: "CNY", value: "CNY" },
        { name: "USD", value: "USD" }
      ]
    };
  },
  created() {
  },
  methods: {
    changeUnit(val){
      if (Storage.get("currentCurrency") == val) return false
      Storage.set("currentCurrency", val)
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
