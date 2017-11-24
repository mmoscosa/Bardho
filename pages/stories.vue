<template>
  <div class="row">
    <div class="ui twelve wide column">
      <h1 v-lang.stories.title></h1>
      <div class="ui divider"></div>
      <MainSection/>
      <section class="ui centered grid">
        <a href="https://medium.com/@mezcalbardho" class="ui tiny branded-accent button">Powered by <i class="medium icon"></i></a>
      </section>
    </div>
    <div class="ui four wide column">
      <h1 v-lang.stories.sideTitle></h1>
      <br>
      <SideBar/>
    </div>
  </div>
</template>

<script>
  import MainSection from '~/components/stories/Main.vue'
  import SideBar from '~/components/stories/SideBar.vue'
  export default {
    components: {
      MainSection,
      SideBar
    }
  }
</script>

<style>
</style>
