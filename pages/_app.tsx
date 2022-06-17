import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DefaultLayout from '../components/layout/DefaultLayout';
import ContextProvider from '../context/context';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';

type CustomAppProps = {
	Component: any;
	emotionCache: any;
	pageProps: any;
};

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: CustomAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={lightTheme}>
				<ContextProvider>
					<CssBaseline />
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				</ContextProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
