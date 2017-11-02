<template>
  <section class="ui row">
    <div class="ten wide column">
      <ContactForm/>
    </div>
    <div class="six wide column">
      <SideBar/>
    </div>
  </section>
</template>

<script>
import ContactForm from '~/components/contact/form.vue'
import SideBar from '~/components/contact/sidebar.vue'
export default {
  components: {
    ContactForm,
    SideBar
  }
}
</script>

<style lang="less">
</style>
