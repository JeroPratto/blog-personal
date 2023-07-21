import { PostMetaData } from '@/app/models'

export interface getSuggestionsProps {
	inputText: string
	posts: PostMetaData[]
}

export const getSuggestionsPosts = ({
	inputText,
	posts,
}: getSuggestionsProps) => {
	const searchTerms = inputText.toLowerCase().split(' ')
	return posts.filter((post) =>
		searchTerms.every((term) => post.title.toLowerCase().includes(term)),
	)
}
