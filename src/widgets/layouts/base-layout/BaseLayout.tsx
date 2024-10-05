import { Outlet } from '@tanstack/react-router'

import styles from './styles.module.scss'

export const BaseLayout = () => {
	return (
		<div className={styles.layout}>
			<header>header</header>

			<main>
				<Outlet />
			</main>

			<footer>footer</footer>
		</div>
	)
}
