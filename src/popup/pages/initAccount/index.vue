<template>
  <section>
    <logo-header/>
    <section class="app-container">
      <div class="text-center mt30">
        <img @click="logout()" src="/images/new-account.png">
      </div>
      <el-button
        class="full-btn mt30"
        type="primary"
        @click="createAccount"
      >{{$t('button.createAccount')}}</el-button>
      <section class="small-tip text-center mt10">{{$t('message.recommendNew')}}</section>
      <div class="text-center mt15">
        <img src="/images/import-account.png">
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
      register: false
    };
  },
  computed: {
    ...mapState(["currentCreateAccount"])
  },
  methods: {
    ...mapMutations("wallet", ["addAccount"]),
    ...mapMutations([
      "setCurrentAccount",
      "setCurrentCreateAccount",
      "setCurrentCreateVisible"
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
      this.deleteWallet();
      // this.logoutBCXAccount();
    },
    copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    },
    createAccount() {
      this.register = true;
      // this.$router.push({ name: "createAccount" });
      // const account = utils.generateAccount()
      // this.setCurrentCreateAccount({ privateKey: account.privateKey, address: account.address, name: createAccountName() })
      // this.setCurrentCreateVisible(true)
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
</style>
