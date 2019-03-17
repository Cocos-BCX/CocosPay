<template>
  <section>
    <logo-header />
    <h2 class="title">{{$t('title.agreement')}}</h2>
    <section class="app-container">
      <div class="wrapper" id="agreement">
        <p v-html="agreementContent"></p>
      </div>
      <el-button class="full-btn mt20" type="primary" @click="agreement">{{$t('button.agree')}}</el-button>
    </section>
  </section>
</template>

<script>
import agreement from '../../files/agreement'
import agreementEn from '../../files/agreement_en'
import PerfectScrollbar from 'perfect-scrollbar'
import { createNamespacedHelpers } from 'vuex'
import LogoHeader from '../../components/logo-header'
const { mapMutations, mapActions } = createNamespacedHelpers('wallet')
export default {
  components: {
    LogoHeader
  },
  computed: {
    agreementContent () {
      return this.$store.state.curLng === 'en' ? agreementEn.content : agreement.content
    }
  },
  data () {
    return {
      ps: null,
      password: this.$route.params.password
    }
  },
  mounted () {
    this.ps = new PerfectScrollbar('#agreement', {
      minScrollbarLength: 40,
      maxScrollbarLength: 40
    })
  },
  methods: {
    ...mapMutations([
      'setPassword'
    ]),
    ...mapActions([
      'setSeed'
    ]),
    agreement () {
      this.setPassword(this.password)
      this.setSeed(this.password).then(() => {
        this.$router.push({ name: 'initAccount' })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../theme/v1/variable";
.title{
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  font-weight: normal;
}
.wrapper{
  position: relative;
  height: 320px;
  background-color: $bg-shallow;
  p{
    padding: 0 10px;
  }
}
</style>
