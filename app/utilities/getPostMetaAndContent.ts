import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrimsPlus from 'rehype-prism-plus'
import getPostContent from './getPostContent'

interface frontmatterCompiler {
	title: string
	subtitle: string
	date: string
}

const getPostMetaAndContent = async (slug: string) => {
	// content es un string
	const contentString = getPostContent(slug)
	// se separa el content de la metadata
	const { content, frontmatter } = await compileMDX<frontmatterCompiler>({
		source: contentString,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				rehypePlugins: [rehypeCodeTitles, rehypePrimsPlus],
			},
		},
	})
	return {
		post: {
			content: content,
			data: {
				title: frontmatter.title,
				subtitle: frontmatter.subtitle,
				date: frontmatter.date,
			},
		},
	}
}
export default getPostMetaAndContent
