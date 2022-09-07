import React from 'react'

import styles from './SlotMachine.module.scss'

import SlotItem from './SlotItem'

const SlotRow = ({ children, spin, ring }) => {

	function row() {

		if (!spin) {
			return (
				<>
					<SlotItem>🥭</SlotItem>
					<SlotItem>🍓</SlotItem>
					<SlotItem>🍇</SlotItem>
					<SlotItem>🍊</SlotItem>
				</>
			)
		} else if (spin && ring === undefined) {
			return (
				<>
					<SlotItem animation={true}>🍓</SlotItem>
					<SlotItem animation={true}>🍇</SlotItem>
					<SlotItem animation={true}>🍊</SlotItem>
					<SlotItem animation={true}>🍋</SlotItem>
					<SlotItem animation={true}>🍍</SlotItem>
					<SlotItem animation={true}>🥭</SlotItem>
				</>
			)
		} else if (ring >= 1 && ring <= 50) {
			return (
				<>
					<SlotItem>🍓</SlotItem>
					<SlotItem>🍇</SlotItem>
					<SlotItem>🍊</SlotItem>
					<SlotItem>🥭</SlotItem>
				</>
			)
		} else if (ring > 50 && ring <= 75) {
			return (
				<>
					<SlotItem>🍇</SlotItem>
					<SlotItem>🍊</SlotItem>
					<SlotItem>🥭</SlotItem>
					<SlotItem>🍓</SlotItem>
				</>
			)
		} else if (ring > 75 && ring <= 95) {
			return (
				<>
					<SlotItem>🍊</SlotItem>
					<SlotItem>🥭</SlotItem>
					<SlotItem>🍓</SlotItem>
					<SlotItem>🍇</SlotItem>
				</>
			)
		} else if (ring > 95 && ring <= 100) {
			return (
				<>
					<SlotItem>🥭</SlotItem>
					<SlotItem>🍓</SlotItem>
					<SlotItem>🍇</SlotItem>
					<SlotItem>🍊</SlotItem>
				</>
			)
		}
	}

	return (
		<div className={styles.slot_row}>
			{row()}
		</div>
	)
}

export default SlotRow