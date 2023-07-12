// 'use client'
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
			{/* <form>
				<input value={inputText} onChange={handleInputChange} />
			</form> */}
			{/* <ul className={estilos.containerList}>
				{newDataSorted.map((post) => (
					<li className={estilos.containerItem} key={post.slug}>
						<Link href={`/posts/${post.slug}`} className={estilos.link}>
							<div className={estilos.itemTitleAndDesc}>
								<h2 className={estilos.itemTitle}>{post.title}</h2>
								<p className={estilos.itemDesc}>{post.subtitle}</p>
							</div>
						</Link>
					</li>
				))}
			</ul> */}
			<TitleList posts={newDataSorted} />
		</div>
	)
}
