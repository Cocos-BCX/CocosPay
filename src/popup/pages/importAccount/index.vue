<template>
  <section class="app-container">
    <navigation :title="$t('title.importAccount')"/>
    <el-form ref="form" :model="formData" :rules="formRules" label-position="top">
      <el-form-item :label="$t('label.cocosPrivate')" prop="privateKey">
        <el-input type="textarea" :rows="4" v-model="formData.privateKey"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="no-border"
          v-model="formData.password"
          :type="passw"
          :placeholder="$t('placeholder.temporary')"
        >
        <img
        :src="passw=='password'?'/icons/eye-close.png':'/icons/eye-open.png'"
        slot="suffix"
        alt=""
        class="open-pass"
        @click="showPass">
        </el-input>
        <!-- 解决隐式提交的问题 -->
        <input type="text" value style="display: none;">
      </el-form-item>
      <el-form-item>
        <el-button
          class="full-btn mt20"
          type="primary"
          @click="importAccount('form')"
        >{{$t('button.importSure')}}</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import utils from "../../../lib/utils";
import { createAccountName } from "../../utils/tools";
import { mapMutations, mapState, mapActions } from "vuex";
import InternalMessage from "../../../messages/InternalMessage";
import * as InternalMessageTypes from "../../../messages/InternalMessageTypes";
import Navigation from "../../components/navigation";
// const { mapMutations, mapState } = createNamespacedHelpers("wallet");
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
    const privateKeyPass = (rule, value, callback) => {
      if (value === "" || value.length < 50) {
        callback(new Error(this.$i18n.t("alert.illegalPrivateKey")));
      } else {
        callback();
      }
    };
    return {
      formData: {
        privateKey: "",
        password: "",
        has_import: false
      },
      formRules: {
        privateKey: [{ validator: privateKeyPass, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      //用于改变Input类型
      passw:"password",
    };
  },
  computed: {
    ...mapState(["accounts", "temporaryKeys"])
  },
  mounted() {
    this.getAccounts().then(res => {
      if (res.accounts && res.accounts.length) this.has_import = true;
    });
  },
  methods: {
    ...mapMutations([
      "addAccount",
      "setKeys",
      "setAccount",
      "setLogin",
      "setIsAccount",
      "settemporaryKeys"
    ]),
    ...mapActions("account", ["setPrivateKeys", "logoutBCXAccount"]),
    ...mapActions("wallet", ["getAccounts", "deleteWallet"]),
    
　　//密码的隐藏和显示
    showPass(){
　　　　　//点击图标是密码隐藏或显示
        if( this.passw=="text"){
            this.passw="password";
            //更换图标
        }else {
            this.passw="text";
        };
    },
    importAccount(formName) {
      let _this = this
      // this.logoutBCXAccount();
      // formName就是from字符串
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // this.setAccount({
          //   account: "",
          //   password: this.formData.password
          // });
          // this.setKeys(this.formData.privateKey);
          // this.settemporaryKeys(this.formData.password);
          this.setPrivateKeys({
            has_import: this.has_import || false,
            privateKey: this.formData.privateKey,
            password: this.formData.password,
          }).then(res => {
            if (res.code === 1) {
              this.setKeys("");
              this.setAccount({
                account: res.data.account_name,
                password: ""
              });
              // this.settemporaryKeys("");
              this.setLogin(true);
              this.setIsAccount(true);
              this.$router.push({ name: "home" });
            } else if (res.code == 149) {
              this.setPrivateKeys({
                has_import: this.has_import || false,
                privateKey: this.formData.privateKey,
                password: this.formData.password,
              }).then(res => {
                if (res.code === 1) {
                  this.setKeys("");
                  this.setAccount({
                    account: res.data.account_name,
                    password: ""
                  });
                  // this.settemporaryKeys("");
                  this.setLogin(true);
                  this.setIsAccount(true);
                  this.$router.push({ name: "home" });
                } else if (res.code == 160) {
              
                  this.getAccounts().then(res => {
                      
                      this.setKeys("");
                      this.setAccount({
                        account: res.current_account.account_name,
                        password: ""
                      });
                      this.settemporaryKeys("");
                      this.setLogin(true);
                      this.setIsAccount(true);
                      this.$router.push({ name: "home" });
                  });
                }
              })
            } else if (res.code == 160) {
              
              this.getAccounts().then(res => {
                  
                  this.setKeys("");
                  this.setAccount({
                    account: res.current_account.account_name,
                    password: ""
                  });
                  this.settemporaryKeys("");
                  this.setLogin(true);
                  this.setIsAccount(true);
                  this.$router.push({ name: "home" });
              });
            }
            
          });
          // if (!utils.validatePrivateKey(this.formData.privateKey)) {
          //   this.$kalert({
          //     message: this.$i18n.t('alert.illegalPrivateKey')
          //   })
          //   return false
          // }
          // const address = utils.privateKeyToAddress(this.formData.privateKey)
          // if (this.accounts.find(ele => ele.address === address)) {
          //   this.$kalert({
          //     message: this.$i18n.t('alert.existAccount')
          //   })
          //   return false
          // }
          // const { keystore } = await InternalMessage.widthPayload(InternalMessageTypes.ENCRYPTKEYSTORE, {privateKey: this.formData.privateKey})
          //   .send()
          // const account = { privateKey: '', keystore: keystore, address: address, name: createAccountName() }
          // this.addAccount(account)
          // this.$store.commit('setCurrentAccount', account)
        }
      });
    }
  }
};
</script>
