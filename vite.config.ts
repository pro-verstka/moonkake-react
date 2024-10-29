import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			// eslint: {
			// 	lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
			// },
			typescript: true
		}),
		TanStackRouterVite({
			routesDirectory: './src/pages'
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
	},
	server: {
		host: true
	}
})
