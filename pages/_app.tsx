import '../styles/globals.css';
import { AppProps } from 'next/app';
import DefaultLayout from '../components/layout/DefaultLayout';
import ContextProvider from '../context/context';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';

interface CustomAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

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
