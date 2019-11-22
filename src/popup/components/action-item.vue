<template>
  <section v-if="data">
    <section class="action" @click="goTxDetail" v-if="data.type === 'transfer'">
      <div class="action-left">
        <img
          v-if="cocosAccount.accounts === data.parse_operations.to"
          src="/icons/receive_operation_icon.png"
        >
        <img v-else src="/icons/transfer_operation_icon.png">
      </div>
      <div class="action-main">
        <div class="action-memo">
          <span>{{cocosAccount.accounts === data.parse_operations.to ? data.parse_operations.from : data.parse_operations.to}}</span>
        </div>
        <div>{{data.date}}</div>
        <!-- <div
        class="create-time"
        >{{(data.raw_data.timestamp || data.raw_data.expiration) | moment('YYYY.MM.DD HH:mm:ss')}}</div>-->
      </div>
      <div class="action-right">
        <span class="action-eos">
          <span class="in" v-if="cocosAccount.accounts === data.parse_operations.to">+</span>
          <span class="out" v-else>-</span>
          <span
            class="coin"
            :class="cocosAccount.accounts === data.parse_operations.from ? 'out' : 'in'"
          >
            {{data.parse_operations.amount}}
            <span class="test-coin">({{$t('title.test')}})</span>
          </span>
        </span>
      </div>
    </section>
    <section class="action" @click="goTxDetail" v-if="data.type === 'call_contract_function'">
      <div class="action-left">
        <img src="/icons/contract_icon.png">
      </div>
      <div class="action-main">
        <div class="action-memo">
          <span>{{data.parse_operations.caller}}</span>
        </div>
        <div>{{data.date}}</div>
        <!-- <div
        class="create-time"
        >{{(data.raw_data.timestamp || data.raw_data.expiration) | moment('YYYY.MM.DD HH:mm:ss')}}</div>-->
      </div>
      <div class="action-right">
        <span class="action-eos">
          <span class="coin contract">
            {{data.parse_operations.contract_name}}
            <!-- <span class="test-coin">({{$t('title.test')}})</span> -->
          </span>
        </span>
      </div>
    </section>
    <section class="action" @click="goTxDetail" v-if="data.type === 'transfer_nh_asset'">
      <div class="action-left">
        <img
          v-if="cocosAccount.accounts === data.parse_operations.to"
          src="/icons/nh_asset_receive.png"
        >
        <img v-else src="/icons/nh_asset_transfer.png">
      </div>
      <div class="action-main">
        <div class="action-memo">
          <span>{{cocosAccount.accounts === data.parse_operations.to ? data.parse_operations.from : data.parse_operations.to}}</span>
        </div>
        <div>{{data.date}}</div>
        <!-- <div
        class="create-time"
        >{{(data.raw_data.timestamp || data.raw_data.expiration) | moment('YYYY.MM.DD HH:mm:ss')}}</div>-->
      </div>
      <div class="action-right">
        <span class="action-eos">
          <span
            class="coin"
            :class="cocosAccount.accounts === data.parse_operations.from ? 'out' : 'in'"
          >
            {{data.parse_operations.nh_asset}}
            <span class="test-coin">({{$t('title.test')}})</span>
          </span>
        </span>
      </div>
    </section>
  </section>
</template>
<script>
import { mapState } from "vuex";
import utils from "../../lib/utils";
import store from "../store";
import defaultNetworks from "../config/networks";
export default {
  props: {
    data: {
      type: Object
      // default: function() {
      //   return {};
      // }
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["cocosAccount"]),
    ...mapState(["currentAccount"])
  },
  methods: {
    goTxDetail() {
      this.$router.push({ name: "OrderDeatil", params: this.data });
    },
    copySuccess() {
      this.$kalert({
        message: this.$i18n.t("alert.copySuccess")
      });
    },
    copyError() {
      this.$kalert({
        message: this.$i18n.t("alert.copyFail")
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.action {
  position: relative;
  width: 100%;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
  &-left {
    position: absolute;
    top: 17.5px;
    left: 10px;
    width: 35px;
    img {
      height: 25px;
    }
  }
  &-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 120px 10px 45px;
    font-size: 12px;
    height: 60px;
    .create-time {
      color: #999;
      font-size: 12px;
    }
  }
  &-memo {
    display: flex;
    align-items: center;
    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 120px;
    }
  }
  &-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 60px;
    font-size: 14px;
    .action-eos {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: flex-end;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 160px;
    }
    .in {
      color: #2fc49f;
    }
    .out {
      color: #4868dc;
    }
    .coin {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 150px;
      &.in {
        color: #2fc49f;
      }
      &.out {
        color: #4868dc;
      }
      &.contract {
        color: #4b4bd9;
      }
    }
    .status-icon {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
    }
  }
  button {
    height: 13px;
    width: 13px;
    background: url("/icons/copy.png") no-repeat center;
    background-size: 100% 100%;
    margin-left: 5px;
    margin: 0;
    padding: 0;
    border: none; //自定义边框
    outline: none;
  }
}
</style>
