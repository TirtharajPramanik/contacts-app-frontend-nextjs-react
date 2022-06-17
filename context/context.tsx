import { useMediaQuery, useTheme } from '@mui/material';
import { createContext } from 'react';

type Context = {
	down550: Boolean;
	up700: Boolean;
	upMedium: Boolean;
};

const initialContext: Context = { down550: false, up700: true, upMedium: true };

export const context = createContext(initialContext);

const ContextProvider = ({ children }: any) => {
	const theme = useTheme();
	const down550 = useMediaQuery('(max-width:550px)');
	const up700 = useMediaQuery('(min-width:700px)');
	const upMedium = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<context.Provider
			value={{ down550, up700, upMedium }}
			children={children}
		/>
	);
};

export default ContextProvider;
