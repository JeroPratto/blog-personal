import matter from 'gray-matter'
import { PostMetaData } from '../models'
import fs from 'fs'
import path from 'path'

const getPostMetaData = (): PostMetaData[] => {
	const directory = path.join(process.cwd(), 'posts')
	const files = fs.readdirSync(directory)
	const markdownPosts = files.filter((file) => file.endsWith('.mdx'))
	const posts = markdownPosts.map((fileName) => {
		const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
		const matterResult = matter(fileContent)
		return {
			title: matterResult.data.title,
			date: matterResult.data.date,
			subtitle: matterResult.data.subtitle,
			urlImg: matterResult.data.urlImg,
			slug: fileName.replace('.mdx', ''),
		}
	})
	return posts
}

export default getPostMetaData
