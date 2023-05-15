import { getPostMetaAndContent } from '@/app/utilities'

const PostPage = async (props: any) => {
	const slug = props.params.slug
	const { post } = await getPostMetaAndContent(slug)
	return (
		<div className='containermdx'>
			<article className='prose-custom'>{post.content}</article>
		</div>
	)
}

export default PostPage
