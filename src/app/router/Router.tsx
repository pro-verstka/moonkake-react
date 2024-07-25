import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BaseLayout } from '@/widgets/layouts'
import { HomePage } from '@/pages/home'

const router = createBrowserRouter([
	{
		children: [
			{
				element: <HomePage />,
				index: true,
				path: '/'
			}
		],
		element: <BaseLayout />
	}
])

export const Router = () => {
	return <RouterProvider router={router} />
}
