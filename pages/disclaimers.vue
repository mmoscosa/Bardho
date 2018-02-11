<template>
<div class="ui row">
  <div class="three wide column">
    <div class="ui vertical menu">
      <nuxt-link to="/disclaimers?section=cookies" class="ui item" :class="{'active' : section == 'cookies'}" v-lang.utils.disclaimers.menu.cookies></nuxt-link>
      <nuxt-link to="/disclaimers?section=privacy" class="ui item" :class="{'active' : section == 'privacy'}" v-lang.utils.disclaimers.menu.privacy></nuxt-link>
    </div>
  </div>
  <div class="thirteen wide column">
    <Cookies v-if="section == 'cookies'"></Cookies>
    <Privacy v-if="section == 'privacy'"></Privacy>
  </div>
</div>
</template>

<script>
import Cookies from '~/components/disclaimers/cookies.vue'
import Privacy from '~/components/disclaimers/privacy.vue'
export default {
  name: 'DisclaimersMenu',
  data () {
    return {
      section: ''
    }
  },
  components: {
    Cookies: Cookies,
    Privacy: Privacy
  },
  mounted () {
    this.defineActive()
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      this.defineActive(newRoute, oldRoute)
    }
  },
  methods: {
    defineActive (newRoute, oldRoute) {
      this.section = this.$route.query.section
    }
  }
}
</script>

<style lang="css">
</style>
