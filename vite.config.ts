import path from 'path'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            custom: {
                families: [
                    { name: 'Geist', src: './src/assets/fonts/GeistVF.woff' },
                    {
                        name: 'JetBrains Mono',
                        local: 'JetBrains Mono',
                        src: './src/assets/fonts/JetBrainsMono-*.woff2',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        host: true,
        port: 5173,
    },
})
