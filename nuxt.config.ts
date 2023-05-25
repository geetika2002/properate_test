// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@vuestic/nuxt', '@nuxtjs/tailwindcss', '@nuxt/content'],
    app: {
        head:{
          title: 'BCIT TEAM test',
          meta:[
            { name: 'description', content: 'Everything about Nuxt 3'}
          ],
          link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
          ]
  
               
        }
        
      }
})
