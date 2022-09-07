import React from 'react'

import styles from './SlotMachine.module.scss'

const SlotItem = ({ children, animation }) => {
	return (
		<div className={`${styles.slot_item} ${animation && styles.slot_item_animation}`} >
			{children}
		</div>
	)
}

export default SlotItem