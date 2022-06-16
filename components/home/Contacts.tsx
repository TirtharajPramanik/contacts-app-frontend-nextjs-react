import { Stack } from '@mui/material';
import styles from '../../styles/Home.module.css';
import ContactList from './ContactList';

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<Stack className={styles.stack} sx={{ marginBlock: '1rem' }}>
				<ContactList />
			</Stack>
		</div>
	);
};

export default Contacts;
