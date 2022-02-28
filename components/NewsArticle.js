import newsStyles from "../styles/News.module.css";
// import Image from "next/image";

const NewsArticle = ({ news }) => {
	return (
		<div className={newsStyles.newsbox}>
			{/* <Image
				src={news.urlToImage}
				alt='news article photo'
				className={newsStyles.newsimage}
				height={200}
				width={200}
			/> */}
			<img
				className={newsStyles.newsimage}
				src={news.urlToImage}
				alt='news article photo'
			/>
			<h1>{news.title} &rarr;</h1>
			<p dangerouslySetInnerHTML={{ __html: news.description }}></p>
			<a className={newsStyles.readmore} href={news.url}>
				Read more
			</a>
			<p className={newsStyles.newsdate}>
				{news.publishedAt.split("T").join(" ").slice(0, -4)}
			</p>
			<p className={newsStyles.newsauthor}>{news.author}</p>
		</div>
	);
};

export default NewsArticle;
