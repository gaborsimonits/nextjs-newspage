import { useRouter } from "next/router";

const Article = ({ NewsArticle }) => {
	const router = useRouter();
	const { url } = router.query;

	return <div>This is article {url} </div>;
};
