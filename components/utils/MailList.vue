<template lang="html">
  <section>
    <div class="ui form">
  <div class="three fields">
    <div class="required field">
      <label v-lang.forms.labels.email></label>
      <input type="text" placeholder="">
  </div>
    <div class="required field">
      <label v-lang.forms.labels.name></label>
      <input type="text" placeholder="">
    </div>
    <div class="field">
      <label v-lang.forms.labels.referal></label>
      <input type="text" placeholder="">
    </div>
  </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'MailList',
  data () {
    return {
      referal: ''
    }
  },
  mounted () {
    this.setUSserType()
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      this.setUSserType(newRoute, oldRoute)
    }
  },
  route: {
    canReuse: true
  },
  methods: {
    setUSserType (newRoute, oldRoute) {
      if (
        this.$route.params.id !== 'espadin' ||
        this.$route.params.id !== 'tobala' ||
        this.$route.params.id !== 'special'
      ) {
        this.referal = this.$route.params.id
      }
    }
  }
}
</script>

<style lang="less">

</style>
