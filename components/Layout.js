import Nav from "./Nav";
import Header from "./Header";
import newsStyles from "../styles/News.module.css";

export const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<Header />
			<main className={newsStyles.newsfeed}>{children}</main>
		</>
	);
};
