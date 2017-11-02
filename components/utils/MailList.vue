<template lang="html">

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
