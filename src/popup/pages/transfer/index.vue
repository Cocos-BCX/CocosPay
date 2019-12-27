<template>
  <section class="app-container transfers">
    <navigation :title="$t('title.transfer')" />
    <el-form class="mt20" ref="form" :model="formData" :rules="formRules" label-position="top">
      <el-form-item :label="$t('label.ownerAccount')" prop="from">
        <!-- <el-select class="no-border" v-model="formData.from" style="width: 100%;">
          <el-option
            v-for="(item, index) in accounts"
            :value="item.address"
            :key="index"
            :label="item.name"
          ></el-option>
        </el-select>-->
        <el-input class="no-border" v-model="formData.from" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item :label="$t('label.toAddress')" prop="to">
        <el-input class="no-border" v-model="formData.to"></el-input>
      </el-form-item>
      <el-form-item :label="currentNodeName =='Test'?$t('label.tokenType') + $t('title.test'):$t('label.tokenType')" prop="token">
        <el-select
          class="no-border"
          v-model="formData.token"
          style="width: 100%;"
          @change="changeCoin"
        >
          <el-option
            v-for="(item, index) in coins"
            :value="item.coin"
            :key="index"
            :label="item.coin"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('label.amount')" prop="amount">
        <el-input class="no-border" v-model="formData.amount" type="text"></el-input>
      </el-form-item>
      <el-form-item :label="$t('label.memo')" prop="memo">
        <el-input class="no-border" v-model="formData.memo" type="text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="full-btn mt10"
          type="primary"
          @click="onSubmit('form')"
        >{{$t('button.send')}}</el-button>
      </el-form-item>
    </el-form>
    <!-- transfer info -->
    <div class="popup" v-show="popup">
      <div class="popup-container">
        <div class="close" @click="popup = false">
          <v-icon name="times" scale="1.4"></v-icon>
        </div>
        <div class="title">{{$t('title.sendDetail')}}</div>
        <div class="popup-body">
          <div class="item">
            <div class="label">{{$t('label.ownerAccount')}}</div>
            <div class="content">{{cocosAccount.accounts}}</div>
          </div>
          <div class="item">
            <div class="label">{{$t('label.toAddress')}}</div>
            <div class="content">{{formData.to}}</div>
          </div>
          <div class="item">
            <div class="label money-label">{{$t('label.amount')}}</div>
            <div class="content money-content">
              <span>{{formData.amount}}</span>
              {{formData.token}}
              <span class="test-coin" v-if="currentNodeName== 'Test'">({{$t('title.test')}})</span>
            </div>
          </div>
          <div class="item">
            <div class="label">{{$t('label.memo')}}</div>
            <div class="content">{{formData.memo}}</div>
          </div>
          <!-- <div class="item fee">
            <div class="label">{{$t('label.charge')}}</div>
            <div class="content">{{fee}}({{$t('title.test')}})</div>
          </div>-->
          <el-button class="full-btn" type="primary" @click="surePay">{{$t('button.surePay')}}</el-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Navigation from "../../components/navigation";
import Alert from "../../components/kalert/function";
import { mapState, mapMutations, mapActions } from "vuex";
import utils from "../../../lib/utils";
import InternalMessage from "../../../messages/InternalMessage";
import * as InternalMessageTypes from "../../../messages/InternalMessageTypes";
import { setTimeout } from "timers";
import Storage from "../../../lib/storage";
export default {
  components: {
    Navigation
  },
  data() {
    const frommValidator = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.ownerAccountNull")));
      } else {
        callback();
      }
    };
    const toValidator = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.toAddressNull")));
      } else if (value === this.cocosAccount.accounts) {
        callback(new Error(this.$i18n.t("message.ownerError")));
      } else {
        callback();
      }
    };
    const tokenValidator = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("verify.tokenNull")));
      } else if (value === this.cocosAccount.accounts) {
        callback(new Error(this.$i18n.t("message.ownerError")));
      } else {
        callback();
      }
    };
    const amountValidator = (rule, value, callback) => {
      if (value < 0 || value == 0) {
        callback(new Error(this.$i18n.t("verify.noZero")));
      } else if (!/^(-?\d+)(\.\d+)?$/.test(value)) {
        callback(new Error(this.$i18n.t("verify.number")));
      } else if (
        value.toString().split(".")[1] &&
        value.toString().split(".")[1].length > this.precision
      ) {
        callback(new Error(this.$i18n.t("verify.minimum") + this.precision));
      } else {
        callback();
      }
    };
    return {
      currentNodeName: Storage.get("choose_node").name,
      popup: false,
      formData: {
        from: "",
        to: "",
        token: "COCOS",
        amount: 0,
        memo: ""
      },
      owner: false,
      formRules: {
        from: { validator: frommValidator, trigger: "blur" },
        to: { validator: toValidator, trigger: "blur" },
        token: { validator: tokenValidator, trigger: "blur" },
        amount: { validator: amountValidator, trigger: "blur" }
      },
      tokens: [],
      assetKey: this.$route.params.assetKey ? this.$route.params.assetKey : "",
      coins: [],
      precision: "",
      fee: ""
    };
  },
  computed: {
    ...mapState(["cocosAccount", "cocosCount", "accountType"]),
    ...mapState("wallet", ["accounts"]),
    ...mapState("trans", ["tranferInfo"]),
    payName() {
      let account = this.accounts.find(
        ele => ele.address === this.formData.from
      );
      if (account) {
        return account.name;
      } else {
        return "";
      }
    }
  },
  async created() {
    this.formData.from = this.cocosAccount.accounts;
    await this.UserAccount().then(res => {
      if (res.code === 1) {
        if (Array.isArray(res.data)) {
          this.coins = res.data.filter( item => {
            return item.coins != "GAS"
          });
        } else {
          for (let [key, value] of Object.entries(res.data)) {
            if (key != "GAS") {
              this.coins.push({
                coin: key,
                amount: value
              });
            }
            
          }
        }
      }else {
          this.$kalert({
            message:  _this.$i18n.t("chainInterfaceError[500]")
          });
      }
    });
    if (this.accountType === "wallet") {
      this.OutPutKey().then(key => {
        if (
          !key.data.active_private_keys ||
          !key.data.active_private_keys.length
        ) {
          this.owner = true;
        }
      });
    }
    this.changeCoin();
    // this.loadTokens()
  },
  methods: {
    ...mapMutations("trans", ["setAccount"]),
    ...mapActions("trans", [
      "tranferBCX",
      "queryTranferRate",
      "queryAsset",
      "tranferBCXFree"
    ]),
    ...mapActions("account", ["UserAccount", "OutPutKey"]),
    async changeCoin() {
      await this.queryAsset({ assetId: this.formData.token }).then(res => {
        this.precision = res.precision;
      });
      await this.queryTranferRate({ feeAssetId: "COCOS" }).then(res => {
        this.fee = res.data.fee_amount.toFixed(this.precision);
      });
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.popup = true;
        }
        // if (valid) {
        //   this.setAccount({
        //     toAccount: this.formData.to,
        //     coin: this.formData.token,
        //     amount: this.formData.amount,
        //     memo: this.formData.memo
        //   });
        //   this.tranferBCXFree().then(res => {
        //     console.log(res);

        //     this.fee = res.data[0].fees[0].amount.toFixed(this.precision);
        //     if (this.owner) {
        //       this.$kalert({
        //         message: this.$i18n.t("verify.ownerKey")
        //       });
        //       return;
        //     } else if (
        //       (this.formData.token === "COCOS" &&
        //         res.data[0].fees[0].amount + Number(this.formData.amount) <
        //           this.cocosCount) ||
        //       res.data[0].fees[0].amount + Number(this.formData.amount) ===
        //         this.cocosCount
        //     ) {
        //       this.popup = true;
        //     } else if (
        //       this.formData.token !== "COCOS" &&
        //       res.data[0].fees[0].amount < this.cocosCount
        //     ) {
        //       this.popup = true;
        //     } else {
        //       // this.$kalert({
        //       //   message: this.$i18n.t("alert.transferFail")
        //       // });
        //       this.popup = true;
        //     }
        //   });
        // }
      });
    },
    surePay() {
      console.log('this.formData')
      console.log(this.formData)
      this.setAccount({
        toAccount: this.formData.to,
        coin: this.formData.token,
        amount: this.formData.amount,
        memo: this.formData.memo
      });
      this.popup = false;
      this.tranferBCX().then(res => {
        if (res.code === 1) {
          this.$kalert({
            message: this.$i18n.t("alert.tranferSuccess")
          });
          this.$router.push({ name: "home" });
        } else {
          if (res.message.indexOf('Transaction was not signed. Do you have a private key? [no_signers]') > -1) {
            this.$kalert({
              message:  this.$i18n.t("verify.ownerKey")
            });
          } else if (res.message.indexOf('Assert Exception: itr->get_balance()') > -1) {
            this.$kalert({
              message:  this.$i18n.t("alert.transferFail")
            });
          } else if (res.message.indexOf('locked->value') > -1) {
            this.$kalert({
              message:  this.$i18n.t("alert.transferFail")
            });
          } else if (res.message.indexOf('insufficient_balance') > -1) {
            this.$kalert({
              message:  this.$i18n.t("alert.transferFail")
            });
          } else {
            this.$kalert({
              message:  this.$i18n.t("chainInterfaceError[500]")
            });
          }
        }
      }).catch( res => {
        console.log(res)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.popup {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
.popup-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  background-color: #fff;
  .close {
    position: absolute;
    right: 20px;
    top: 5px;
    font-size: 18px;
    cursor: pointer;
    color: $color-second;
  }
  .title {
    text-align: center;
    padding-bottom: 15px;
    font-size: 16px;
    border-bottom: 1px dashed #e6e6e6;
  }
  .item {
    display: flex;
    height: 50px;
    overflow: hidden;
    .label {
      white-space: nowrap;
      color: $color-second;
      display: flex;
      align-items: center;
    }
    .content {
      padding-left: 5px;
      flex: 1;
      display: flex;
      align-items: center;
      max-width: 270px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .memo-content {
      max-height: 50px;
      line-height: 18px;
    }
    .money-label {
      color: $color-base;
    }
    .money-content {
      color: $primary-color;
      justify-content: flex-end;
      span {
        font-size: 16px;
        position: relative;
        padding-right: 5px;
      }
      .test-coin {
        font-size: 14px;
      }
    }
  }
}
</style>
