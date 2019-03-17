<template>
  <section>
    <app-header @refresh="refreshAccount" />
    <section class="app-container">
      <navigation :title="$t('title.recharge')"/>
      <div class="text-center mt20">{{$t('message.rechargeOnly')}}</div>
      <qriously class="qr-code text-center mt20" foreground="#9328d4" :value="cocosAccount.accounts ? cocosAccount.accounts : ''" :size="130" />
      <div class="small-tip code text-center">{{currentAccount.accounts}}</div>
      <el-button class="full-btn mt40" type="primary" v-clipboard:copy="cocosAccount.accounts"
                 v-clipboard:success="copySuccess"
                 v-clipboard:error="copyError">{{$t('button.copyAddress')}}</el-button>
    </section>
  </section>
</template>
<script>
import Navigation from '../../components/navigation'
import AppHeader from '../../components/app-header'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Navigation,
    AppHeader
  },
  data () {
    return { }
  },
  computed: {
    ...mapState([
      'currentAccount',
      "cocosAccount"
    ])
  },
  methods: {
    ...mapActions('account', [
      'loadAccount'
    ]),
    copySuccess () {
      this.$kalert({
        message: this.$i18n.t('alert.copySuccess')
      })
    },
    copyError () {
      this.$kalert({
        message: this.$i18n.t('alert.copyFail')
      })
    },
    refreshAccount () {
      this.loadAccount()
    }
  }
}
</script>
<style lang="scss" scoped>
.qr-code{
  background-image: url('/images/qrcode-bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  width: 160px;
  height: 160px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
