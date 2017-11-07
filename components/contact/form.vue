<template>
  <div>
    <h1 v-lang.contact.title></h1>
    <div class="ui divider"></div>
    <div class="ui stacked segment">
      <p v-lang.contact.blurb></p>
    </div>
    <form class="ui form" name="contact" netlify-honeypot="bot-field"  netlify>
      <p class="hidden">
        <label>Don’t fill this out: <input name="bot-field" v-model="cForm.honey"></label>
      </p>
      <div class="field">
        <label v-lang.contact.form.name></label>
        <input type="text" name="name" v-model="cForm.name">
      </div>
      <div class="field">
        <label v-lang.contact.form.mail></label>
        <input type="email" name="email" v-model="cForm.email">
      </div>
      <div class="field">
        <label v-lang.contact.form.message></label>
        <textarea type="textarea" name="comment" v-model="cForm.message"></textarea>
      </div>
      <div class="ui basic wide button" @click="contact()" v-lang.contact.form.button></div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cForm: []
    }
  },
  methods: {
    contact: function () {
      var api = 'https://2oby6oykv0.execute-api.us-west-2.amazonaws.com/bardho/mailing/contact'
      if (!this.cForm.honey && this.cForm.name && this.cForm.email && this.cForm.message) {
        axios.post(api, {
          'from': {
            'name': this.cForm.name,
            'email': this.cForm.email
          },
          'to': {
            'name': 'Mezcal Bardho',
            'email': 'contacto@bardho.com'
          },
          'subject': 'Forma de Contacto',
          'message': this.cForm.message,
          'messageHtml': this.cForm.message
        }).then((response) => {
          console.log(response)
        })
      } else {
        alert('Check your fields')
      }
    }
  }
}
</script>

<style lang="less">
  .hidden{
    display: none;
  }
</style>
