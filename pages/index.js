import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
	return (
		<div>
			<Head>
				<title>WebDev News</title>
				<meta name='keywords' content='web development, programming' />
			</Head>
			<h1>Welcome to Next</h1>
		</div>
	);
}
