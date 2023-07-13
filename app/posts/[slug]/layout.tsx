import { PostMetaData } from '@/app/models'
import { getPostContent, getPostMetaData } from '@/app/utilities'
import matter from 'gray-matter'

export const generateMetadata = (props: any) => {
	const slug = props.params.slug
	const data = getPostContent(slug)
	const matterResult = matter(data)
	return {
		title: matterResult.data.title,
		description: matterResult.data.subtitle,
		openGraph: {
			title: matterResult.data.title,
			description: matterResult.data.subtitle,
			url: 'https://blog-personal-jero.vercel.app/',
			type: 'article',
			publishedTime: matterResult.data.date,
			siteName: 'Notas | Jerónimo',
			images: [
				{
					url: `https://blog-personal-jero.vercel.app/postImages/${matterResult.data.urlImg}`,
					width: 1200,
					heigth: 630,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: matterResult.data.title,
			description: matterResult.data.subtitle,
			images: [
				`https://blog-personal-jero.vercel.app/postImages/${matterResult.data.urlImg}`,
			],
		},
	}
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div>{children}</div>
}
