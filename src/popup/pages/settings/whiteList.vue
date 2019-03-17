<template>
  <section>
    <setting-navigation :title="$t('settings.whiteList')" />
    <section class="app-container" id="whiteList">
      <section v-if="whiteList.length > 0">
        <section class="item" v-for="(item, index) in whiteList" :data="item" :key="index">
          <section class="content">
            <span class="domain">{{item.domain}}</span>
            <span class="address">{{addressFromHex(item.address)}}</span>
            <small>{{item.createTime * 1 | moment('YYYY.MM.DD HH:mm')}}</small>
          </section>
          <span class="remove" @click="removeWhiteList(item)">X</span>
        </section>
      </section>
      <p class="no-white" v-else>{{$t('message.noWhiteList')}}</p>
    </section>
  </section>
</template>
<script>
import SettingNavigation from '../../components/setting-navigation'
import PerfectScrollbar from 'perfect-scrollbar'
import { mapState, mapMutations } from 'vuex'
import utils from '../../../lib/utils'
export default {
  components: {
    SettingNavigation
  },
  computed: {
    ...mapState('wallet', [
      'whiteList'
    ])
  },
  data () {
    return {
      ps: null
    }
  },
  mounted () {
    this.ps = new PerfectScrollbar('#whiteList', {
      minScrollbarLength: 40,
      maxScrollbarLength: 40
    })
  },
  methods: {
    ...mapMutations('wallet', [
      'removeWhiteList'
    ]),
    addressFromHex (address) {
      return utils.transformAddress(address)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../theme/v1/variable";
  .app-container{
    position: relative;
    height: 540px;
  }
  .no-white{
    font-size: 14px;
    color: $color-second;
    text-align: center;
    padding: 10px 0;
  }
  .item{
    display: flex;
    justify-content: space-between;
    height: 90px;
    margin-top: 10px;
    background-color: #e6e6e6;
    padding: 5px 10px;
    border-radius: 5px;
    .remove{
      font-size: 16px;
      cursor: pointer;
      display: flex;
      width: 30px;
      align-items: center;
      justify-content: center;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .address{
        font-size: 14px;
        color: $color-first;
      }
      .domain{
        font-size: 16px;
      }
      small{
        font-size: 12px;
        color: $color-second;
      }
    }
  }
</style>
