import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { fileURLToPath } from 'url'
//import VitePluginWebpCompress from 'vite-plugin-webp-compress'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            custom: {
                families: [{ name: 'Geist', src: './src/assets/fonts/GeistVF.woff' }],
            },
        }),
        //VitePluginWebpCompress(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
