<template>
  <section class="app-container">
    <navigation :title="$t('title.importAccount')"/>
    <el-form ref="form" :model="formData" :rules="formRules" label-position="top">
      <el-form-item :label="$t('label.tronPrivate')" prop="privateKey">
        <el-input type="textarea" :rows="4" v-model="formData.privateKey"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="no-border"
          v-model="formData.password"
          type="password"
          :placeholder="$t('placeholder.temporary')"
        ></el-input>
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
      if (value === "") {
        callback(new Error(this.$i18n.t("alert.illegalPrivateKey")));
      } else {
        callback();
      }
    };
    return {
      formData: {
        privateKey: "",
        password: ""
      },
      formRules: {
        privateKey: [{ validator: privateKeyPass, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["accounts", "temporaryKeys"])
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
    importAccount(formName) {
      // this.logoutBCXAccount();
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.setKeys(this.formData.privateKey);
          // this.setAccount({
          //   account: "",
          //   password: this.formData.password
          // });
          this.settemporaryKeys(this.formData.password);
          this.setPrivateKeys().then(res => {
            if (res.code === 1) {
              this.setKeys("");
              this.setAccount({
                account: res.data.account_name,
                password: ""
              });
              this.settemporaryKeys("");
              this.setLogin(true);
              this.setIsAccount(true);
              this.$router.push({ name: "home" });
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
