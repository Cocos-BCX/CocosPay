<template>
  <section>
    <setting-navigation :title="$t('settings.network')" />
    <section class="app-container bg-gray pt20" id="network">
      <section class="network-card">
        <section class="title">{{$t('label.mainNetwork')}}</section>
        <section>
          <el-form :model="mainNet" label-position="left" label-width="95px" class="small-from">
            <el-form-item label="Full Node" prop="fullNodeUrl">
              <el-input class="no-border" v-model="mainNet.fullNodeUrl" size="small"></el-input>
            </el-form-item>
            <el-form-item label="Solidity Node" prop="solidityUrl">
              <el-input class="no-border" v-model="mainNet.solidityUrl" size="small"></el-input>
            </el-form-item>
            <el-form-item label="Event Grid" prop="eventGridUrl">
              <el-input class="no-border" v-model="mainNet.eventGridUrl" size="small"></el-input>
            </el-form-item>
            <section class="btn-group">
              <el-button class="gradual-button" style="margin-right: 20px;" @click="resetNetwork('main')">{{$t('button.reset')}}</el-button>
              <el-button type="primary" @click="saveNetwork('main')">{{$t('button.save')}}</el-button>
            </section>
          </el-form>
        </section>
      </section>
      <section class="network-card mt20">
        <section class="title">{{$t('label.testNetwork')}}</section>
        <el-form :model="testNet" label-position="left" label-width="95px" class="small-from">
          <el-form-item label="Full Node" prop="fullNodeUrl">
            <el-input class="no-border" v-model="testNet.fullNodeUrl" size="small"></el-input>
          </el-form-item>
          <el-form-item label="Solidity Node" prop="solidityUrl">
            <el-input class="no-border" v-model="testNet.solidityUrl" size="small"></el-input>
          </el-form-item>
          <el-form-item label="Event Grid" prop="eventGridUrl">
            <el-input class="no-border" v-model="testNet.eventGridUrl" size="small"></el-input>
          </el-form-item>
          <section class="btn-group">
            <el-button class="gradual-button" style="margin-right: 20px;" @click="resetNetwork('test')">{{$t('button.reset')}}</el-button>
            <el-button type="primary" @click="saveNetwork('test')">{{$t('button.save')}}</el-button>
          </section>
        </el-form>
      </section>
      <section class="network-card mt20">
        <section class="title">{{$t('label.customNet')}}</section>
        <el-form :model="customNet" label-position="left" label-width="95px" class="small-from">
          <el-form-item label="Full Node" prop="fullNodeUrl">
            <el-input class="no-border" v-model="customNet.fullNodeUrl" size="small"></el-input>
          </el-form-item>
          <el-form-item label="Solidity Node" prop="solidityUrl">
            <el-input class="no-border" v-model="customNet.solidityUrl" size="small"></el-input>
          </el-form-item>
          <el-form-item label="Event Grid" prop="eventGridUrl">
            <el-input class="no-border" v-model="customNet.eventGridUrl" size="small"></el-input>
          </el-form-item>
          <section class="btn-group">
            <el-button class="gradual-button" style="margin-right: 20px;" @click="resetNetwork('custom')">{{$t('button.reset')}}</el-button>
            <el-button type="primary" @click="saveNetwork('custom')">{{$t('button.save')}}</el-button>
          </section>
        </el-form>
      </section>
    </section>
  </section>
</template>
<script>
import SettingNavigation from '../../components/setting-navigation'
import defaultNetworks from '../../config/networks'
import { mapMutations, mapState } from 'vuex'
import PerfectScrollbar from 'perfect-scrollbar'
export default {
  components: {
    SettingNavigation
  },
  data () {
    return {
      ps: null,
      mainNet: {
        type: 'MainNet',
        fullNodeUrl: '',
        solidityUrl: '',
        eventGridUrl: ''
      },
      testNet: {
        type: 'TestNet',
        fullNodeUrl: '',
        solidityUrl: '',
        eventGridUrl: ''
      },
      customNet: {
        type: 'PrivateNet',
        fullNodeUrl: '',
        solidityUrl: '',
        eventGridUrl: ''
      }
    }
  },
  computed: {
    ...mapState([
      'currentNetwork',
      'networks'
    ])
  },
  created () {
    this.loadNetwork()
  },
  mounted () {
    this.ps = new PerfectScrollbar('#network', {
      minScrollbarLength: 40,
      maxScrollbarLength: 40
    })
  },
  methods: {
    ...mapMutations([
      'updateNetwork',
      'setCurrentNetwork'
    ]),
    loadNetwork () {
      this.mainNet = { ...this.networks.find(ele => ele.type === 'MainNet') }
      this.testNet = { ...this.networks.find(ele => ele.type === 'TestNet') }
      this.customNet = { ...this.networks.find(ele => ele.type === 'PrivateNet') }
    },
    resetNetwork (type) {
      switch (type) {
        case 'main':
          this.mainNet = { ...defaultNetworks.networks.find(ele => ele.type === 'MainNet') }
          break
        case 'test':
          this.testNet = { ...defaultNetworks.networks.find(ele => ele.type === 'TestNet') }
          break
        case 'custom':
          this.customNet = { ...defaultNetworks.networks.find(ele => ele.type === 'PrivateNet') }
          break
      }
    },
    saveNetwork (type) {
      switch (type) {
        case 'main':
          this.updateNetwork(this.mainNet)
          this.updateCurrentNetwork(this.mainNet)
          break
        case 'test':
          this.updateNetwork(this.testNet)
          this.updateCurrentNetwork(this.testNet)
          break
        case 'custom':
          this.updateNetwork(this.customNet)
          this.updateCurrentNetwork(this.customNet)
          break
      }
      this.loadNetwork()
      this.$kalert({
        message: this.$i18n.t('alert.modifySuccess')
      })
    },
    updateCurrentNetwork (network) {
      if (network.type === this.currentNetwork.type) {
        this.setCurrentNetwork(network)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  position: relative;
  height: 540px;
}
.network-card{
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 15px;
  .title{
    line-height: 40px;
  }
  .btn-group{
    position: relative;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    button{
      width: 45%;
    }
  }
}
</style>
