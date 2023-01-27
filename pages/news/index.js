// domain.com/news

import Link from "next/link"

const NewsPage = () => {
	return (
		<>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/nextjs-is-a-great-framework">
						Next Js is a great framework
					</Link>
				</li>
				<li>Next JS is a great framework</li>
				<li>Next JS is a great framework</li>
				<li>Next JS is a great framework</li>
				<li>Next JS is a great framework</li>
				<li>Next JS is a great framework</li>
			</ul>
		</>
	)
}

export default NewsPage
