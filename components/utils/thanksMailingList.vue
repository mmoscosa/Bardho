<template lang="html">
  <section>
    <h2>¡Felicidades!</h2>
    <p>Ya estas registrado en nuestra base, estas muy cerca de ganar tu primera botella de Bardho</p>
    <div class="ui tablet fluid stackable steps">
      <div class="completed step">
        <i class="id card outline icon"></i>
        <div class="content">
          <div class="title">Registrarse</div>
          <div class="description">Registrarse en la lista para participar</div>
        </div>
      </div>
      <div class="active step">
        <i class="share alternate icon"></i>
        <div class="content">
          <div class="title link" @click="linkToShare(userCode)">Compartir</div>
          <div class="description">
            Invita a tus <a class="link" @click="linkToShare(userCode)">amistades</a>
            <br>
            Tu codigo: {{userCode}}
          </div>
        </div>
      </div>
      <div class="disabled step">
        <i class="trophy icon"></i>
        <div class="content">
          <div class="title">¡Gana!</div>
          <div class="description">Disfruta la historia de Bardho</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['userCode'],
  methods: {
    linkToShare: function (code) {
      window.location = '//bardho.com/products/espadin?code=' + code
    }
  }
}
</script>

<style lang="less">
.link{
  cursor: pointer !important;
}
</style>
