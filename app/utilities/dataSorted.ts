import { PostMetaData } from '../models'

const dataSorted = (postMetada: PostMetaData[]): PostMetaData[] => {
	const data = postMetada.sort((a, b) => {
		if (a.date < b.date) return 1
		if (a.date > b.date) return -1
		return 0
	})
	return data
}

export default dataSorted
