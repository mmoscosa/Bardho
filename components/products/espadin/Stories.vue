<template>
  <div>
    <section v-for="story in stories" v-if="stories">
      <Loading  v-if="loading == true"/>
      <section>
        <h2>{{story.title}}</h2>
        <section v-if="story.virtuals" class="ui grid">
          <div class="left floated six wide column">
            <span class="readingTimeSpan">{{story.virtuals.readingTime | round }} <span v-lang.stories.readingTime></span></span>
          </div>
          <div class="right floated right aligned six wide column">
            <div class="ui branded-accent labels">
              <div class="ui label" v-for="tag in story.virtuals.tags">
                {{tag.name}}
              </div>
            </div>
          </div>
        </section>
        <p v-if="!story.previewContent">{{story.previewContent}}</p>
        <p v-if="story.previewContent">
          {{story.previewContent.bodyModel.paragraphs[1].text}}
          <small>
            <a @click="linkToMedium(story.uniqueSlug)" class="readmore" v-lang.stories.readMore></a>
          </small>
        </p>
        <img @click="linkToMedium(story.uniqueSlug)" v-if="story.virtuals" :src="'//cdn-images-1.medium.com/max/800/'+story.virtuals.previewImage.imageId" alt="" class="ui fluid rounded image">
      </section>
      <div class="ui divider"></div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/utils/Loading.vue'
export default {
  data () {
    return {
      stories: [],
      loading: true
    }
  },
  filters: {
    round: function (value, decimals) {
      if (!value) {
        value = 0
      }
      if (!decimals) {
        decimals = 0
      }
      value = Math.ceil(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
      return value
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
      var api = 'https://2oby6oykv0.execute-api.us-west-2.amazonaws.com/bardho/medium'
      axios.get(api).then((response) => {
        this.getEspadin(response.data.payload.references.Post)
      })
    },
    linkToMedium: function (slug) {
      window.location = '//medium.com/@mezcalbardho/' + slug
    },
    getEspadin: function (object) {
      let storiesObject = []
      for (var index in object) {
        if (object.hasOwnProperty(index)) {
          var attr = object[index]
          for (var tagIndex in attr.virtuals.tags) {
            if (attr.virtuals.tags.hasOwnProperty(tagIndex)) {
              var tag = attr.virtuals.tags[tagIndex]
              if (tag.slug === 'espadin') {
                storiesObject.push(object[index])
              }
            }
          }
        }
      }
      this.stories = storiesObject
      this.loading = false
    }
  }
}
</script>
<style lang="less" scoped>
a {
  &.readmore{
    cursor: pointer;
  }
}
.readingTimeSpan{
  font-style: italic;
  color: #ccc;
}
.button{
  margin-top: 10px;
}
</style>
