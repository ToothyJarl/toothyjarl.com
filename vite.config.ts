import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            custom: {
                families: [
                    {
                        name: 'Geist',
                        src: './src/assets/fonts/geist/*.woff2'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
