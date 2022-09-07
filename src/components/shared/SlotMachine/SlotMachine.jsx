import React, { useState, useEffect } from 'react'

import styles from './SlotMachine.module.scss'

import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import Label from '../../ui/Label/Label'
import SlotRow from './SlotRow'
import SlotItem from './SlotItem'

import clover from '../../../assets/images/clover.png'

const SlotMachine = ({ id, owned, close, expires }) => {

	const [spin, setSpin] = useState(false)

	const [ring1, setRing1] = useState()
	const [ring2, setRing2] = useState()
	const [ring3, setRing3] = useState()

	const [price, setPrice] = useState()
	const [input, setInput] = useState()

	const [realBet, setRealBet] = useState()
	const [jackpot, setJackpot] = useState(0)
	const [balance, setBalance] = useState(10000)

	useEffect(() => {
		win()
	}, [ring3])

	function rand() {
		setRing1(Math.floor(Math.random() * (100 - 1) + 1))
		setTimeout(function () { setRing2(Math.floor(Math.random() * (100 - 1) + 1)) }, 1000)
		setTimeout(function () { setRing3(Math.floor(Math.random() * (100 - 1) + 1)) }, 2000)
	}

	function play() {
		if (ring3 > 1 || !spin) {
			if (input <= balance && input >= 1) {
				setRealBet(input)
				setSpin(true)
				setRing1()
				setRing2()
				setRing3()
				setBalance(balance - input)
				setJackpot(jackpot + (input / 2))
				setTimeout(function () {
					rand()
				}, 2000)
			} else {
				setPrice(10)
			}
		}
	}

	function win() {
		console.log('win2')
		if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
			setPrice(1)
			setBalance(balance + (balance * 15))
		} else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
			setPrice(2)
			setBalance(balance + (balance * 20))
		} else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
			setPrice(3)
			setBalance(balance + (balance * 25))
		} else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
			setPrice(4)
			setBalance(balance + jackpot)
			setJackpot(0)
		} else {
			setPrice(0)
		}
	}

	function premio() {
		if (price === 1 && ring3 > 1) {
			return (
				<p className={styles.slot_result}>{"🍇 X15 You've won " + (realBet * 15) + "€!"}</p>
			)
		} else if (price === 2 && ring3 > 1) {
			return (
				<p className={styles.slot_result}>{"🍊 X20 You've won " + (realBet * 20) + "€!"}</p>
			)
		} else if (price === 3 && ring3 > 1) {
			return (
				<p className={styles.slot_result}>{"🥭 X25 You've won " + (realBet * 25) + "€!"}</p>
			)
		} else if (price === 4 && ring3 > 1) {
			return (
				<p className={styles.slot_result}>{"🍓 Jackpot! You've won: " + (jackpot) + "€!"}</p>
			)
		} else if (price === 0 && ring3 > 1) {
			return (
				<p className={styles.slot_result}>😧 ¡So close! But no luck...</p>
			)
		} else if (price === 10) {
			return (
				<p className={styles.slot_result}>🥶 <span style={{ color: `red` }}>Not enough funds</span> </p>
			)
		} else {
			return (
				<p className={styles.slot_result}> ... </p>
			)
		}
	}

	function numChecker(e) {
		const value = e.target.value;
		const regex = /^[0-9]+$/;
		if (value.match(regex) && parseInt(value) >= 0 || value === "") {
			setInput(value);
		}
	}


	return (
		<>
			<div className={styles.slot_machine}>
				<h1><img src={clover} alt="logo" /> Coin Clover</h1>
				<Label>
					{"Jackpot: " + jackpot + "€"}
				</Label>

				<div className={styles.slot_rows}>
					<SlotRow spin={spin} ring={ring1} />
					<SlotRow spin={spin} ring={ring2} />
					<SlotRow spin={spin} ring={ring3} />
				</div>

				<Label>
					{premio()}
				</Label>


				<div className={styles.slot_controls}>
					<Input
						value={input}
						type="number"
						onChange={(e) => numChecker(e)}
						placeholder="0€"
					/>
					<Button onClick={() => play()}>
						Spin
					</Button>
				</div>
				<Label>
					{"Available cash: " + Math.round((balance * 100)) / 100 + "€"}
				</Label>
				<Button onClick={() => setBalance(balance + 1000)}>
					Add 1000 €
				</Button>
			</div>
		</>
	)
}

export default SlotMachine