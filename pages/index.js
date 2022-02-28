import Head from "next/head";
import NewsList from "../components/NewsList";
import { Layout } from "../components/Layout";

// const today = new Date().toISOString().split("T")[0];

export const getStaticProps = async () => {
	//
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=7593c7116e6b46288c890afce6ab9d3f`
		// `https://jsonplaceholder.typicode.com/posts?_limit=5`
	);
	const data = await res.json();
	const newsData = data.articles;
	console.log(newsData);

	return {
		props: {
			newsData,
		},
	};
};

// 3 ways to fetch data and pass in as props :
// get static props - allow to fetch build time
// get server side props - fetch on every request - slower
// get staticpaths - dynamicly generating paths based on data

export default function Home({ newsData }) {
	return (
		<div>
			<Head>
				<title>Top Headlines</title>
				<meta name='keywords' content='news' />
			</Head>
			<NewsList newsData={newsData} />
		</div>
	);
}
