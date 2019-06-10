<template>
  <section>
    <setting-navigation :title="$t('settings.network')"/>
    <section class="app-container bg-gray pt20" id="network">
      <section class="network-card">
        <section class="title">{{$t('label.customNet')}}</section>
        <el-form :model="formData" label-position="left" label-width="95px" class="small-from">
          <el-form-item label="Ws" prop="fullNodeUrl">
            <el-input class="no-border" v-model="formData.ws" size="small"></el-input>
          </el-form-item>
          <el-form-item label="FaucetUrl" prop="solidityUrl">
            <el-input class="face" v-model="formData.url" size="small"></el-input>
          </el-form-item>
          <el-form-item label="ChainId" prop="eventGridUrl">
            <el-input class="no-border" v-model="formData.chainId" size="small"></el-input>
          </el-form-item>
          <el-form-item label="Name" prop="eventGridUrl">
            <el-input class="no-border" v-model="formData.name" size="small"></el-input>
          </el-form-item>
          <section class="btn-group">
            <el-button
              class="gradual-button"
              style="margin-right: 20px;"
              @click="resetNetwork()"
            >{{$t('button.reset')}}</el-button>
            <el-button type="primary" @click="saveNetwork()">{{$t('button.save')}}</el-button>
          </section>
        </el-form>
      </section>
    </section>
  </section>
</template>
<script>
import SettingNavigation from "../../components/setting-navigation";
import { mapMutations, mapState } from "vuex";
import { GetBCXWithState } from "../../utils/bcx";
import PerfectScrollbar from "perfect-scrollbar";
import Storage from "../../utils/storage";
import BCX from "bcxjs-api";
export default {
  components: {
    SettingNavigation
  },
  data() {
    return {
      ps: null,
      customNet: {
        type: "PrivateNet",
        fullNodeUrl: "",
        solidityUrl: "",
        eventGridUrl: ""
      },
      nodes: [],
      node: "",
      choose: "",
      formData: {
        ws: "",
        url: "",
        chainId: "",
        name: "",
        type: 2
      },
      add: true
    };
  },
  computed: {
    ...mapState(["currentNetwork", "networks"])
  },
  created() {
    // this.loadNetwork();
  },
  mounted() {
    this.ps = new PerfectScrollbar("#network", {
      minScrollbarLength: 40,
      maxScrollbarLength: 40
    });
    this.nodes = Storage.get("node").concat(
      Storage.get("add_node") ? Storage.get("add_node") : []
    );
    this.choose = Storage.get("choose_node").ws;
  },
  methods: {
    ...mapMutations(["updateNetwork", "setCurrentNetwork"]),
    resetNetwork(type) {
      this.formData = {
        ws: "",
        url: "",
        chainId: "",
        name: "",
        type: 2
      };
    },
    saveNetwork() {
      if (
        !this.formData.ws ||
        !this.formData.url ||
        !this.formData.chainId ||
        !this.formData.name
      ) {
        this.$kalert({
          message: this.$i18n.t("error[101]")
        });
        return
      }
      this.formData.type = 2;
      let add_node = Storage.get("add_node") ? Storage.get("add_node") : [];
      add_node.push(this.formData);
      Storage.set("add_node", add_node);
      this.nodes = Storage.get("node").concat(
        Storage.get("add_node") ? Storage.get("add_node") : []
      );
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  height: 540px;
}
.network-card {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 15px;
  .title {
    line-height: 40px;
  }
  .btn-group {
    position: relative;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    button {
      width: 45%;
    }
  }
}
</style>
