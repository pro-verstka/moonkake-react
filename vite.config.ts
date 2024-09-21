import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
			},
			typescript: true
		})
	],
	build: {
		cssMinify: 'lightningcss',
		assetsInlineLimit: 0,
		sourcemap: false
	},
	resolve: {
		alias: {
			'@': resolve(import.meta.dirname, './src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	}
})
