import { createLazyFileRoute } from '@tanstack/react-router'

import styles from './styles.module.scss'

export const Route = createLazyFileRoute('/')({
	component: IndexPage
})

function IndexPage() {
	return <div className={styles.home}>home</div>
}
