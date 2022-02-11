import cardStyles from "../styles/Card.module.css";

const Card = ({ news }) => {
	return (
		<div className={cardStyles.newsbox}>
			<img className={cardStyles.newsimage} src={news.urlToImage} alt='' />
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
