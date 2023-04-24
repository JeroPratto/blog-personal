import Link from 'next/link'
import { getPostMetaData } from './utilities'
import estilos from './styles/home.module.css'
import Image from 'next/image'

export default function Home() {
	const postMetada = getPostMetaData()
	const dataStorted = postMetada.sort((a, b) => {
		if (a.date < b.date) return 1
		if (a.date > b.date) return -1
		return 0
	})
	return (
		<div className={estilos.container}>
			<div className={estilos.containerInfo}>
				<div className={estilos.containerTitleAndDesc}>
					<h1 className={estilos.title}>Notas by Jerónimo</h1>
					<p className={estilos.desc}>
						<span className={estilos.hi}>Hola</span>, ¡bienvenido a mi blog de
						notas y soluciones! Aquí te comparto un registro de todos los
						problemas que voy descubriendo en mi día a día y las soluciones que
						he encontrado. Mis notas tratan de ser directas y sin tanta vuelta,
						para que puedas acceder a la información de forma rápida y efectiva.
						A pesar de que son mis notas privadas, las comparto con vos con la
						intención de hacerte la vida un poco más facil. Si tenés alguna
						duda, encontrás algo mal hecho o creés que hay alguna forma de
						mejorar algo, por favor no dudes en contactarme.
					</p>
				</div>
				<ul className={estilos.containerList}>
					{dataStorted.map((post) => (
						<Link
							href={`/posts/${post.slug}`}
							className={estilos.link}
							key={post.slug}
						>
							<li className={estilos.containerItem}>
								<div className={estilos.containerImg}>
									<Image
										src={post.urlImg}
										alt={post.title}
										fill
										className={estilos.img}
									/>
								</div>
								<div className={estilos.itemTitleAndDesc}>
									<h3 className={estilos.itemTitle}>{post.title}</h3>
									<p className={estilos.itemDesc}>{post.subtitle}</p>
								</div>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	)
}
