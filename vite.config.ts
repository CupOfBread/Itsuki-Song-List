import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue', 'axios', 'vue-router', 'vue-demi', 'pinia'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          'vue-demi': 'VueDemi',
          pinia: 'Pinia',
        }),
      ],
    },
  },
})
