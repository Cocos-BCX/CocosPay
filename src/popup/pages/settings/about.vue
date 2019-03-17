<template>
  <section>
    <setting-navigation :title="$t('settings.about')" />
    <section class="about-dapp">
      <img class="about-dapp-icon" src="/images/logo.png">
      <a class="item" @click="policyVisible = true">{{$t('button.agreement')}}</a>
      <a class="item" @click="agreementVisible = true">{{$t('button.policy')}}</a>
      <div class="about-footer">
        <small>{{version}}</small>
      </div>
      <!-- agreement -->
      <el-dialog
        top="10vh"
        center
        :title="$t('title.agreement')"
        :visible.sync="agreementVisible">
        <div class="wrapper" id="agreement">
          <p v-html="agreementContent"></p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="full-btn" type="primary" @click="agreementVisible = false">{{$t('button.close')}}</el-button>
        </span>
      </el-dialog>
      <!-- policy -->
      <el-dialog
        top="10vh"
        center
        :title="$t('title.policy')"
        :visible.sync="policyVisible">
        <div class="wrapper" id="policy">
          <p v-html="policyContent"></p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="full-btn" type="primary" @click="policyVisible = false">{{$t('button.close')}}</el-button>
        </span>
      </el-dialog>
    </section>
  </section>
</template>
<script>
import agreement from '../../files/agreement'
import policy from '../../files/privacy'
import agreementEn from '../../files/agreement_en'
import policyEn from '../../files/privacy_en'
import PerfectScrollbar from 'perfect-scrollbar'
import SettingNavigation from '../../components/setting-navigation'
import manifest from '../../../manifest'
export default {
  components: {
    SettingNavigation
  },
  computed: {
    agreementContent () {
      return this.$store.state.curLng === 'en' ? agreementEn.content : agreement.content
    },
    policyContent () {
      return this.$store.state.curLng === 'en' ? policyEn.content : policy.content
    }
  },
  data () {
    return {
      policyVisible: false,
      agreementVisible: false,
      agreementScroller: null,
      policyScroller: null,
      version: manifest.version
    }
  },
  watch: {
    agreementVisible: function (val) {
      if (val && !this.agreementScroller) {
        this.$nextTick(() => {
          this.agreementScroller = new PerfectScrollbar('#agreement', {
            minScrollbarLength: 40,
            maxScrollbarLength: 40
          })
        })
      }
    },
    policyVisible: function (val) {
      if (val && !this.policyScroller) {
        this.$nextTick(() => {
          this.policyScroller = new PerfectScrollbar('#policy', {
            minScrollbarLength: 40,
            maxScrollbarLength: 40
          })
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.about-dapp{
  position: relative;
  padding-bottom: 100px;
  width: 100%;
  height: 540px;
  overflow: hidden;
  .about-footer{
    position: absolute;
    width: 100%;
    height: 100px;
    text-align: center;
    left: 0;
    bottom: 0;
  }
  .about-dapp-icon{
    display: block;
    margin: 60px auto 70px;
  }
  .item{
    display: block;
    margin: 15px 0;
    text-align: center;
    font-size: 18px;
    color: $primary-color;
    cursor: pointer;
  }
  .net-address{
    color: $primary-color;
  }
}
.wrapper{
  position: relative;
  height: 290px;
  background-color: $bg-shallow;
  border-radius: 4px;
  p{
    color: $color-first;
    font-size: 14px;
    line-height:24px;
    padding: 0 10px;
  }
}
</style>
