<template>
    <section class="ui row" id="products">
        <div class="sixteen wide column">
            <h1 v-lang.products.title></h1>
            <div>
                <p v-lang.products.blurb></p>
            </div>
        </div>
        <div class="ui row">
          <div class="ui divider"></div>

            <div class="ui three stackable cards">
                <div class="computer only ui card">
                    <Soon />
                </div>
                <div class="ui card">
                    <nuxt-link to="/products/espadin"  class="image">
                        <img src="~/assets/espadin.png">
                    </nuxt-link>
                    <nuxt-link to="/products/espadin" class="content">
                        <div class="header" v-lang.products.variants.espadin.name></div>
                        <div class="meta">
                            <span class="date">
                                <span v-lang.products.variants.espadin.alcohol></span>
                            </span>
                        </div>
                        <div class="description" v-lang.products.variants.espadin.description></div>
                    </nuxt-link>
                    <nuxt-link to="/products/espadin" class="extra content">
                        <i class="browser icon"></i>
                        v0.1
                        <span class="right floated" v-lang.products.variants.espadin.price></span>
                    </nuxt-link>
                </div>
                <div class="ui card">
                  <Soon/>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import Soon from '~/components/utils/Soon.vue'
export default {
  components: {
    Soon
  }
}
</script>

<style lang="less">
#products{
    .products{
        h2{
            color: rgba(0,0,0,.87);
        }
        &.espadin{}
            &.tobala{display: none;}
            &.special{display: none;}
        }
        img{
            &#tobala{
                opacity: 0.1;
            }
            &#special{
                opacity: 0.3;
            }
        }
    }
</style>
