<template>
  <section class="app-container" @keyup.enter="unLock('form')">
    <section class="logo mt40">
      <img class="block-center" src="/images/logo.png" alt="">
    </section>
    <h2 class="welcome-title mt20">{{$t('title.welcome')}}</h2>
    <el-form ref="form" :model="formData" :rules="formRules" class="mt40">
      <el-form-item prop="password">
        <el-input class="no-border" v-model="formData.password" type="password" :placeholder="$t('placeholder.password')"></el-input>
        <!-- 解决隐式提交的问题 -->
        <input type="text" value="" style="display: none;" />
      </el-form-item>
      <el-form-item class="mt20">
        <el-button class="full-btn" type="primary" @click="unLock('form')">{{$t('button.unlock')}}</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import utils from '../../../lib/utils'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$i18n.t('verify.passwordNull')))
      } else {
        callback()
      }
    }
    return {
      formData: {
        password: ''
      },
      formRules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState('wallet', [
      'accounts',
      'pwdhash',
      'password'
    ])
  },
  methods: {
    ...mapActions('wallet', [
      'setSeed'
    ]),
    ...mapMutations('wallet', [
      'setPassword',
      'upgradeAccounts'
    ]),
    ...mapMutations([
      'upgradeCurrentAccount'
    ]),
    unLock (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          /**
           * upgrade debug version local data to new version
           */
          if (this.password && this.formData.password === this.password) {
            this.setPassword(this.formData.password)
            // update keystore
            this.upgradeCurrentAccount(this.formData.password)
            this.upgradeAccounts(this.formData.password)

            this.setSeed(this.formData.password).then(() => {
              this.$router.push({ name: 'home' })
            })
          } else if (utils.hashPassword(this.formData.password) === this.pwdhash) {
            this.setSeed(this.formData.password).then(() => {
              this.$router.push({ name: 'home' })
            })
          } else {
            this.$kalert({
              message: this.$i18n.t('alert.passwordError')
            })
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome-title{
  text-align: center;
  font-size: 30px;
}
</style>
