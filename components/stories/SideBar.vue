<template>
  <div class="ui row">
    <Loading v-if="feed == 'loading'"/>
    <section class="ui sixteen wide column" v-for="story in feed">
      <img v-if="story.images" @click="linkToInstagram(story.link)" class="instagram ui fluid rounded image " :src="story.images.standard_resolution.url">

      <section v-if="story.images" class="ui grid">
        <div class="left floated twelve wide column">
          <small class="ui centered" v-if="story.images">
            <i class="quote left icon"></i> {{story.caption.text}}
          </small>
        </div>
        <div class="right floated right aligned four wide column">
          <small class="ui centered" v-if="story.images">
            <i class="heart icon"></i> {{story.likes.data.length}}
          </small>
        </div>
      </section>
      <div class="ui divider"></div>
    </section>
    <section class="ui centered grid">
      <a href="https://www.instagram.com/mezcalbardho/" class="ui tiny branded-accent button">Powered by <i class="instagram icon"></i></a>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/utils/Loading.vue'
export default {
  data () {
    return {
      feed: 'loading'
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.getFeed()
  },
  methods: {
    getFeed: function () {
      var api = 'https://2oby6oykv0.execute-api.us-west-2.amazonaws.com/bardho/instagram'
      axios.get(api).then((response) => {
        this.feed = response.data.items
      })
    },
    linkToInstagram: function (IGlink) {
      window.location = IGlink
    }
  }
}
</script>

<style lang="less" scoped>
.centered{
  text-align: center !important;
}
.instagram{
  cursor: pointer !important;
}
.button{
  margin-top: 10px;
}
</style>
