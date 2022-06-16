import Profile from '../components/home/Profile';
import Contacts from '../components/home/Contacts';
import Appbar from './../components/layout/Appbar';
import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useMediaQuery, useTheme, Divider } from '@mui/material';

const HomePage: NextPage = () => {
	const theme = useTheme();
	const upMedium = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<>
			<Appbar />
			<div className={styles.container}>
				<Contacts />
				<Divider orientation='vertical' sx={{ height: '80vh' }} />
				{upMedium && <Profile />}
			</div>
		</>
	);
};

export default HomePage;
