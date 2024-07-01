import { Outlet } from 'react-router-dom'

import styles from './BaseLayout.module.scss'

export const BaseLayout = () => {
	return (
		<div className={styles.layout}>
			<Outlet />
		</div>
	)
}
