import { TitleList } from './components/TitleList'
import estilos from './styles/home.module.css'
import { getPostMetaData } from './utilities'

export default function Home() {
	const postMetada = getPostMetaData()
	return (
		<div className={estilos.container}>
			<TitleList posts={postMetada} />
		</div>
	)
}
