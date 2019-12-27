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
            <!-- <i @click="changeNode(index)" class="el-icon-edit"></i> -->
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
import { mapMutations, mapState, mapActions } from "vuex";
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
    
    this.formData.ws = ""
    this.formData.faucet_url = ""
    this.formData.chainId = ""
    this.formData.name = ""
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
    ...mapActions(["addAPINode", "lookupWSNodeList", "deleteAPINode"]),
    resetBack() {
      this.edit = false;
      if (!this.editNode.length) {
        this.$router.go(-1);
      }
    },
    deleteNode(index) {
      let _this = this
      let editNode = Storage.get("add_node");
      _this.deleteAPINode(editNode[index].ws).then( deleteAPINodeRes => {
        if (deleteAPINodeRes.code == 1) {
          editNode.splice(index, 1);
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
          Storage.set("add_node", editNode);
          _this.editNode = editNode;
          _this.$kalert({
            message: "删除成功"
          });
        } else {
          
          _this.$kalert({
            message: "删除失败"
          });
        }
        _this.lookupWSNodeList().then( lookupWSNodeListRes => {
          console.log("lookupWSNodeListRes")
          console.log(lookupWSNodeListRes)
        })
      })
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
      let _this = this
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
      console.log(this.formData)
      // 2019-12-23 新增
      let nodes = Storage.get("node")
      let repeatNode = nodes.filter(item => {
        return item.ws == _this.formData.ws
      })
      if (repeatNode.length > 0) {
        this.$kalert({
          message: this.$i18n.t("error[140]")
        });
        return false
      }
      // 2019-12-23 新增完毕
      this.addAPINode({
          name: _this.formData.name,
          url: _this.formData.ws
      }).then( res => {
        console.log("****addAPINode*****")
        console.log(res)
        if (res.code == 1) {
          // this.$kalert({
          //   message: this.$i18n.t("alert.setSuccess")
          // });
          let newNode = res.data[_this.formData.ws]
          console.log("newNode")
          console.log(newNode)
          if (newNode.ping == 0) {
            console.log("=delete=")
            _this.deleteAPINode(_this.formData.ws).then( deleteAPINodeRes => {
              console.log("deleteAPINodeRes")
              console.log(deleteAPINodeRes)
              
              _this.$kalert({
                message: "该Ws无效"
              });
              _this.lookupWSNodeList().then( lookupWSNodeListRes => {
                console.log("lookupWSNodeListRes")
                console.log(lookupWSNodeListRes)
              })
            })
            // _this.deleteNode()
          } else {
            if (_this.formData.id) {
              let editNode = Storage.get("add_node");
              editNode.forEach((item, index) => {
                if (item.id === _this.formData.id) {
                  editNode[index] = _this.formData;
                  Storage.set("add_node", editNode);
                }
              });
              _this.editNode = editNode;
              _this.edit = false;
            } else {
              _this.formData.type = 2;
              _this.formData.id = uuid();
              let editNode = Storage.get("add_node") ? Storage.get("add_node") : [];
              editNode.push(_this.formData);
              Storage.set("add_node", editNode);
              _this.editNode = editNode;
              _this.edit = false;
              _this.$kalert({
                message: _this.$i18n.t("alert.setSuccess")
              });
              // this.$router.push({ name: "home" });
            }
          }
          _this.lookupWSNodeList().then( lookupWSNodeListRes => {
            console.log("lookupWSNodeListRes")
            console.log(lookupWSNodeListRes)
          })


        } else {
          if (res.message.indexOf("Node address must start with ws:// or wss://") > -1) {
            this.$kalert({
              message: this.$i18n.t("error[139]")
            });
          } else if (res.message.indexOf("API server node address already exists") > -1) {
            this.$kalert({
              message: this.$i18n.t("error[140]")
            });
          } else {
            this.$kalert({
              message: this.$i18n.t("error[0]")
            });
          }
          
        }
      })

      // 2019-12-23  注释
      // if (this.formData.id) {
      //   let editNode = Storage.get("add_node");
      //   editNode.forEach((item, index) => {
      //     if (item.id === this.formData.id) {
      //       editNode[index] = this.formData;
      //       Storage.set("add_node", editNode);
      //     }
      //   });
      //   this.editNode = editNode;
      //   this.edit = false;
      // } else {
      //   this.formData.type = 2;
      //   this.formData.id = uuid();
      //   let editNode = Storage.get("add_node") ? Storage.get("add_node") : [];
      //   editNode.push(this.formData);
      //   Storage.set("add_node", editNode);
      //   this.editNode = editNode;
      //   this.edit = false;
      //   this.$kalert({
      //     message: this.$i18n.t("alert.setSuccess")
      //   });
      //   // this.$router.push({ name: "home" });
      // }
      // 2019-12-23  注释完毕
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
