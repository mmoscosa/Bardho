<template>
  <div class="ui row">
    <section class="ui sixteen wide column" v-for="photo in photos">
      <section class="ui grid">
        <img @click="linkToInstagram(photo.link)" class="instagram ui fluid rounded image " :src="photo.images[0].source">

        <div class="left floated sixteen wide column">
          <small class="ui centered">
            <i class="quote left icon"></i> {{photo.name}}
          </small>
        </div>
      </section>
      <div class="ui divider"></div>
    </section>
    <section class="ui centered grid">
      <a href="http://mmoscosa.com/2hsxaLE" class="ui tiny branded-accent button">Powered by <i class="facebook icon"></i></a>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/utils/Loading.vue'
export default {
  data () {
    return {
      photos: []
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.getPhotos()
  },
  methods: {
    getPhotos: function () {
      var api = 'https://2oby6oykv0.execute-api.us-west-2.amazonaws.com/bardho/fbgraph'
      axios.post(api, {
        query: '788456524677937?fields=photos{link,images,name}'
      }).then((response) => {
        if (response) {
          this.photos = response.data.photos.data
        }
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
  height: 100% !important;
}
.button{
  margin-top: 10px;
}
</style>
