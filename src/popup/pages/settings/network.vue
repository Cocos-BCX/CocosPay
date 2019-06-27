<template>
  <section>
    <setting-navigation :title="$t('settings.network')"/>
    <section class="app-container bg-gray pt20" id="network">
      <section v-if="!edit && editNode.length" class="networks">
        <section class="list-title">
          <section class="title">{{$t('label.customNet')}}</section>
          <i @click="addNode()" class="el-icon-circle-plus"></i>
        </section>
        <section class="editNode" id="editNode" v-for="(item,index) in editNode" :key="index">
          <section class="content">
            <span class="domain">Name: {{item.name}}</span>
            <span class="address">Ws: {{item.ws}}</span>
            <small>ChainId: {{item.chainId}}</small>
          </section>
          <section class="remove">
            <i @click="changeNode(index)" class="el-icon-edit"></i>
            <i @click="deleteNode(index)" class="el-icon-delete"></i>
          </section>
        </section>
      </section>
      <section class="network-card" v-else>
        <section class="title">{{$t('label.customNet')}}</section>
        <el-form :model="formData" label-position="left" label-width="95px" class="small-from">
          <el-form-item label="Ws">
            <el-input
              class="no-border"
              v-model="formData.ws"
              :placeholder="$t('placeholder.input') + ' Ws'"
              size="small"
            ></el-input>
          </el-form-item>
          <el-form-item label="FaucetUrl">
            <el-input
              class="face"
              v-model="formData.faucet_url"
              :placeholder="$t('placeholder.input') + ' FaucetUrl'"
              size="small"
            ></el-input>
          </el-form-item>
          <el-form-item label="ChainId">
            <el-input
              class="no-border"
              v-model="formData.chainId"
              :placeholder="$t('placeholder.input') + ' ChainId'"
              size="small"
            ></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input
              class="no-border"
              v-model="formData.name"
              :placeholder="$t('placeholder.input') + ' Name'"
              size="small"
            ></el-input>
          </el-form-item>
          <section class="btn-group">
            <el-button
              class="gradual-button"
              style="margin-right: 20px;"
              @click="resetBack()"
            >{{$t('button.back')}}</el-button>
            <el-button type="primary" @click="saveNetwork()">{{$t('button.sure')}}</el-button>
          </section>
        </el-form>
      </section>
    </section>
  </section>
</template>
<script>
import SettingNavigation from "../../components/setting-navigation";
import { mapMutations, mapState } from "vuex";
import PerfectScrollbar from "perfect-scrollbar";
import Storage from "../../utils/storage";
import { uuid } from "../../utils/tools";
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
      node: "",
      choose: "",
      formData: {
        ws: "",
        faucet_url: "",
        chainId: "",
        name: "",
        type: 2
      },
      add: true,
      edit: false,
      editNode: []
    };
  },
  computed: {
    ...mapState(["currentNetwork", "networks"])
  },
  destroyed() {
    this.edit = false;
  },
  mounted() {
    this.editNode = Storage.get("add_node") || [];
    console.log(this.editNode);
    this.network = new PerfectScrollbar("#network", {
      minScrollbarLength: 40,
      maxScrollbarLength: 40
    });
    this.choose = Storage.get("choose_node").ws;
  },
  methods: {
    ...mapMutations(["updateNetwork", "setCurrentNetwork"]),
    resetBack() {
      this.edit = false;
      if (!this.editNode.length) {
        this.$router.go(-1);
      }
    },
    deleteNode(index) {
      let editNode = Storage.get("add_node");
      editNode.splice(index, 1);
      Storage.set("add_node", editNode);
      this.editNode = editNode;
      if (!this.editNode.length) {
        this.edit = false;
        this.formData = {
          ws: "",
          faucet_url: "",
          chainId: "",
          name: "",
          type: 2
        };
      }
    },
    changeNode(index) {
      this.edit = true;
      let editNode = Storage.get("add_node");
      this.formData = Storage.get("add_node")[index];
      this.edit = true;
    },
    addNode() {
      this.edit = true;
      this.formData = {
        ws: "",
        faucet_url: "",
        chainId: "",
        name: "",
        type: 2
      };
    },
    saveNetwork() {
      if (
        !this.formData.ws ||
        !this.formData.faucet_url ||
        !this.formData.chainId ||
        !this.formData.name
      ) {
        this.$kalert({
          message: this.$i18n.t("error[101]")
        });
        return;
      }
      if (this.formData.id) {
        let editNode = Storage.get("add_node");
        editNode.forEach((item, index) => {
          if (item.id === this.formData.id) {
            editNode[index] = this.formData;
            Storage.set("add_node", editNode);
          }
        });
        this.editNode = editNode;
        this.edit = false;
      } else {
        this.formData.type = 2;
        this.formData.id = uuid();
        let editNode = Storage.get("add_node") ? Storage.get("add_node") : [];
        editNode.push(this.formData);
        Storage.set("add_node", editNode);
        this.editNode = editNode;
        this.edit = false;
        this.$kalert({
          message: this.$i18n.t("alert.setSuccess")
        });
        // this.$router.push({ name: "home" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";

.app-container {
  position: relative;
}

.networks {
  height: 540px;
  position: relative;
}

.list-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  i {
    font-size: 24px;
    color: #60b6c5;
    cursor: pointer;
  }
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
.editNode {
  display: flex;
  justify-content: space-between;
  height: 90px;
  margin-top: 10px;
  background-color: #e6e6e6;
  padding: 5px 10px;
  border-radius: 5px;
  .remove {
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    i {
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .address {
      font-size: 14px;
      color: $color-first;
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .domain {
      font-size: 16px;
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    small {
      font-size: 12px;
      color: $color-second;
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
