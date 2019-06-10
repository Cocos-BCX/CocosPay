<template>
  <section class="app-container">
    <navigation :title="$t('title.createAccount')"/>
    <section class="select-lang no-bg">
      <el-select class="language-select" v-model="lang" @change="changeLanguage">
        <el-option
          v-for="(item, index) in langs"
          :key="index"
          :label="item.name"
          :value="item.value"
        ></el-option>
      </el-select>
    </section>
    <section class="logo">
      <img class="block-center" src="/icons/logo-big.png" alt>
    </section>
    <h2 class="text-center index-title">CocosPay</h2>
    <el-form ref="form" :model="formData" :rules="formRules" class="mt20" v-if="!accountKey">
      <el-form-item prop="account">
        <el-input
          class="no-border"
          v-model="formData.account"
          type="text"
          :placeholder="$t('placeholder.account')"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="no-border"
          v-model="formData.password"
          type="password"
          :placeholder="$t('placeholder.password')"
        ></el-input>
      </el-form-item>
      <el-form-item prop="repassword">
        <el-input
          class="no-border"
          v-model="formData.repassword"
          type="password"
          :placeholder="$t('placeholder.repassword')"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt20">
        <el-button
          class="full-btn"
          type="primary"
          @click="createWallet('form')"
        >{{$t('button.create')}}</el-button>
      </el-form-item>
    </el-form>
    <section class="small-tip text-center">{{$t('message.rememberPassword')}}</section>
    <el-dialog
      top="15vh"
      center
      :title="$t('button.exportPrivateKey')"
      @closed="closedAccountDialog"
      :close-on-click-modal="false"
      :visible.sync="accountKey"
    >
      <div class="warm-tip">{{$t('message.savePrivateKey')}}</div>
      <section class="privateKey-area">{{active_private_key}}</section>
      <!-- <div class="warm-tip">{{$t('message.privateKeyOnly')}}</div> -->
      <el-button
        class="full-btn"
        type="primary"
        v-clipboard:copy="active_private_key"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError"
      >{{$t('button.copy')}}active_key</el-button>
      <section class="privateKey-area">{{owner_private_key}}</section>
      <el-button
        class="full-btn"
        type="primary"
        v-clipboard:copy="owner_private_key"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError"
      >{{$t('button.copy')}}owner_key</el-button>
    </el-dialog>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Navigation from "../../components/navigation";
import { setTimeout } from "timers";
export default {
  components: {
    Navigation
  },
  data() {
    const validatePass = (rule, value, callback) => {
      let reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,12}$/;
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.passwordNull")));
      } else if (!reg.test(value)) {
        callback(new Error(this.$i18n.t("verify.passwordType")));
      } else {
        callback();
      }
    };
    const accountPass = (rule, value, callback) => {
      let reg = /^[a-z]([a-z0-9\.-]){4,63}$/;
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.accountNull")));
      } else if (!reg.test(value)) {
        callback(new Error(this.$i18n.t("verify.accountType")));
      } else {
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.passwordSure")));
      } else if (value !== this.formData.password) {
        callback(new Error(this.$i18n.t("verify.passwordMatch")));
      } else {
        callback();
      }
    };
    return {
      wallet: null,
      lang: "zh",
      formData: {
        account: "",
        password: ""
        // repassword: ""
      },
      type: "",
      formRules: {
        account: [{ validator: accountPass, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }]
      },
      owner_private_key: "",
      active_private_key: "",
      accountKey: false,
      langs: [{ name: "中文", value: "zh" }, { name: "English", value: "en" }]
    };
  },
  computed: {
    ...mapState(["curLng", "accounts", "passwords"])
  },
  created() {
    this.lang = this.curLng;
    this.type = this.$route.params.type;
  },
  methods: {
    ...mapMutations([
      "setCurLng",
      "setAccount",
      "setLogin",
      "setIsAccount",
      "loading"
    ]),
    ...mapActions("account", [
      "loadBCXAccount",
      "loginBCXAccount",
      "logoutBCXAccount",
      "OutPutKey"
    ]),
    ...mapActions("wallet", ["WalletBCXAccount"]),
    copySuccess() {
      this.$kalert({
        message: this.$i18n.t("alert.copySuccess")
      });
    },
    copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    },
    closedAccountDialog() {
      this.setIsAccount(true);
      this.setLogin(true);
      this.$router.replace({ name: "home" });
      this.accountKey = false;
    },
    createWallet(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.setAccount(this.formData);
          if (this.type === "account") {
            this.loading(true);
            setTimeout(() => {
              this.loading(false);
              this.loadBCXAccount().then(res => {
                if (res.code === 1) {
                  this.setIsAccount(true);
                  this.loginBCXAccount().then(res => {
                    if (res.code === 1) {
                      this.setAccount({
                        account: this.formData.account,
                        password: ""
                      });
                      this.setLogin(true);
                      this.$router.push({ name: "home" });
                    }
                  });
                }
              });
            }, 1500);
          } else {
            this.WalletBCXAccount().then(res => {
              if (res.code === 1) {
                this.loading(true);
                setTimeout(() => {
                  this.setAccount({
                    account: this.formData.account,
                    password: ""
                  });
                  this.loading(false);
                  this.OutPutKey().then(key => {
                    if (key.code === 1) {
                      this.active_private_key = key.data.active_private_keys[0];
                      this.owner_private_key = key.data.owner_private_keys[0];
                      this.accountKey = true;
                      // this.$router.push({ name: "home" });
                    }
                  });
                }, 1500);
              }
              // this.$route.go(-1);
              // this.setLogin(true);
            });
          }
        }
      });
    },
    changeLanguage() {
      this.setCurLng(this.lang);
      this.$i18n.locale = this.lang;
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  margin-top: 40px;
}
.select-lang {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
}
.index-title {
  font-size: 30px;
  margin: 25px auto 40px;
}
</style>
