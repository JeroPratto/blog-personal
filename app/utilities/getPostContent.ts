import fs from 'fs'

const getPostContent = (slug: string) => {
	const folder = 'posts/'
	const file = `${folder}${slug}.mdx`
	const content = fs.readFileSync(file, 'utf-8')
	return content
	// retorna un string
}

export default getPostContent
