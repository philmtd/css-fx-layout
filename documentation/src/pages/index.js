import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.install}>
					<Install></Install>
				</div>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/getting-started">
						Getting Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`Home`}
			description="css-fx-layout is a simple and modular responsive SCSS flexbox library.">
			<HomepageHeader/>
			<main>
				<HomepageFeatures/>
			</main>
		</Layout>
	);
}

export function Install() {
	return (
		<CodeBlock language="bash">
			{`npm i -s css-fx-layout`}
		</CodeBlock>
	);
}