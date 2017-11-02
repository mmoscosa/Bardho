<template>
  <div class="ui container" id="main">
    <BardhoMenu/>
    <div class="ui stackable grid" id="main-content">
      <nuxt/>
    </div>
    <BardhoFooter/>
  </div>
</template>

<script>
import BardhoMenu from '~/components/Menu.vue'
import BardhoFooter from '~/components/Footer.vue'

export default {
  components: {
    BardhoMenu,
    BardhoFooter
  }
}
</script>

<style lang="less">
@brandColor: #f57450;
@font-face {
  font-family: Gidole;
  src: url("~/assets/gidole/Gidole-Regular.otf") format("opentype");
}

html, body, p, h1, h2, h3, h4, h5{
  font-family: 'Gidole';
}

body, p{
  font-size: 12.5pt;
}
a, button{
  &.branded-accent{
    background-color: @brandColor !important;
    color: white !important;
  }
}

.ui.label{
  &.branded-accent{
    background-color: @brandColor !important;
    color: white !important;
  }
}

.ui.branded-accent.label, .ui.branded-accent.labels .label {
    background-color: @brandColor!important;
    border-color: @brandColor!important;
    color: #fff!important;
}

#main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main-content {
  flex: 1;
}
</style>
