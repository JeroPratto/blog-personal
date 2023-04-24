import { Footer, Navbar } from './components'
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
			<body className='bodyContainer'>
				<div className='containerMaxWidth'>
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
