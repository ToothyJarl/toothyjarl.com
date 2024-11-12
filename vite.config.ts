import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            custom: {
                families: [{ name: 'Geist', src: './src/assets/fonts/GeistVF.woff' }],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
