import Profile from '../components/home/Profile';
import Contacts from '../components/home/Contacts';
import Appbar from './../components/layout/Appbar';
import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Divider } from '@mui/material';
import { useContext } from 'react';
import { context } from '../context/context';

const HomePage: NextPage = () => {
	const { upMedium } = useContext(context);

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
