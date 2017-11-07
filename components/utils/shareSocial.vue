<template lang="html">
  <section>
    <social-sharing :url="shareData.link"
    :title="shareData.title"
    :description="shareData.description"
    :quote="shareData.quote"
    :hashtags="shareData.tags"
    twitter-user="mezcalbardho"
    inline-template>
    <div class="ui six column grid">
      <div class="center aligned column">
        <network network="facebook" class="ui circular facebook icon button">
          <i class="facebook icon"></i>
        </network>
      </div>
      <div class="center aligned column">
        <network network="googleplus" class="ui circular google plus icon button">
          <i class="google plus icon"></i>
        </network>
      </div>
      <div class="center aligned column">
        <network network="linkedin" class="ui circular linkedin icon button">
          <i class="linkedin icon"></i>
        </network>
      </div>
      <div class="center aligned column">
        <network network="twitter" class="ui circular twitter icon button">
          <i class="twitter icon"></i>
        </network>
      </div>
      <div class="center aligned column">
        <network network="telegram" class="ui circular telegram icon button">
          <i class="telegram icon"></i>
        </network>
      </div>
      <div class="center aligned column">
        <network network="whatsapp" class="ui circular whatsapp icon button">
          <i class="whatsapp icon"></i>
        </network>
      </div>
    </div>
  </social-sharing>
</section>
</template>

<script>
export default {
  props: ['shareData']
}
</script>

<style lang="less">
  .circular {
    &.whatsapp {
      background-color: #25d366;
      color: white;
      &:hover{
        background-color: #0CBA4D;
        color: white;
      }
    }
    &.telegram {
      background-color: #0088cc;
      color: white;
      &:hover{
        background-color: #006FB3;
        color: white;
      }
    }
  }
</style>
