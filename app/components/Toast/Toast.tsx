'use client'
import React, { ReactNode, useState } from 'react'
import estilos from './toast.module.css'

export type ToastProps = {
	children: ReactNode
}

const Toast: React.FC<ToastProps> = ({ children }) => {
	const [show, setShow] = useState(false)
	const handleState = () => {
		setShow(true)
		setTimeout(function () {
			setShow(false)
		}, 3000)
	}
	return (
		<>
			<button className={estilos.btn} onClick={handleState}>
				{children}
			</button>
			<div className={`${estilos.message} ${show ? estilos.show : ''}`}>
				No disponible
			</div>
		</>
	)
}

export default Toast
