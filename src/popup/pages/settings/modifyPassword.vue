<template>
  <section>
    <setting-navigation :title="$t('settings.modifyPassword')"/>
    <section class="app-container">
      <section class="setting-tip">{{$t('message.verifyPassword')}}</section>
      <!-- <section v-if="show" class="modify-password mt20">
        <el-input
          v-model="oldPassword"
          type="password"
          :placeholder="$t('placeholder.oldPassword')"
        ></el-input>
      </section>-->
      <el-form class="mt20" ref="form" :model="formData" :rules="formRules">
        <el-form-item prop="oldPassword">
          <el-input
            v-model="formData.oldPassword"
            :type="passw"
            :placeholder="$t('placeholder.oldPassword')"
          >
          
          <img
          :src="passw=='password'?'/icons/eye-close.png':'/icons/eye-open.png'"
          slot="suffix"
          alt=""
          class="open-pass"
          @click="showPass('passw')">
          </el-input>
        </el-form-item>
        <el-form-item class="marb35" prop="password">
          <el-input
            v-model="formData.password"
            :type="repassw"
            :placeholder="$t('placeholder.password')"
          >
          <img
          :src="repassw=='password'?'/icons/eye-close.png':'/icons/eye-open.png'"
          slot="suffix"
          alt=""
          class="open-pass"
          @click="showPass('repassw')">
          </el-input>
        </el-form-item>
        <el-form-item class="marb35" prop="repassword">
          <el-input
            v-model="formData.repassword"
            :type="repassw"
            :placeholder="$t('placeholder.repassword')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="full-btn mart25"
            type="primary"
            @click="onSubmit('form')"
          >{{$t('button.sure')}}</el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>
<script>
import SettingNavigation from "../../components/setting-navigation";
import { mapState, mapMutations, mapActions } from "vuex";
import utils from "../../../lib/utils";
import { setTimeout } from "timers";
import { NewPassword } from "../../../lib/regular"
export default {
  components: {
    SettingNavigation
  },
  data() {
    const validatePass = (rule, value, callback) => {
      let reg = NewPassword
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.passwordNull")));
      } else if (!reg.test(value)) {
        // callback(new Error(this.$i18n.t("verify.passwordLength")));
        callback(new Error(this.$i18n.t("error[311]")));
      } else {
        if (this.formData.repassword !== "") {
          this.$refs.form.validateField("repassword");
        }
        if (String(value).indexOf(" ") > -1) {
          callback(new Error(this.$i18n.t("error[311]")));
        } else {
          callback();
        }
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
      formData: {
        oldPassword: "",
        password: "",
        repassword: ""
      },
      formRules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }]
      },
      oldPassword: "",
      show: true,
      //用于改变Input类型
      passw:"password",
      repassw:"password",
    };
  },
  computed: {
    // ...mapState("wallet", ["password", "pwdhash"])
  },
  methods: {
    // ...mapMutations("wallet", ["setPassword", "changePasswordAccounts"]),
    // ...mapActions("wallet", ["setSeed"]),
    // ...mapMutations(["changePassword"]),
    ...mapMutations(["setPassword"]),
    ...mapActions("account", ["changePassword"]),
    // modifyPassword() {
    //   if (utils.hashPassword(this.oldPassword) === this.pwdhash) {
    //     // if (this.password === this.oldPassword) {
    //     // this.show = false
    //   } else {
    //     this.$kalert({
    //       message: this.$i18n.t("alert.passwordError")
    //     });
    //   }
    // },

　　//密码的隐藏和显示
    showPass(passtype){
　　　　　//点击图标是密码隐藏或显示
        if( this[passtype]=="text"){
            this[passtype]="password";
            //更换图标
        }else {
            this[passtype]="text";
        };
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.setPassword(this.formData.password);
          // this.setSeed(this.formData.password).then(() => {
          //   this.$router.go(-1);
          // });
          this.setPassword({
            oldPassword: this.formData.oldPassword,
            newPassword: this.formData.password
          });
          this.changePassword().then(res => {
            if (res.code === 1) {
              this.$kalert({
                message: this.$i18n.t("alert.modifyPasswordSuccess")
              });
              this.setPassword({
                oldPassword: "",
                newPassword: ""
              });
              setTimeout(() => {
                this.$router.replace({
                  name: "login"
                });
              }, 1000);
            } else {
                this.$kalert({
                  message:  _this.$i18n.t("chainInterfaceError[500]")
                });
            }
          });
        }
      });
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

.marb35{
  margin-bottom: 35px;
}

.mart25{
  margin-top: 25px;
}
</style>
