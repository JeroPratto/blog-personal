import matter from 'gray-matter'
import { PostMetaData } from '../models'
import fs from 'fs'

const getPostMetaData = (): PostMetaData[] => {
	const folder = 'posts/'
	const files = fs.readdirSync(folder)
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
