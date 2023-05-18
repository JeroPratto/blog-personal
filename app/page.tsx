import Link from 'next/link'
import { getPostMetaData } from './utilities'
import estilos from './styles/home.module.css'

export default function Home() {
	const postMetada = getPostMetaData()
	const dataStorted = postMetada.sort((a, b) => {
		if (a.date < b.date) return 1
		if (a.date > b.date) return -1
		return 0
	})
	return (
		<div className={estilos.container}>
			<h1 className={estilos.title}>Últimas notas</h1>
			<ul className={estilos.containerList}>
				{dataStorted.map((post) => (
					<li className={estilos.containerItem} key={post.slug}>
						<Link href={`/posts/${post.slug}`} className={estilos.link}>
							<div className={estilos.itemTitleAndDesc}>
								<h2 className={estilos.itemTitle}>{post.title}</h2>
								<p className={estilos.itemDesc}>{post.subtitle}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
