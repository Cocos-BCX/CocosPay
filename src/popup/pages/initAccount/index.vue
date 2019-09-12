<template>
  <section>
    <logo-header/>
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
      <div class="text-center">
        <img @click="logout()" src="/images/new-account.png">
      </div>
      <el-button
        class="full-btn mt30"
        type="primary"
        @click="createAccount"
      >{{$t('button.createAccount')}}</el-button>
      <section class="small-tip text-center mt10">{{$t('message.recommendNew')}}</section>
      <div class="text-center mt15">
        <img src="/images/import-account.png" @click="deleteWallet">
      </div>
      <el-button
        class="full-btn mt30"
        type="primary"
        @click="importAccount"
      >{{$t('button.importAccount')}}</el-button>
      <section class="small-tip text-center mt10">{{$t('message.recommendOld')}}</section>
    </section>
    <!-- create account -->
    <el-dialog
      top="15vh"
      center
      :title="$t('button.importAccount')"
      @closed="closedDialog"
      :visible.sync="currentCreateVisible"
    >
      <!-- <div class="warm-tip">{{$t('message.savePrivateKey')}}</div> -->
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          @click="accountLogin"
        >{{$t('button.accountLogin')}}</el-button>
        <el-button
          class="full-btn mt20"
          style="margin-left: 0 !important;"
          type="primary"
          @click="keysAccount"
        >{{$t('button.keysLogin')}}</el-button>
      </span>
    </el-dialog>
    <el-dialog
      top="15vh"
      center
      :title="$t('button.createAccount')"
      @closed="closedDialog"
      :visible.sync="register"
    >
      <!-- <div class="warm-tip">{{$t('message.savePrivateKey')}}</div> -->
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          @click="accountRegister"
        >{{$t('title.accountType')}}</el-button>
        <el-button
          class="full-btn mt20"
          style="margin-left: 0 !important;"
          type="primary"
          @click="walletRegister"
        >{{$t('title.walletType')}}</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
import LogoHeader from "../../components/logo-header";
import { createAccountName } from "../../utils/tools";
import utils from "../../../lib/utils";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    LogoHeader
  },
  data() {
    return {
      currentCreateVisible: false,
      register: false,
      lang: "中文",
      langs: [{ name: "中文", value: "ZH" }, { name: "English", value: "EN" }, { name: "Français", value: "FR" }]
    };
  },
  computed: {
    ...mapState(["currentCreateAccount", "curLng"])
  },
  mounted() {
    this.nodeLists().then(res => {
      if (!Array.isArray(res)) return;
      res[0].connect = true;
      this.apiConfig(res[0]).then(() => {
        this.init();
      });
    });
    this.lang = this.curLng === "ZH" ? "中文" : "English";
    this.$i18n.locale = this.curLng;
  },
  methods: {
    ...mapMutations("wallet", ["addAccount"]),
    ...mapActions(["nodeLists", "apiConfig", "init"]),
    ...mapMutations([
      "setCurrentAccount",
      "setCurrentCreateAccount",
      "setCurrentCreateVisible",
      "setCurLng"
    ]),
    ...mapActions("wallet", ["deleteWallet"]),
    ...mapActions("account", ["logoutBCXAccount"]),
    closedDialog() {
      this.currentCreateVisible = false;
      this.register = false;
    },
    copySuccess() {
      this.$kalert({
        message: this.$i18n.t("alert.copySuccess")
      });
    },
    logout() {
      Promise.all([this.deleteWallet(), this.logoutBCXAccount()]).then(
        res => {}
      );
    },
    copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    },
    changeLanguage() {
      this.setCurLng(this.lang);
      this.$i18n.locale = this.lang;
      this.$kalert({
        message: this.$i18n.t("alert.modifySuccess")
      });
    },
    createAccount() {
      this.register = true;
    },
    accountRegister() {
      this.$router.push({
        name: "createAccount",
        params: {
          type: "account"
        }
      });
    },
    walletRegister() {
      this.$router.push({
        name: "createAccount",
        params: {
          type: "wallet"
        }
      });
    },
    importAccount() {
      this.currentCreateVisible = true;
      // this.$router.push({ name: "importAccount" });
    },
    accountLogin() {
      this.$router.push({ name: "login" });
    },
    keysAccount() {
      this.$router.push({ name: "importAccount" });
    },
    jumpHome() {
      this.setCurrentCreateVisible(false);
      this.addAccount(this.currentCreateAccount);
      this.setCurrentAccount(this.currentCreateAccount);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.privateKey-area {
  background-color: $bg-shallow;
  font-size: 12px;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
}
.select-lang {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
}
</style>
