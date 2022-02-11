import headerStyles from "../styles/Header.module.css";

const Header = () => {
	const x = 2;
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>US</span> Headlines
			</h1>
			<p>Keep up to date with the latest news</p>
			{/* //style H1 within the component */}
			{/* <style jsx>
				{`
					.title {
						color: ${x > 3 ? "red" : "blue"};
					}
				`}
			</style> */}
		</div>
	);
};

export default Header;
