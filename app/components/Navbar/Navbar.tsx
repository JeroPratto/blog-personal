'use client'
import React from 'react'
import estilos from './Navbar.module.css'
import Link from 'next/link'
import home from 'public/home-icon.svg'
import arrow from 'public/arrow-icon.svg'
import github from 'public/github-icon.svg'
import search from 'public/search-icon.svg'
import Image from 'next/image'
import { Toast } from '../Toast'

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<nav className={estilos.container}>
			<ul className={estilos.listContainer}>
				<li className={estilos.item}>
					<Link href='/' className={estilos.link}>
						<Image className={estilos.img} src={home} alt='Home' />
					</Link>
				</li>
				<li className={estilos.item}>
					<Toast>
						<Image
							className={estilos.img}
							src={search}
							alt='search no disponible'
						/>
					</Toast>
				</li>
				<li className={estilos.item}>
					<Link
						href='https://github.com/JeroPratto'
						target='_blank'
						className={estilos.link}
					>
						<Image className={estilos.img} src={github} alt='github' />
					</Link>
				</li>
				<li className={`${estilos.item} ${estilos.arrow}`}>
					<button className={estilos.btnArrow} onClick={goToTop}>
						<Image className={estilos.img} src={arrow} alt='go to the top' />
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
