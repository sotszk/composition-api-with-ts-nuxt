import { Configuration } from '@nuxt/types/config'

const config: Configuration = {
  srcDir: 'src',
  server: {
    port: 8081,
  },
  buildModules: ['@nuxt/typescript-build'],
  plugins: [
    '~/plugins/composition-api.ts',
    '~/plugins/api-client.ts',
    '~/plugins/logger.ts',
  ],
}

export default config
