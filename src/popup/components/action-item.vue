<template>
  <section v-if="data">
    <div class="action" @click="goTxDetail" v-if="data.type === 'transfer'">
      <div class="action-left">
        <img src="/icons/48px.png">
      </div>
      <div class="action-main">
        <div class="action-memo">
          <span>{{data.id}}</span>
        </div>
        <div>{{data.date}}</div>
        <!-- <div
        class="create-time"
        >{{(data.raw_data.timestamp || data.raw_data.expiration) | moment('YYYY.MM.DD HH:mm:ss')}}</div>-->
      </div>
      <div class="action-right">
        <span class="action-eos">
          <span v-if="cocosAccount.accounts === data.parse_operations.to">+</span>
          <span v-else>-</span>
          <span class="coin">
            {{data.parse_operations.amount}}
            <span class="test-coin">({{$t('title.test')}})</span>
          </span>
        </span>
      </div>
    </div>
    <div class="action" @click="goTxDetail" v-if="data.type === 'call_contract_function'">
      <div class="action-left">
        <img src="/icons/48px.png">
      </div>
      <div class="action-main">
        <div class="action-memo">
          <span>{{data.id}}</span>
        </div>
        <div>{{data.date}}</div>
        <!-- <div
        class="create-time"
        >{{(data.raw_data.timestamp || data.raw_data.expiration) | moment('YYYY.MM.DD HH:mm:ss')}}</div>-->
      </div>
      <div class="action-right">
        <span class="action-eos">
          <span>-</span>
          <span class="coin">
            {{data.parse_operations.fee}}
            <span class="test-coin">({{$t('title.test')}})</span>
          </span>
        </span>
      </div>
    </div>
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
    .coin {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 150px;
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
