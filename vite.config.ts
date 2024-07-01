import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
			}
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
