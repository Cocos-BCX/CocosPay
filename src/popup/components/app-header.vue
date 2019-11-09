<template>
  <header class="header">
    <router-link class="header-logo" to="/">
      <img src="/icons/logo-small.png" alt="Treasure">
    </router-link>
    <div
      class="network"
      v-click-outside="onClickOutside"
      @click="showNetworkDropdown = !showNetworkDropdown"
    >
      <a class="network-toggle">
        <span class="network-icon"></span>
        <span class="network-name">{{ choose.name }}</span>
        <span class="network-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </span>
      </a>
      <div class="network-dropdown" v-show="showNetworkDropdown">
        <a @click="changeNetwork(network)" v-for="(network,index) in nodes" :key="index">
          <span class="network-dropdown-icon">
            <svg
              v-if="network.ws === choose.ws"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              class="icon"
            >
              <path
                d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"
              ></path>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              class="icon"
            >
              <path
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
              ></path>
            </svg>
          </span>
          <span>{{network.name}}</span>
        </a>
      </div>
    </div>
    <div class="setting-icon">
      <img src="/icons/shuaxin.png" alt @click="refreshData">
      <img src="/icons/shezhi2.png" alt @click="goSettings">
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import vClickOutside from "v-click-outside";
import Storage from "../../lib/storage";
import BCX from "bcx-api";

// import '../../lib/bcx.min.js'
export default {
  data() {
    return {
      showNetworkDropdown: false,
      nodes: [],
      choose: ""
    };
  },
  computed: {
    ...mapState(["route", "currentNetwork"])
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mounted() {
    this.nodes = Storage.get("node").concat(
      Storage.get("add_node") ? Storage.get("add_node") : []
    );
    this.choose = Storage.get("choose_node");
  },
  methods: {
    ...mapActions("wallet", ["getAccounts"]),
    ...mapMutations(["setAccountType"]),
    ...mapActions(["nodeLists", "apiConfig", "init", "switchAPINode"]),
    onClickOutside() {
      this.showNetworkDropdown = false;
    },
    changeNetwork(network) {
      if (network.chainId === Storage.get("choose_node").chainId) {
        this.switchAPINode({
          url: network.ws
        }).then(res => {
          if (res.code === 1) {
            this.$kalert({
              message: this.$i18n.t("alert.modifySuccess")
            });
            this.choose = network;
            Storage.set("choose_node", network);
          }
        });
      } else {
        let Node = network;
        this.NewBCX(Node);
        this.init().then(res => {
          if (res.code !== 1) {
            this.$kalert({
              message: this.$i18n.t(`error[${res.code}]`)
            });
            // this.init(this.nodes[0]);
            this.init().then(change => {
              this.switchAPINode({
                url: this.nodes[0].ws
              }).then(change => {
                this.apiConfig(this.nodes[0]);
              });
            });
          } else {
            this.$kalert({
              message: this.$i18n.t("alert.modifySuccess")
            });
            this.choose = network;
          }
        });
      }
    },
    NewBCX(Node) {
      return new BCX({
        default_ws_node: 'ws://123.57.19.148:9049',
        ws_node_list: [
          {
            url: Node.ws,
            name: Node.name
          }
        ],
        networks: [
          {
            core_asset: "COCOS",
            chain_id: Node.chainId
          }
        ],
        faucet_url: Node.url,
        auto_reconnect: false,
        worker: false
      });
    },
    goSettings() {
      this.$router.push({ name: "settings" });
    },
    refreshData() {
      this.$emit("refresh");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../theme/v1/variable";
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid #e6e6e6;
  background-color: $bg-shallow;
}
.setting-icon {
  width: 62px;
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
}
.header-logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 62px;
}

.header-logo img,
.header-logo span {
  display: block;
}

.network {
  position: relative;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  span {
    display: block;
  }
}

a.network-toggle {
  max-width: 170px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  padding: 6px 15px;
  border-radius: 20px;
  cursor: pointer;
}

.network-icon {
  width: 12px;
  height: 12px;
  background: $success-color;
  border-radius: 100%;
}

.icon {
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  width: 1em;
  height: 1em;
}

.network-arrow {
  padding-top: 2px;
}

.network-name {
  flex: 1;
  font-weight: 600;
  color: $color-first;
  padding: 0.1rem 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.network-dropdown {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 40px;
  right: 0;
  border-radius: 8px;
  width: 170px;
  z-index: 99;
  padding: 10px;
}

.network-dropdown a {
  display: flex;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1.25;
  color: #fff;
}

.network-dropdown a:hover,
.network-dropdown a:focus {
  color: $danger-color;
}

.network-dropdown a span {
  display: block;
}

.network-dropdown-icon {
  padding: 3px 8px 0 0;
  font-size: 0.625rem;
}

.dropdown-menu {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: absolute;
  top: 40px;
  right: 10px;
  padding: 0.5rem 0;
  border-radius: 3px;
  min-width: 125px;
}

.dropdown-menu a {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: $color-first;
}

.dropdown-menu a:hover,
.dropdown-menu a:focus {
  color: $danger-color;
}

.header-tabs {
  display: flex;
  width: 100%;
}

.header-tabs a {
  display: block;
  flex: 1;
  padding: 0.625rem;
  color: $color-first;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: center;
}

.header-tabs a.active {
  color: $danger-color;
  border-bottom: 2px solid $danger-color;
}

.header-tabs a:hover,
.header-tabs a:focus {
  color: $danger-color;
}
</style>

