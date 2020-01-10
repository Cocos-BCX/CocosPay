<template>
  <section class="app-container" @keyup.enter="unLock('form')">
    <navigation :title="$t('title.importAccount')"/>
    <section class="logo mt40">
      <img class="block-center" src="/icons/logo-big.png" alt>
    </section>
    <h2 class="welcome-title mt20">{{$t('title.welcome')}}</h2>
    <el-form ref="form" :model="formData" :rules="formRules" class="mt40">
      <el-form-item prop="account">
        <el-input
          class="no-border"
          v-model="formData.account"
          type="text"
          :placeholder="$t('placeholder.account')"
        ></el-input>
        <!-- 解决隐式提交的问题 -->
        <input type="text" value style="display: none;">
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="no-border"
          v-model="formData.password"
          type="password"
          :placeholder="$t('placeholder.password')"
        ></el-input>
        <!-- 解决隐式提交的问题 -->
        <input type="text" value style="display: none;">
      </el-form-item>
      <el-form-item class="mt20">
        <el-button
          class="full-btn"
          type="primary"
          @click="unLock('form')"
        >{{ cocosAccount.accounts ? $t('button.unlock') : $t('button.accountLogin')}}</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import utils from "../../../lib/utils";
import Navigation from "../../components/navigation";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Navigation
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.passwordNull")));
      } else {
        callback();
      }
    };
    const accountPass = (rule, value, callback) => {
      if (!this.cocosAccount.accounts) {
        if (value === "") {
          callback(new Error(this.$i18n.t("verify.accountNull")));
        } else {
          callback();
        }
      } else {
        callback();
      }
    };
    return {
      formData: {
        account: "",
        password: ""
      },
      formRules: {
        account: [{ validator: accountPass, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  created(){
    console.log(">>>>>>>>created>>>>>>>>")
    console.log(this.isLogin)
    console.log(this.isAccount)
  },
  computed: {
    ...mapState("wallet", ["accounts", "pwdhash", "password"]),
    ...mapState(["cocosAccount", "isLogin", "isAccount"])
  },
  methods: {
    ...mapActions("wallet", ["setSeed"]),
    ...mapMutations("wallet", ["setPassword", "upgradeAccounts"]),
    ...mapMutations([
      "upgradeCurrentAccount",
      "setAccount",
      "setLogin",
      "setIsAccount"
    ]),
    ...mapActions("account", [
      "loadBCXAccount",
      "loginBCXAccount",
      "logoutBCXAccount"
    ]),
    //解锁账户
    unLock(formName) {
      console.log(formName)
      this.$refs[formName].validate(valid => {
        console.log(formName)
        if (valid) {
          this.setAccount({
            account: this.cocosAccount.accounts || this.formData.account,
            password: this.formData.password
          });
          this.loginBCXAccount().then(res => {
          console.log("loginBCXAccount")
          console.log(res)
            if (res.code === 1) {
              this.setAccount({
                account: this.cocosAccount.accounts,
                password: ""
              });
              this.setIsAccount(true);
              this.setLogin(true);
              console.log("modify")
              console.log(this.isLogin)
              console.log(this.isAccount)
              this.$router.push({ name: "home" });
            } else {
              this.setAccount({
                account: "",
                password: ""
              });
            }
          });
        }
      });
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     /**
      //      * upgrade debug version local data to new version
      //      */
      //     if (this.password && this.formData.password === this.password) {
      //       this.setPassword(this.formData.password);
      //       // update keystore
      //       this.upgradeCurrentAccount(this.formData.password);
      //       this.upgradeAccounts(this.formData.password);
      //       this.setSeed(this.formData.password).then(() => {
      //         this.$router.push({ name: "home" });
      //       });
      //     } else if (
      //       utils.hashPassword(this.formData.password) === this.pwdhash
      //     ) {
      //       this.setSeed(this.formData.password).then(() => {
      //         this.$router.push({ name: "home" });
      //       });
      //     } else {
      //       this.$kalert({
      //         message: this.$i18n.t("alert.passwordError")
      //       });
      //     }
      //   }
      // });
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
