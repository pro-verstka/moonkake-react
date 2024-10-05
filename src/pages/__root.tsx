import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { BaseLayout } from '@/widgets/layouts/base-layout'
import { createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: () => (
		<>
			<BaseLayout />

			<TanStackRouterDevtools position="bottom-right" />
		</>
	)
})
