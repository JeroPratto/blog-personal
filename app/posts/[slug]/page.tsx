import { getPostMetaAndContent } from '@/app/utilities'

const PostPage = async (props: any) => {
	const slug = props.params.slug
	const { post } = await getPostMetaAndContent(slug)
	return (
		<div className='containermdx'>
			<article className='prose max-w-none lg:prose-xl mx-auto prose-headings:text-white prose-p:text-white prose-li:text-white prose-code:text-white'>
				{post.content}
			</article>
		</div>
	)
}

export default PostPage
