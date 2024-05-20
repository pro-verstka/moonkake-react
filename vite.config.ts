import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			typescript: true
		})
	],
	resolve: {
		alias: {
			'@': resolve(import.meta.dirname, './src')
		}
	},
	build: {
		sourcemap: false,
		assetsInlineLimit: 0
	}
})
