import cardStyles from "../styles/Card.module.css";
import Image from "next/image";

const Card = ({ news }) => {
	return (
		<div className={cardStyles.newsbox}>
			{/* <Image
				src={news.urlToImage}
				alt='news article photo'
				className={cardStyles.newsimage}
			/> */}
			{/* <img className={cardStyles.newsimage} src={news.urlToImage} /> */}
			<h1>{news.title}</h1>
			{/* <p dangerouslySetInnerHTML={{__html: news.description}}></p> */}
			<a className={cardStyles.readmore} href={news.url}>
				Read more
			</a>
			<p className={cardStyles.newsdate}>
				{news.publishedAt.split("T").join(" ").slice(0, -4)}
			</p>
			<p className={cardStyles.newsauthor}>{news.author}</p>
		</div>
	);
};

export default Card;
