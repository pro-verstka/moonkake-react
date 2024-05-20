import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from '@/pages/home'
import { BaseLayout } from '@/widgets/layouts'

const router = createBrowserRouter([
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />
			}
		]
	}
])

export const Router = () => {
	return <RouterProvider router={router} />
}
