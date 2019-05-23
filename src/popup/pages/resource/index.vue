<template>
  <section>
    <app-header @refresh="refresh"/>
    <section class="app-container">
      <navigation :title="$t('title.resourceTitle')"/>
      <section class="resource-title">{{$t('title.resource')}}</section>
      <section class="resource-small-tip text-justify">{{$t('message.resourceTip')}}</section>
      <section class="show-resource">
        <section class="item">
          <span class="name">{{$t('label.bandwidth')}}</span>
          <span class="value">{{bandWidth}}</span>
          <span class="key">Bandwidth points</span>
        </section>
        <section class="item">
          <span class="name">CPU</span>
          <span class="value">{{cpu}}</span>
          <span class="key">Energy</span>
        </section>
      </section>
      <section class="show-vote">
        <section class="title">{{$t('label.vote')}}</section>
        <section class="vote">
          <span class="name">CocosPower</span>
          <span class="value">{{cocosPower}} TP</span>
        </section>
        <section class="pledged">{{$t('label.donePledge')}}：{{cocosPower}}</section>
        <section
          class="redeem-time"
          v-if="cocosPower > 0"
        >{{$t('label.redeemTime')}}：{{frozenExpires | moment('YYYY.MM.DD HH:mm')}}</section>
      </section>
      <section class="btn-group">
        <el-button type="primary" @click="pledgeVisible = true">{{$t('button.pledge')}}</el-button>
        <el-button
          type="primary"
          :disabled="!(cocosPower > 0)"
          @click="redeemVisible = true"
        >{{$t('button.redeem')}}</el-button>
      </section>
    </section>

    <!-- pledge -->
    <el-dialog top="15vh" center :title="$t('title.pledgeTrx')" :visible.sync="pledgeVisible">
      <div class="warm-tip">{{$t('message.pledgeTip')}}</div>
      <el-form ref="pledge" :model="pledgeForm" :rules="pledgeRules">
        <el-form-item :label="$t('label.pledgeAmount')" prop="amount">
          <el-input class="no-border" v-model="pledgeForm.amount" type="text">
            <template slot="append">TRX</template>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('label.pledgeType')">
          <el-select class="no-border" v-model="pledgeForm.type" style="width: 100%;">
            <el-option
              v-for="(item, index) in assetTypes"
              :key="index"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          @click="pledgeHandler('pledge')"
        >{{$t('button.pledgeSure')}}</el-button>
      </span>
    </el-dialog>

    <!-- redeem -->
    <el-dialog top="15vh" center :title="$t('title.redeemTrx')" :visible.sync="redeemVisible">
      <el-form ref="redeem">
        <el-form-item :label="$t('label.redeemAmount')">
          <el-input class="no-border" v-model="cocosPower" type="text" :disabled="true">
            <template slot="append">TRX</template>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="full-btn"
          type="primary"
          @click="redeemHandler"
        >{{$t('button.redeemSure')}}</el-button>
      </span>
    </el-dialog>
    <!-- alert -->
    <simplert :useRadius="true" :useIcon="true" ref="simplert"></simplert>
  </section>
</template>
<script>
import Navigation from "../../components/navigation";
import AppHeader from "../../components/app-header";
import utils from "../../../lib/utils";
import { mapState, mapActions } from "vuex";
import Simplert from "vue2-simplert";
import InternalMessage from "../../../messages/InternalMessage";
import * as InternalMessageTypes from "../../../messages/InternalMessageTypes";
export default {
  components: {
    Navigation,
    AppHeader,
    Simplert
  },
  data() {
    const amountValidator = (rule, value, callback) => {
      if (!/^(-?\d+)(\.\d+)?$/.test(value)) {
        callback(new Error(this.$i18n.t("verify.number")));
      } else if (value * 1 > 0) {
        callback();
      } else {
        callback(new Error(this.$i18n.t("verify.numberGtZero")));
      }
    };
    return {
      assetTypes: [
        { name: this.$i18n.t("type.bandWidth"), value: "BANDWIDTH" },
        { name: this.$i18n.t("type.energy"), value: "ENERGY" }
      ],
      pledgeVisible: false,
      redeemVisible: false,
      pledgeForm: {
        amount: 0,
        type: "BANDWIDTH"
      },
      pledgeRules: {
        amount: { validator: amountValidator, trigger: "blur" }
      },
      alertOption: {
        title: "",
        message: this.$i18n.t("alert.pledgeSuccess"),
        type: "info",
        customIconUrl: "/images/success-icon.png",
        onClose: this.onClose,
        customCloseBtnText: this.$i18n.t("button.close"),
        customCloseBtnClass: "el-button el-button--primary full-btn"
      }
    };
  },
  computed: {
    ...mapState(["currentAccount"]),
    ...mapState("account", ["cpu", "bandWidth", "frozenExpires"]),
    ...mapState("account", {
      cocosPower(state) {
        return utils.getTokenAmount(state.cocosPower);
      }
    })
  },
  created() {
    this.loadAccount();
  },
  methods: {
    ...mapActions("account", ["loadAccount"]),
    pledgeHandler(forName) {
      this.$refs[forName].validate(valid => {
        if (valid) {
          this.pledge();
        }
      });
    },
    redeemHandler() {
      this.redeem();
    },
    async pledge() {
      this.$store.commit("loading", true);
      this.pledgeVisible = false;
      try {
        // send to background
        const { result } = await InternalMessage.widthPayload(
          InternalMessageTypes.SIGNSENDTRANSACTION,
          { address: this.currentAccount.address, transaction: transaction }
        ).send();

        let success = result;
        this.$store.commit("loading", false);
        if (success) {
          this.alertOption.message = this.$i18n.t("alert.pledgeSuccess");
          this.alertOption.customIconUrl = "/images/success-icon.png";
          this.$refs.simplert.openSimplert(this.alertOption);
          this.loadAccount();
        } else {
          this.alertOption.message = this.$i18n.t("alert.pledgeFail");
          this.alertOption.customIconUrl = "/images/error-icon.png";
          this.$refs.simplert.openSimplert(this.alertOption);
        }
      } catch (e) {
        this.$store.commit("loading", false);
        this.alertOption.message = this.$i18n.t("alert.pledgeFail");
        this.alertOption.customIconUrl = "/images/error-icon.png";
        this.$refs.simplert.openSimplert(this.alertOption);
      }
    },
    async redeem() {
      this.$store.commit("loading", true);
      this.redeemVisible = false;
      try {
        let success = result;
        this.$store.commit("loading", false);
        if (success) {
          this.$store.commit("loading", false);
          this.alertOption.message = this.$i18n.t("alert.redeemSuccess");
          this.alertOption.customIconUrl = "/images/success-icon.png";
          this.$refs.simplert.openSimplert(this.alertOption);
          this.loadAccount();
        } else {
          this.$store.commit("loading", false);
          this.alertOption.message = this.$i18n.t("alert.redeemFail");
          this.alertOption.customIconUrl = "/images/error-icon.png";
          this.$refs.simplert.openSimplert(this.alertOption);
        }
      } catch (e) {
        this.$store.commit("loading", false);
        this.alertOption.message = this.$i18n.t("alert.redeemFail");
        this.alertOption.customIconUrl = "/images/error-icon.png";
        this.$refs.simplert.openSimplert(this.alertOption);
      }
    },
    refresh() {
      this.loadAccount();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/resource";
</style>
