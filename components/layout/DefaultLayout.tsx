import Head from 'next/head';

const DefaultLayout = ({ children }: { children: any }) => {
	return (
		<>
			<Head>
				<title>Contacts</title>
				<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='Contacts App' />
				<meta
					name='theme-color'
					media='(prefers-color-scheme: light)'
					content='#ffffff'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</>
	);
};

export default DefaultLayout;
