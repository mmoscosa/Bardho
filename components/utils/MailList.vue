<template lang="html">
  <section id="maillist">
    <h1>Registrate</h1>
    <p>Si aun no te registras a nuestra lista, te invitamos a que te registres a para recibir las ultimas noticias de Bard<span class="h">h</span>o, asi como acceso exclusivo a preventas.</p>
    <div class="ui form" :class="{loading: isLoading, hidden: isHidden}">
      <p class="hidden">
        <label>Don’t fill this out: <input name="bot-field" v-model="mailingForm.honey"></label>
      </p>
      <div class="three fields">
        <div class="required field">
          <label v-lang.forms.labels.email></label>
          <input type="email" name="email" placeholder="" v-model="mailingForm.email">
        </div>
        <div class="required field">
          <label v-lang.forms.labels.name></label>
          <input type="text" name="name" placeholder="" v-model="mailingForm.name">
        </div>
        <div class="field">
          <label v-lang.forms.labels.referal></label>
          <input type="text" name="referal" placeholder="" v-model="mailingForm.referal">
        </div>
      </div>
      <div class="ui basic fluid button" @click="contact()" id="bardho" v-lang.contact.form.button></div>
    </div>
    <div class="ui row" :class="{hidden: !isHidden}">
      <Thanks :userCode="userCode"/>
    </div>
    <div class="ui grid">
      <div class="ui row">
        <div class="right floated right aligned ten wide column">
          <small>Lo detestamos tanto como tu, prometemos no SPAM 😇</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import shortid from 'shortid'
import Thanks from '~/components/utils/thanksMailingList.vue'
export default {
  data () {
    return {
      mailingForm: [],
      code: '',
      userCode: shortid.generate(),
      isLoading: false,
      isHidden: false
    }
  },
  components: {
    Thanks
  },
  created () {
    this.getReferalCode()
  },
  methods: {
    getReferalCode (newRoute, oldRoute) {
      if (this.$route.query.code) {
        this.code = this.$route.query.code
        this.mailingForm.referal = this.$route.query.code
      }
    },
    contact: function () {
      this.isLoading = true
      var api = 'https://2oby6oykv0.execute-api.us-west-2.amazonaws.com/bardho/mailing/list'
      var referal = (this.mailingForm.referal ? this.mailingForm.referal : '')
      var message = 'Felicidades, te has registrado para recibir las ultimas noticias de Bardho \n Te recordamos invitar a tus amigos y amigas, conocidos y conocidas a que se registren usando el siguiente código: ' + this.userCode + ' \n Gracias por confiar en nosotros y cuentanos tus historias'
      var messageHtml = 'Felicidades, te has registrado para recibir las ultimas noticias de Bardho \n Te recordamos invitar a tus amigos y conocidos a que se registren usando el siguiente código: <strong>' + this.userCode + '</strong> <br><br> No olvides que puedes compartir el siguiente link con tu codigo prellenado <a href="https://bardho.com/products/espadin?code=' + this.userCode + '">link 😬</a> <br><br> Gracias por confiar en nosotros y cuentanos tus historias <br>'
      if (!this.mailingForm.honey && this.mailingForm.name && this.mailingForm.email) {
        axios.post(api, {
          name: this.mailingForm.name,
          email: this.mailingForm.email,
          subject: 'Bienvenido',
          message: message,
          messageHtml: messageHtml,
          vars: {
            referal: referal,
            code: this.userCode
          }
        }).then((response) => {
          this.isHidden = true
        })
      } else {
        alert('Check your fields')
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="less">
#maillist {
  h1{
    font-size: 22pt;
    line-height: 20pt;
    text-transform: none;
    width: 100%;
  }
  .hidden{
    display: none;
  }

  #bardho{
    box-shadow: 0 0 0 1px #f57450 inset !important;
    color: #ffffff !important;
    background: #f57450 !important;
  }
}
</style>
