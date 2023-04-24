import React from 'react'
import estilos from './footer.module.css'
import Link from 'next/link'
export type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={estilos.container}>
			<div>
				<h2 className={estilos.title}>Contacto</h2>
				<ul>
					<li>
						<Link href='https://github.com/JeroPratto' target='_blank'>
							Github: JeroPratto
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<h2 className={estilos.title}>Licencias</h2>
				<ul className={estilos.containerList}>
					<li className={estilos.item}>
						<Link href='https://boxicons.com/'>
							Iconos: Copyright (c) 2015-2021 Aniket Suvarna
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
