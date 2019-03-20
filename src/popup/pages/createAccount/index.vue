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
    <el-form ref="form" :model="formData" :rules="formRules" class="mt20">
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
  </section>
</template>
<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  import Navigation from "../../components/navigation";
  export default {
    components: {
      Navigation
    },
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error(this.$i18n.t("verify.passwordNull")));
        } else if (value.length < 8) {
          callback(new Error(this.$i18n.t("verify.passwordLength")));
        } else {
          callback();
        }
      };
      const accountPass = (rule, value, callback) => {
        let reg = /^[a-z]([a-z0-9\.-]){4,63}$/;
        if (value === "") {
          callback(new Error(this.$i18n.t("verify.accountNull")));
        } else if (!reg.test(value)) {
          callback(new Error(this.$i18n.t("verify.accountReg")));
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
        formRules: {
          account: [{ validator: accountPass, trigger: "blur" }],
          password: [{ validator: validatePass, trigger: "blur" }],
          repassword: [{ validator: validatePass2, trigger: "blur" }]
        },
        langs: [{ name: "中文", value: "zh" }, { name: "English", value: "en" }]
      };
    },
    computed: {
      ...mapState(["curLng", "accounts", "passwords"])
    },
    created() {
      this.lang = this.curLng;
    },
    methods: {
      ...mapMutations(["setCurLng", "setAccount", "setLogin", "setIsAccount"]),
      ...mapActions("account", [
        "loadBCXAccount",
        "loginBCXAccount",
        "logoutBCXAccount"
      ]),
      createWallet(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.setAccount(this.formData);
            this.loadBCXAccount().then(res => {
              if (res.code === 1) {
                this.setIsAccount(true);
                this.loginBCXAccount().then(res => {
                  this.setAccount({
                    account: this.formData.account,
                    password: ""
                  });
                  this.setLogin(true);
                  this.$router.push({ name: "home" });
                });
              }
            });
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
