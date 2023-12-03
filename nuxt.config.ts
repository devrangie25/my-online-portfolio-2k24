// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },

  components: [
    '~/components',
    { path: '~/components/dp-v1', prefix: 'v1-' },
    { path: '~/components/dp-v2', prefix: 'v2-' },
    { path: '~/components/templates', prefix: 't-' },
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_index.scss" as *;'
        }
      }
    }
  },
});
