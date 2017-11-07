<template>
  <section class="ui row">
    <div class="eleven wide column">
      <ContactForm/>
    </div>
    <div class="five wide column">
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
