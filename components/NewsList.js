import newsStyles from "../styles/News.module.css";
import NewsArticle from "../components/NewsArticle";
import Image from "next/image";

const NewsList = ({ newsData }) => {
	return (
		<div className={newsStyles.newsfeed}>
			{newsData.map((news) => (
				<NewsArticle key={news.title} news={news} />
			))}
		</div>
	);
};

export default NewsList;
