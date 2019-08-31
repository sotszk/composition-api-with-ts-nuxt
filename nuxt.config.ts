import { Configuration } from '@nuxt/types/config'

const config: Configuration = {
  srcDir: 'src',
  buildModules: ['@nuxt/typescript-build'],
  plugins: [
    '~/plugins/composition-api.ts'
  ]
}

export default config
