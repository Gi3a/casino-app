import React from 'react'

import styles from './Page.module.scss'

const Page = ({ children }) => {
	return (
		<>
			<main className={styles.page}>
				{children}
			</main>
		</>
	)
}

export default Page