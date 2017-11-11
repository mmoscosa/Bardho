<template lang="html">
  <viewer class="ui four column grid" :images="photos">
    <div class="column" v-for="photo in photos">
      <img :src="photo.images[0].source" :key="photo.name" class="ui bordered rounded image">
    </div>
  </viewer>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      photos: []
    }
  },
  mounted () {
    this.getPhotos()
  },
  methods: {
    getPhotos: function () {
      var api = 'https://2oby6oykv0.execute-api.us-west-2.amazonaws.com/bardho/fbgraph'
      axios.post(api, {
        query: '785825174941072?fields=photos.limit(4){link,images,name}'
      }).then((response) => {
        if (response) {
          console.log(response)
          this.photos = response.data.photos.data
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
