import { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import lightTheme from '../styles/theme/lightTheme';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name='theme-color' content={lightTheme.palette.primary.light} />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					{/* <link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/> */}
					<link
						href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&family=Poppins:wght@300;400;500&display=swap'
						rel='stylesheet'
					/>
					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: any) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
		// styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
	};
};
