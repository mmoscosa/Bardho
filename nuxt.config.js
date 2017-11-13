module.exports = {
  modules: [
    ['@nuxtjs/google-analytics']
  ],

 'google-analytics': {
    id: 'UA-109159392-1'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bardho',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mezcal Bardho | Compartiendo historias' },
      { property: 'og:title', content: "Mezcal Bardho"}
      { property: 'og:image', content: "/preview.jpg"}
    ],
    link: [
      { rel: 'author', href: '/humans.txt' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css' }
    ],
    script: []
  },
  plugins:[
    {src: '~/plugins/multilanguage', ssr: false },
    {src: '~/plugins/instantsearch', ssr: false },
    {src: '~/plugins/Viewer', ssr: false },
    {src: '~/plugins/socialSharing', ssr: false },
    {src: '~/plugins/vuefire'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f57450' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
