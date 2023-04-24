import { PostMetaData } from '@/app/models'
import { getPostContent, getPostMetaData } from '@/app/utilities'
import matter from 'gray-matter'

export const generateMetadata = (props: any) => {
	const slug = props.params.slug
	const data = getPostContent(slug)
	const matterResult = matter(data)
	return {
		title: `Notas | ${matterResult.data.title}`,
		description: matterResult.data.subtitle,
	}
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div>{children}</div>
}
