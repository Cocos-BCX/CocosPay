<template>
  <section class="app-container">
    <navigation :title="$t('title.sendDetail')"/>
    <div id="perfect-scroll-wrapper">
      <section class="eos-main" v-if="orderDeatil.type === 'transfer'">
        <h2
          class="eos-style cocos mt20"
        >{{cocosAccount.accounts === orderDeatil.parse_operations.from ? '-' : '+'}}{{orderDeatil.parse_operations.amount}}({{$t('title.test')}})</h2>
        <div class="des">{{$t('alert.tranferSuccess')}}</div>
        <div class="translate-log-title mt40">
          <div class="log-line"></div>
          <!-- <div class="log-title">{{$t('title.history')}}</div>-->
        </div>
      </section>
      <section class="running" v-if="orderDeatil.type === 'transfer'">
        <div class="title mt20">
          <div class="key">{{$t('label.send')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.from}}</p>
            <button
              v-clipboard:copy="orderDeatil.parse_operations.from"
              v-clipboard:success="copySuccess"
              v-clipboard:error="copyError"
              type="button"
              style="margin-left:10px"
            ></button>
          </div>
        </div>

        <div class="title mt20">
          <div class="key">{{$t('label.receive')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.to}}</p>
            <button
              v-clipboard:copy="orderDeatil.parse_operations.to"
              v-clipboard:success="copySuccess"
              v-clipboard:error="copyError"
              type="button"
              style="margin-left:10px"
            ></button>
          </div>
        </div>
      </section>
      <section class="eos-main" v-if="orderDeatil.type === 'transfer_nh_asset'">
        <h2 class="eos-style cocos">{{$t('label.nhTitle')}}</h2>
        <div class="translate-log-title mt20">
          <div class="log-line"></div>
          <!-- <div class="log-title">{{$t('title.history')}}</div>-->
        </div>
      </section>
      <section class="running" v-if="orderDeatil.type === 'transfer_nh_asset'">
        <div class="title mt20">
          <div class="key">{{$t('label.send')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.from}}</p>
            <button
              v-clipboard:copy="orderDeatil.parse_operations.from"
              v-clipboard:success="copySuccess"
              v-clipboard:error="copyError"
              type="button"
              style="margin-left:10px"
            ></button>
          </div>
        </div>

        <div class="title mt20">
          <div class="key">{{$t('label.receive')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.to}}</p>
            <button
              v-clipboard:copy="orderDeatil.parse_operations.to"
              v-clipboard:success="copySuccess"
              v-clipboard:error="copyError"
              type="button"
              style="margin-left:10px"
            ></button>
          </div>
        </div>

        <div class="title mt10">
          <div class="key">{{$t('label.nhId')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.nh_asset}}</p>
          </div>
        </div>
      </section>
      <section class="eos-main" v-if="orderDeatil.type === 'call_contract_function'">
        <h2 class="eos-style cocos">{{$t('label.contract')}}{{$t('label.operation')}}</h2>
        <div class="translate-log-title mt20">
          <div class="log-line"></div>
          <!-- <div class="log-title">{{$t('title.history')}}</div>-->
        </div>
      </section>
      <section class="running" v-if="orderDeatil.type === 'call_contract_function'">
        <div class="title mt20">
          <div class="key">{{$t('label.user')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.caller}}</p>
            <button
              v-clipboard:copy="orderDeatil.parse_operations.caller"
              v-clipboard:success="copySuccess"
              v-clipboard:error="copyError"
              type="button"
              style="margin-left:10px"
            ></button>
          </div>
        </div>

        <div class="title mt10">
          <div class="key">{{$t('label.contract')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.contract_name}}</p>
          </div>
        </div>

        <div class="title mt10">
          <div class="key">{{$t('label.operation')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.function_name}}</p>
          </div>
        </div>

        <div class="title mt10">
          <div class="key">{{$t('label.json')}}:</div>
          <div class="name">
            <div class="json">{{JSON.stringify(orderDeatil.parse_operations.arg_list)}}</div>
          </div>
        </div>
      </section>
      <section class="eos-main">
        <div class="translate-log-title mt10">
          <div class="log-line"></div>
          <!-- <div class="log-title">{{$t('title.history')}}</div>-->
        </div>
      </section>
      <section class="running mt15">
        <div class="title mt20">
          <div class="key">{{$t('label.charge')}}:</div>
          <div class="name">
            <p>{{orderDeatil.parse_operations.fee}}({{$t('title.test')}})</p>
          </div>
        </div>

        <div class="title mt20">
          <div class="key">{{$t('label.hash')}}:</div>
          <div class="name">{{orderDeatil.id}}</div>
        </div>

        <div class="title mt20">
          <div class="key">{{$t('label.blockHeight')}}:</div>
          <div class="name">{{orderDeatil.block_num}}</div>
        </div>

        <div class="title mt20">
          <div class="key">{{$t('label.tradeTime')}}:</div>
          <div class="name">{{orderDeatil.date}}</div>
        </div>

        <div class="title mt20" v-if="memo">
          <div class="key memo">{{$t('label.memo')}}:</div>
          <div class="name memo">{{orderDeatil.memo.data.text}}</div>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import Navigation from "../../components/navigation";
import utils from "../../../lib/utils";
import { mapState, mapActions, mapMutations } from "vuex";
import bcx from "../../utils/bcx";
import PerfectScrollbar from "perfect-scrollbar";
let NewBCX = bcx.getBCXWithState();
export default {
  components: {
    Navigation
  },
  data() {
    return {
      orderDeatil: {},
      memo: false,
      transactionsScroller: null
    };
  },
  computed: {
    ...mapState(["cocosAccount"])
  },
  async created() {
    this.orderDeatil = this.$route.params;
    if (this.orderDeatil.memo) {
      this.orderDeatil.memo = await NewBCX.decodeMemo(this.orderDeatil.memo);
      this.memo = true;
    } else {
      this.orderDeatil.memo = this.orderDeatil.raw_data.memo
        ? await NewBCX.decodeMemo(this.orderDeatil.raw_data.memo)
        : "";
      if (this.orderDeatil.memo) {
        this.memo = true;
      }
    }
  },
  mounted() {
    this.transactionsScroller = new PerfectScrollbar(
      "#perfect-scroll-wrapper",
      {
        minScrollbarLength: 40,
        maxScrollbarLength: 40
      }
    );
  },
  methods: {
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
@import "../../styles/home.scss";

.cocos {
  font-size: 22px;
  font-family: NotoSansHans-Medium;
  font-weight: 500;
  color: rgba(70, 121, 254, 1);
}
.eos-style {
  margin-bottom: 0 !important;
}
.eos-main {
  border-top: none !important;
}
.des {
  color: #8c9097;
  font-size: 15px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(140, 144, 151, 1);
}
.mt40 {
  margin-top: 40px;
}
.running {
  display: flex;
  flex-direction: column;
  .key {
    min-width: 100px;
  }
  .title {
    display: flex;
    align-items: center;
    color: #8c9097;
    font-size: 15px;
  }
  .name {
    display: flex;
    font-size: 15px;
    align-items: center;
    &.memo {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      // flex: 1;
    }
    p {
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    div {
      flex: 1;
    }
    button {
      height: 16px;
      width: 16px;
      background: url("/icons/copy.png") no-repeat center;
      background-size: 100% 100%;
      margin-left: 5px;
      margin: 0;
      padding: 0;
      border: none; //自定义边框
      outline: none;
    }
  }
}
</style>
