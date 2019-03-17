<template>
  <section class="prompt-body">
    <div class="prompt-main">
      <div class="signature-title">
        <span class="title">{{$t('title.signature')}}</span>
        <span class="signature-user">{{currentAccount.name}}</span>
      </div>
      <div class="signature-info" v-if="data.type === 'TransferContract' || data.type === 'TransferAssetContract'">
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content">{{prompt.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptaddress')}}</div>
          <div class="info-content">
            <span>{{addressFromHex(data.parameter.value.to_address)}}</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptamount')}}</div>
          <div class="info-content">
            <span>{{getAmount()}}</span>
          </div>
        </div>
      </div>
      <div class="signature-info" v-else-if="data.type === 'TriggerSmartContract'">
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content">{{prompt.domain}}</div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptcontract')}}</div>
          <div class="info-content">
            <span>{{addressFromHex(data.parameter.value.contract_address)}}</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.ptpayment')}}</div>
          <div class="info-content">
            <span>{{getAmount()}}</span>
          </div>
        </div>
      </div>
      <div class="signature-info" v-else>
        <div class="info">
          <div class="info-label">{{$t('label.ptsite')}}</div>
          <div class="info-content">
            <span>{{prompt.domain}}</span>
          </div>
        </div>
        <div class="info">
          <div class="info-label">{{$t('label.pttype')}}</div>
          <div class="info-content">
            <span>{{data.type}}</span>
          </div>
        </div>
      </div>
      <div class="signature-info">
        <div class="info">
          <div class="info-label">{{$t('label.property')}}</div>
        </div>
        <div class="signature-content" id="property">
          <section class="partition">
            <section v-for="message in Object.entries(data.parameter.value)">
              <figure class="value big" v-if="Object.entries(data.parameter.value).length > 1">{{getFormatValue(message[0], message[1])}}</figure>
            </section>
          </section>
        </div>
      </div>
      <el-checkbox class="join-option" v-if="data.type === 'TriggerSmartContract'" v-model="joinWhiteList">
        {{$t('message.joinWhiteList')}}
      </el-checkbox>
      <section class="prompt-actions">
        <el-button class="cancel-btn text-center" @click="denied">{{$t('button.reject')}}</el-button>
        <el-button class="confirm-btn text-center" type="primary" @click="accepted">{{$t('button.confirm')}}</el-button>
      </section>
    </div>
  </section>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar'
import { mapState, mapActions, mapMutations } from 'vuex'
import NotificationService from '../../../services/NotificationService'
import utils from '../../../lib/utils'
import IdGenerator from '../../../lib/IdGenerator'
export default {
  data () {
    return {
      property: null,
      json: null,
      contract: null,
      data: {},
      joinWhiteList: false
    }
  },
  computed: {
    ...mapState([
      'currentAccount'
    ]),
    ...mapState('wallet', [
      'prompt'
    ])
  },
  created () {
    this.data = this.prompt.data.signedTransaction.raw_data.contract[0]
  },
  mounted () {
    this.$nextTick(() => {
      this.property = new PerfectScrollbar('#property')
    })
  },
  methods: {
    ...mapMutations('wallet', [
      'addWhiteList'
    ]),
    ...mapActions('wallet', [
      'pushPrompt'
    ]),
    denied () {
      this.prompt.responder(null)
      NotificationService.close()
    },
    accepted () {
      const transaction = this.prompt.data.signedTransaction
      if (this.joinWhiteList && this.data.type === 'TriggerSmartContract') {
        // 加入白名单
        let white = {
          id: IdGenerator.numeric(24),
          address: this.data.parameter.value.contract_address,
          domain: this.prompt.domain,
          createTime: this.$moment().format('x')
        }
        debugger
        this.addWhiteList(white)
      }
      this.prompt.responder({ accepted: true, transaction })
      NotificationService.close()
    },
    addressFromHex (address) {
      return utils.transformAddress(address)
    },
    getAmount () {
      let amount = 0
      let cname = 'TRX'
      if (this.data.type === 'TransferContract') {
        amount = utils.getTokenAmount(this.data.parameter.value.amount || 0)
      } else if (this.data.type === 'TransferAssetContract') {
        amount = this.data.parameter.value.amount || 0
        cname = utils.toUtf8(this.data.parameter.value.asset_name || '')
      } else if (this.data.type === 'TriggerSmartContract') {
        amount = utils.getTokenAmount(this.data.parameter.value.call_value || 0)
      }
      return amount + '  ' + cname
    },
    getFormatValue (key, value) {
      switch (key) {
        case 'owner_address':
        case 'to_address':
        case 'contract_address':
          value = this.addressFromHex(value)
          break
        case 'asset_name':
          value = utils.toUtf8(value)
          break
        default:
          break
      }
      // TransferContract
      if (this.data.type === 'TransferContract' && key === 'amount') {
        value = utils.getTokenAmount(value) + ' TRX'
      }
      // TransferAssetContract
      // TriggerSmartContract
      if (this.data.type === 'TriggerSmartContract' && key === 'call_value') {
        value = utils.getTokenAmount(value) + ' TRX'
      }

      return key + ' : ' + value
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/prompt";
  .join-option{
    position: absolute;
    bottom: 20px;
  }
</style>
