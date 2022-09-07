import React from 'react'

import styles from './Input.module.scss'

const Input = ({ type, value, onChange, placeholder }) => {
	return (
		<input
			className={styles.input}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input