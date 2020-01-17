<template>
  <section class="app-container" @keyup.enter="unlockWallet()">
    <section class="logo mt40">
      <img class="block-center" src="/icons/logo-big.png" alt>
    </section>
    <h2 class="welcome-title mt20">{{$t('title.welcome')}}</h2>
    <el-form class="mt40">
      <el-form-item prop="password">
        <el-input
          class="no-border"
          v-model="unlock"
          type="password"
          :placeholder="$t('placeholder.password')"
        ></el-input>
        <!-- 解决隐式提交的问题 -->
        <input type="text" value style="display: none;">
      </el-form-item>
      <el-form-item class="mt20">
        <el-button class="full-btn" type="primary" @click="unlockWallet()">{{$t('button.unlock')}}</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import utils from "../../../lib/utils";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    // const validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error(this.$i18n.t("verify.passwordNull")));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      unlock: ""
      // formData: {
      //   password: ""
      // },
      // formRules: {
      //   password: [{ validator: validatePass, trigger: "blur" }]
      // }
    };
  },
  mounted() {
    // this.init().then(res => {
      this.getAccounts().then(res => {
        this.setAccountType(res.current_account.mode);
      });
    // });
  },
  computed: {
    ...mapState("wallet", ["accounts", "pwdhash", "password"]),
    ...mapState(["accountType", "cocosAccount"])
  },
  methods: {
    ...mapActions(["init"]),
    ...mapMutations("wallet", [
      "setPassword",
      "upgradeAccounts",
      "getAccounts"
    ]),
    ...mapMutations(["upgradeCurrentAccount", "setAccount", "setLoginNoAlert"]),
    ...mapActions("account", ["unlockAccount", "loginBCXAccount"]),
    ...mapActions("wallet", ["getAccounts"]),
    ...mapMutations([
      "upgradeCurrentAccount",
      "setAccount",
      "setLogin",
      "setIsAccount",
      "setAccountType"
    ]),
    unlockWallet() {
      if (!this.unlock) {
        this.$kalert({
          message: this.$i18n.t("verify.passwordNull")
        });
        return;
      }
      this.setAccount({
        account: this.cocosAccount.accounts,
        password: this.unlock
      });
      if (this.accountType === "wallet") {
        this.unlockAccount().then(res => {
          if (res.code === 1) {
            this.setLoginNoAlert(true);
            this.setAccount({
              account: this.cocosAccount.accounts,
              password: ""
            });
            this.setIsAccount(true);
            this.setLogin(true);
            this.$router.push({ name: "home" });
          } else {
            if (res.message.indexOf("wrong password") > -1) {
              this.$kalert({
                message:  this.$i18n.t("error[105]")
              });
            } else {
              this.AccountLock();
            }
            
          }
        });
      } else {
        this.AccountLock();
      }
    },
    AccountLock() {
      let _this = this
      this.loginBCXAccount().then(res => {
        this.setAccount({
          account: this.cocosAccount.accounts,
          password: ""
        });
        if (res.code === 1) {
          this.setIsAccount(true);
          this.setLogin(true);
          this.$router.push({ name: "home" });
        } else {
          
            if (res.message.indexOf("wrong password") > -1 || res.message.indexOf("password error") > -1 ) {
              this.$kalert({
                message:  this.$i18n.t("error[105]")
              });
            } else {
              this.$kalert({
                message:  _this.$i18n.t("chainInterfaceError[500]")
              });
            }
              
          }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.welcome-title {
  text-align: center;
  font-size: 30px;
}
</style>
