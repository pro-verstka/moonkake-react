import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

function getPath(path: string) {
	return resolve(import.meta.dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			_mixins: getPath('./src/app/styles/_mixins.scss'),
			$services: getPath('./src/shared/services'),
			$stores: getPath('./src/shared/stores'),
			$hooks: getPath('./src/shared/hooks'),
			$entities: getPath('./src/entities'),
			$features: getPath('./src/features'),
			$libs: getPath('./src/shared/libs'),
			$widgets: getPath('./src/widgets'),
			$shared: getPath('./src/shared'),
			$ui: getPath('./src/shared/ui'),
			$pages: getPath('./src/pages'),
			$app: getPath('./src/app')
		}
	},
	plugins: [
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
				dev: {
					logLevel: ['error']
				},
				useFlatConfig: true
			},
			typescript: true
		}),
		tanstackRouter({
			routesDirectory: './src/pages',
			autoCodeSplitting: true,
			target: 'react'
		}),
		react()
	],
	build: {
		cssMinify: 'lightningcss',
		assetsInlineLimit: 0,
		sourcemap: false
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
