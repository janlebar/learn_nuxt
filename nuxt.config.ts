export default {
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true,
  },
  modules: ['@nuxtjs/tailwindcss'], // Add a comma here
  generate: {
    routes: ['/', '/about', '/contact'], // Include all your routes here
  }
}


