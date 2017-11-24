<template>
  <section class="ui row">
    <div class="right floated right aligned ten wide column" id="title">
      <span class="mezcal">Mezcal</span>
      <h1>Bard<span class="h">h</span>o <span v-lang.index.slogan id="slogan"></span></h1>
      <div class="ui divider"></div>
      <div class="ui piled segment">
        <p v-lang.index.blurb></p>
      </div>
      <div class="ui grid">
        <div class="tablet mobile only sixteen wide column">
          <BottleSVG/>
        </div>
        <MailList/>
        </div>
      </div>
  </div>
  <div class="computer only sixteen wide column bottle" id="base">
    <BottleSVG/>
  </div>
</section>
</template>

<script>
import BottleSVG from '~/components/Bottle.vue'
import MailList from '~/components/utils/MailList'
export default {
  components: {
    MailList,
    BottleSVG
  }
}
</script>

<style lang="less">
@brandColor: #f57450;
span{&.h{color: @brandColor;}}
span{
  &.mezcal{
    font-size: 13vw;
    line-height: 50pt;
    text-transform: uppercase;
    font-weight: bolder;
    position: absolute;
    margin-left: -43vw;
    z-index: -1;
    color: #dddddd;
  }
}
.bottle{
  padding-top: 200px;
  margin-bottom: -100px !important;
}
.ui.button.basic{
  &.branded{
    box-shadow: 0 0 0 1px @brandColor inset !important;
    color: @brandColor !important;
  }
}
#title{
  height: 10px;
  padding-bottom: 10px;
  margin-bottom: -50px;
  margin-top: 50px;
  h1{
    font-size: 8vw;
    line-height: 7vw;
    text-transform: uppercase;
    width: 100%;
    span{
      &#slogan{
        color: black;
        display: block;
        font-size: 2vw;
        margin-top: -2vw;
        padding-right: 10px;
      }
    }
  }
}
#base{
  position: fixed;
  height: 48vw;
  bottom: 100px;
  z-index: -1;
}
</style>
