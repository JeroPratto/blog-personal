'use client'
import { PostMetaData } from '@/app/models'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import estilos from './styles/titleList.module.css'
import { sanitizedInput } from './utilities/sanitizedInput'
import { getSuggestionsPosts } from './utilities/getSuggestions'

export type TitleListProps = {
	posts: PostMetaData[]
}

const TitleList: React.FC<TitleListProps> = ({ posts }) => {
	const [inputText, setInputText] = useState('')

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const text = sanitizedInput(event.target.value)
		setInputText(text)
	}

	const getSuggestions = () => {
		return getSuggestionsPosts({ inputText, posts })
	}

	return (
		<>
			<form className={estilos.form}>
				<h1 className={estilos.title}>Últimas Notas</h1>
				<input
					autoFocus
					value={inputText}
					onChange={handleInputChange}
					placeholder='Buscar Post'
				/>
			</form>
			<ul className={estilos.containerList}>
				{getSuggestions().map((post) => (
					<li className={estilos.containerItem} key={post.slug}>
						<Link href={`/posts/${post.slug}`} className={estilos.link}>
							<div className={estilos.itemTitleAndDesc}>
								<h2 className={estilos.itemTitle}>{post.title}</h2>
								<p className={estilos.itemDate}>{post.date}</p>
								<p className={estilos.itemDesc}>{post.description}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default TitleList
