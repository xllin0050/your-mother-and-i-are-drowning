import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import eslintPlugin from 'vite-plugin-eslint'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
import compress from 'vite-plugin-compress'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin(),
        Icons({
            compiler: 'vue3',
        }),
        Components({
            /* options */
        }),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        compress(),
        WindiCSS(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 4000,
    },
})
