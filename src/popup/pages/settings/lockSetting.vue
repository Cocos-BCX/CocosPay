<template>
  <section>
    <setting-navigation :title="$t('settings.lockSetting')" />
    <section class="app-container">
      <section class="setting-tip">{{$t('message.lockSetting')}}</section>
      <div class="mt20">{{$t('message.lockTip')}}</div>
      <el-select class="mt20" v-model="time" style="width: 100%;">
        <el-option v-for="(item, index) in times" :key="index" :value="item.value" :label="item.name"></el-option>
      </el-select>
      <el-button class="full-btn mt100" type="primary" @click="lockSet">{{$t('button.sure')}}</el-button>
    </section>
  </section>
</template>
<script>
import SettingNavigation from '../../components/setting-navigation'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('wallet')
export default {
  components: {
    SettingNavigation
  },
  data () {
    return {
      time: 0,
      times: [
        { name: '1' + this.$i18n.t('unit.minute'), value: 60 },
        { name: '5' + this.$i18n.t('unit.minute'), value: 60 * 5 },
        { name: '10' + this.$i18n.t('unit.minute'), value: 60 * 10 },
        { name: '30' + this.$i18n.t('unit.minute'), value: 60 * 30 },
        { name: this.$i18n.t('other.never'), value: 0 }
      ]
    }
  },
  computed: {
    ...mapState([
      'lockTime'
    ])
  },
  created () {
    this.time = this.lockTime
  },
  methods: {
    ...mapActions([
      'setAutoLock'
    ]),
    lockSet () {
      this.setAutoLock(this.time).then(() => {
        this.$kalert({
          message: this.$i18n.t('alert.modifySuccess')
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .setting-tip{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #e6e6e6;
  }
</style>
