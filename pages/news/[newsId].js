import { useRouter } from "next/router"

// domain.com/news

const Important = () => {
	const router = useRouter()
	console.log(router.query.newsId)

	return <h1>{router.query.newsId}</h1>
}

export default Important
