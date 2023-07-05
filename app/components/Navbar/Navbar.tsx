'use client'
import React, { useEffect, useState } from 'react'
import estilos from './Navbar.module.css'
import Link from 'next/link'
import home from 'public/home-white.svg'
import homeDark from 'public/home-black.svg'
import * as Switch from '@radix-ui/react-switch'
import github from 'public/github-icon.svg'
import githubDark from 'public/github-icon-black.svg'
import Image from 'next/image'
import linkedinWhite from 'public/linkedin-white.svg'
import linkedinBlack from 'public/linkedin-black.svg'

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const toggleTheme = () => {
		const newDarkMode = !isDarkMode
		setIsDarkMode(newDarkMode)
	}
	const [isDarkMode, setIsDarkMode] = useState(false)
	useEffect(() => {
		isDarkMode
			? document.body.classList.add('darkMode')
			: document.body.classList.remove('darkMode')
	}, [isDarkMode])

	return (
		<nav className={estilos.container}>
			<div className={estilos.listContainer}>
				<div className={estilos.item}>
					<Link href='/' className={estilos.link}>
						<Image
							className={estilos.img}
							src={isDarkMode ? home : homeDark}
							alt='Home'
						/>
						Notas
					</Link>
				</div>
				<div className={estilos.containerLastItems}>
					<div className={estilos.item}>
						<Link
							href='https://github.com/JeroPratto'
							target='_blank'
							className={estilos.link}
						>
							<Image
								className={estilos.img}
								src={isDarkMode ? github : githubDark}
								alt='github'
							/>
						</Link>
					</div>
					<div className={estilos.item}>
						<Link
							href='https://www.linkedin.com/in/jeronimo-pratto/'
							target='_blank'
							className={estilos.link}
						>
							<Image
								className={estilos.img}
								src={isDarkMode ? linkedinWhite : linkedinBlack}
								alt='linkedin'
							/>
						</Link>
					</div>
					<div>
						<Switch.Root
							checked={isDarkMode}
							onCheckedChange={toggleTheme}
							className={estilos.switchRoot}
							aria-label='Change theme color'
						>
							<Switch.Thumb className={estilos.switchThumb} />
						</Switch.Root>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
