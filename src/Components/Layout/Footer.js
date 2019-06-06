import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<a href="https://github.com/KeithFarnan/ReactJsPrismicCMS" target="_blank" rel="noopener noreferrer">
					Link to GitHub repository
				</a>
				<br />
				<a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
					<img className="footer-logo" src="/images/logo-prismic.svg" alt="Gray Prismic logo" />
				</a>
			</footer>
		);
	}
}
