<template>
  <div class="ui row">
    <div class="ui eleven wide column">
      <EspadinMain/>
    </div>
    <div class="ui five wide column" id="specs">
      <EspadinSide/>
    </div>
  </div>
</template>

<script>
// Espadin
import EspadinMain from '~/components/products/espadin/Main.vue'
import EspadinSide from '~/components/products/espadin/Side.vue'
export default {
  name: 'products',
  components: {
    EspadinMain,
    EspadinSide
  }
}
</script>

<style lang="less" scoped>
</style>
