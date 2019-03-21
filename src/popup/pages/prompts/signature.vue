<template>
  <section class="prompt-body">
    <div class="prompt-main" v-if="locked">
      <div class="signature-title">
        <span class="title">{{$t('title.locked')}}</span>
      </div>
      <!-- <div class="signature-info">
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptaddress')}}</div>
          <div class="info-content">
            <span>{{prompt.data.toAccount}}</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptamount')}}</div>
          <div class="info-content">
            <span>{{prompt.data.amount}} {{prompt.data.assetId}}</span>
          </div>
        </div>
      </div>-->

      <section class="prompt-actions">
        <el-button class="cancel-btn text-center" @click="denied">{{$t('button.reject')}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          @click="denied"
        >{{$t('button.confirm')}}</el-button>
      </section>
    </div>
    <div class="prompt-main" v-if="!locked">
      <div class="signature-title">
        <span class="title">{{$t('title.signature')}}</span>
        <span class="signature-user">{{cocosAccount.accounts}}</span>
      </div>
      <div class="signature-info">
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content">{{prompt.data.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptaddress')}}</div>
          <div class="info-content">
            <span>{{prompt.data.toAccount}}</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptamount')}}</div>
          <div class="info-content">
            <span>{{prompt.data.amount}} {{prompt.data.assetId}}</span>
          </div>
        </div>
      </div>

      <!-- <div class="signature-info">
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content"></div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptcontract')}}</div>
          <div class="info-content">
            <span></span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptpayment')}}</div>
          <div class="info-content">
            <span></span>
          </div>
        </div>
      </div>
      <div class="signature-info">
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content">
            <span></span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.pttype')}}</div>
          <div class="info-content">
            <span></span>
          </div>
        </div>
      </div>-->
      <!-- <section v-for="message in Object.entries(data.parameter.value)">
              <figure class="value big" v-if="Object.entries(data.parameter.value).length > 1">{{getFormatValue(message[0], message[1])}}</figure>
      </section>-->
      <!-- <div class="signature-info">
        <div class="info">
          <div class="info-label">{{$t('label.property')}}</div>
        </div>
        <div class="signature-content" id="property">
          <section class="partition"></section>
        </div>
      </div>-->
      <el-checkbox class="join-option" v-model="joinWhiteList">{{$t('message.joinWhiteList')}}</el-checkbox>
      <section class="prompt-actions">
        <el-button class="cancel-btn text-center" @click="denied">{{$t('button.reject')}}</el-button>
        <el-button
          class="confirm-btn text-center"
          type="primary"
          @click="accepted"
        >{{$t('button.confirm')}}</el-button>
      </section>
    </div>
  </section>
</template>
<script>
  // import PerfectScrollbar from "perfect-scrollbar";
  import { mapState, mapActions, mapMutations } from "vuex";
  import NotificationService from "../../../services/NotificationService";
  import utils from "../../../lib/utils";
  import IdGenerator from "../../../lib/IdGenerator";
  export default {
    data() {
      return {
        property: null,
        json: null,
        contract: null,
        data: {},
        joinWhiteList: false,
        locked: true
      };
    },
    computed: {
      ...mapState(["cocosAccount"]),
      ...mapState("wallet", ["prompt"]),
      ...mapState("trans", ["tranferInfo"])
    },
    created() {
      // this.data = this.prompt.data;
      // this.data = this.prompt.data.signedTransaction.raw_data.contract[0]
    },
    mounted() {
      this.loadingBCXAccount().then(res => {
        this.locked = res && res.locked ? true : false;
      });
      // this.$nextTick(() => {
      //   this.property = new PerfectScrollbar("#property");
      // });
    },
    methods: {
      ...mapMutations("wallet", ["addWhiteList"]),
      ...mapActions("wallet", ["pushPrompt"]),
      ...mapMutations("trans", ["setAccount"]),
      ...mapActions("trans", ["tranferBCX", "queryTranferRate"]),
      ...mapActions("account", ["loadingBCXAccount"]),
      denied() {
        this.prompt.responder(null);
        NotificationService.close();
      },
      accepted() {
        this.setAccount({
          toAccount: this.prompt.data.toAccount,
          coin: this.prompt.data.assetId,
          amount: this.prompt.data.amount,
          memo: ""
        });
        this.tranferBCX().then(res => {
          if (res.code === 1) {
            console.log("success");
          }
        });
        // const transaction = this.prompt.data.signedTransaction;
        // if (this.joinWhiteList && this.data.type === "TriggerSmartContract") {
        if (this.joinWhiteList) {
          // 加入白名单
          let white = {
            id: IdGenerator.numeric(24),
            address: this.prompt.data.toAccount,
            domain: this.prompt.domain,
            createTime: this.$moment().format("x")
          };
          debugger;
          this.addWhiteList(white);
        }
        // this.prompt.responder({ accepted: true, transaction });
        NotificationService.close();
      },
      addressFromHex(address) {
        return utils.transformAddress(address);
      },
      getAmount() {
        let amount = 0;
        let cname = "TRX";
        if (this.data.type === "TransferContract") {
          amount = utils.getTokenAmount(this.data.parameter.value.amount || 0);
        } else if (this.data.type === "TransferAssetContract") {
          amount = this.data.parameter.value.amount || 0;
          cname = utils.toUtf8(this.data.parameter.value.asset_name || "");
        } else if (this.data.type === "TriggerSmartContract") {
          amount = utils.getTokenAmount(
            this.data.parameter.value.call_value || 0
          );
        }
        return amount + "  " + cname;
      },
      getFormatValue(key, value) {
        switch (key) {
          case "owner_address":
          case "to_address":
          case "contract_address":
            value = this.addressFromHex(value);
            break;
          case "asset_name":
            value = utils.toUtf8(value);
            break;
          default:
            break;
        }
        // TransferContract
        if (this.data.type === "TransferContract" && key === "amount") {
          value = utils.getTokenAmount(value) + " TRX";
        }
        // TransferAssetContract
        // TriggerSmartContract
        if (this.data.type === "TriggerSmartContract" && key === "call_value") {
          value = utils.getTokenAmount(value) + " TRX";
        }

        return key + " : " + value;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/prompt";
  .join-option {
    position: absolute;
    bottom: 20px;
  }
</style>
