import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { BaseLayout } from '@/widgets/layouts/base-layout'
import { createRootRoute } from '@tanstack/react-router'
import { Spinner } from '@/shared/ui'

export const Route = createRootRoute({
	component: () => (
		<>
			<BaseLayout />

			<TanStackRouterDevtools position="bottom-right" />
		</>
	),
	notFoundComponent: () => <div>Not Found</div>,
	errorComponent: () => <div>Error</div>,
	pendingComponent: () => <Spinner />
})
