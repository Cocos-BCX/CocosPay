<template>
  <section>
    <setting-navigation :title="$t('title.setting')"/>
    <section class="app-container">
      <section class="settings">
        <section class="item" v-for="(link,index) in links" :key="index">
          <router-link v-if="link.route" :to="{ name: link.route }">
            <span class="icon">
              <img :src="`/icons/${link.icon}.png`">
            </span>
            <span class="text">{{link.name}}</span>
          </router-link>
          <a v-if="link.href" target="_blank" :href="link.href">
            <span class="icon">
              <img :src="`/icons/${link.icon}.png`">
            </span>
            <span class="text">{{link.name}}</span>
          </a>
        </section>
        <!-- <section class="item">
          <a @click="lockApp">
            <figure class="icon">
              <img src="/images/time-icon.png">
            </figure>
            <figure class="text">{{$t('settings.lock')}}</figure>
          </a>
        </section>-->
      </section>
    </section>
  </section>
</template>
<script>
import SettingNavigation from "../../components/setting-navigation";
import { createNamespacedHelpers, mapState } from "vuex";
const { mapActions } = createNamespacedHelpers("wallet");
export default {
  components: {
    SettingNavigation
  },
  computed: {
    ...mapState(["accountType"])
  },
  data() {
    return {
      links: [
        {
          href: "https://vote.cocosbcx.net/",
          name: this.$i18n.t("settings.vote"),
          icon: "vote"
        },
        {
          route: "network",
          name: this.$i18n.t("settings.network"),
          icon: "bianji"
        },
        {
          route: "whiteList",
          name: this.$i18n.t("settings.whiteList"),
          icon: "whiteList"
        },
        {
          route: "language",
          name: this.$i18n.t("settings.language"),
          icon: "yuyan"
        },
        {
          route: "monetaryUnit",
          name: this.$i18n.t("settings.monetaryUnit"),
          icon: "monetaryUnit"
        },
        // {
        //   route: "lockSetting",
        //   name: this.$i18n.t("settings.lockSetting"),
        //   icon: "lock"
        // },
        // {
      ]
    };
  },
  methods: {
    ...mapActions(["lock"]),
    lockApp() {
      this.lock().then(() => {
        this.$router.push({ name: "unlock" });
      });
    }
  },
  mounted() {
    if (this.accountType === "account") {
      this.links.push({
        route: "modifyPassword",
        name: this.$i18n.t("settings.modifyPassword"),
        icon: "mima"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.settings {
  padding: 40px 0;
  .item {
    transition: background 0.2s ease;
    a {
      display: inline-block;
      width: 100%;
      padding: 0 65px;
      text-decoration: none;
    }
    &:hover {
      background: #f8f8f8;
    }
    .icon {
      padding: 16px 0;
      display: inline-block;
      font-size: 18px;
      color: $color-base;
      width: 30px;
      text-align: center;
      margin-right: 10px;
      img {
        vertical-align: middle;
        position: relative;
        top: -3px;
      }
    }
    .text {
      padding: 16px 0;
      display: inline-block;
      font-size: 18px;
      color: $color-base;
    }
  }
}
</style>
