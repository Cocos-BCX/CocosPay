<template>
  <section class="app-container">
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
      <img class="block-center" src="/images/index-logo.png" alt>
    </section>
    <h2 class="text-center index-title">CocosPay</h2>
    <el-form ref="form" :model="formData" :rules="formRules" class="mt20">
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
      <el-form-item class="mt80">
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
import { mapState, mapMutations } from "vuex";
export default {
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
      lang: "中文",
      formData: {
        password: "",
        repassword: ""
      },
      formRules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }]
      },
      langs: [{ name: "中文", value: "ZH" }, { name: "English", value: "EN" }]
    };
  },
  computed: {
    ...mapState(["curLng"])
  },
  created() {
    this.lang = this.$i18n.locale;
  },
  methods: {
    ...mapMutations(["setCurLng"]),
    createWallet(formName) {
      this.$refs[formName].validate(valid => {
        // if (valid) {
        //   this.$router.push({
        //     name: "agreement",
        //     params: { password: this.formData.password }
        //   });
        // }
      });
    },
    changeLanguage() {
      this.setCurLng(this.lang);
      this.$i18n.locale = this.lang;
      this.$kalert({
        message: this.$i18n.t("alert.modifySuccess")
      });
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
