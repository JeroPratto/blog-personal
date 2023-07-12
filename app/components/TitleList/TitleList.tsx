'use client'
import { PostMetaData } from '@/app/models'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import estilos from './styles/titleList.module.css'

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
		const searchTerms = inputText.toLowerCase().split(' ')
		return posts.filter((post) =>
			searchTerms.every((term) => post.title.toLowerCase().includes(term)),
		)
	}

	const sanitizedInput = (input: string) => {
		const sanitized = input.replace(/[<>&]|[^-\w\s]/g, '')
		return sanitized
	}

	return (
		<>
			<form className={estilos.form}>
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
								<p className={estilos.itemDesc}>{post.subtitle}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default TitleList
