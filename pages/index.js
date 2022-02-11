import Head from "next/head";
import Card from "../components/Card";
import { Layout } from "../components/Layout";
import cardStyles from "../styles/Card.module.css";

// const today = new Date().toISOString().split("T")[0];

export const getStaticProps = async () => {
	//
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=7593c7116e6b46288c890afce6ab9d3f`
		// `https://jsonplaceholder.typicode.com/posts?_limit=5`
	);
	const data = await res.json();

	const actual = data.articles;

	// console.log(actual);

	// console.log(data.articles[0].title);
	return {
		props: {
			actual,
		},
	};
};

// 3 ways to fetch data and pass in as props :
// get static props - allow to fetch build time
// get server side props - fetch on every request - slower
// get staticpaths - dynamicly generating paths based on data

export default function Home({ actual }) {
	return (
		<div>
			<Head>
				<title>Top Headlines</title>
				<meta name='keywords' content='news' />
			</Head>
			<div className={cardStyles.newsfeed}>
				{actual.map((news) => (
					<Card key={news.title} news={news} />
				))}
			</div>
		</div>
	);
}
