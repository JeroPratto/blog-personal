import Link from 'next/link'
import { getPostMetaData } from './utilities'
import estilos from './styles/home.module.css'
import dataSorted from './utilities/dataSorted'
import { TitleList } from './components/TitleList'

export default function Home() {
	const postMetada = getPostMetaData()
	const newDataSorted = dataSorted(postMetada)
	return (
		<div className={estilos.container}>
			<h1 className={estilos.title}>Últimas notas</h1>
			<TitleList posts={newDataSorted} />
		</div>
	)
}
