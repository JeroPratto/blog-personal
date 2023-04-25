import { Footer, Navbar } from './components'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
	title: 'Notas | Jerónimo',
	description:
		'Descubre notas y soluciones rápidas de problemas cotidianos en este blog accesible. React, nextjs, testing-library, jest',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='es'>
			<meta
				name='google-site-verification'
				content='dLsYd_eUzjNf5t3QF34qIZN_0B2KZuKj-GGOhlPmD6c'
			/>
			<body className='bodyContainer'>
				<div className='containerMaxWidth'>
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
			{/* <Analytics /> */}
		</html>
	)
}
