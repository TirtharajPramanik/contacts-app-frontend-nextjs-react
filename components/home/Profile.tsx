import { Email, Message, History } from '@mui/icons-material';
import {
	Avatar,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';
import styles from '../../styles/Home.module.css';
import ContactList from './ContactList';

function Profile() {
	return (
		<div className={styles.profile}>
			<Paper className={styles.coverPic} />
			<Avatar
				className={styles.profilePic}
				src='/profilePic.jpeg'
				alt='profile pic'
			/>
			<Typography className={styles.uname} variant='h5'>
				@SanitaSingh
			</Typography>
			<ListItem className={styles.email}>
				<ListItemIcon>
					<Email sx={{ color: 'gainsboro' }} />
				</ListItemIcon>
				<ListItemText>
					<Typography
						variant='subtitle1'
						sx={{ fontWeight: 'inherit', fontFamily: 'inherit' }}>
						sanitasingh@rmail.com
					</Typography>
				</ListItemText>
			</ListItem>
			<Typography className={styles.bio} variant='body1'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 🎸
			</Typography>

			<Stack
				className={styles.stack}
				direction='row'
				sx={{ marginBlock: '3rem' }}>
				<Tooltip title='send message'>
					<IconButton aria-label='send message'>
						<Message sx={{ color: 'lightgrey' }} />
					</IconButton>
				</Tooltip>
				<Tooltip title='send email'>
					<IconButton aria-label='send email'>
						<Email sx={{ color: 'lightgrey' }} />
					</IconButton>
				</Tooltip>
			</Stack>

			<div className={styles.hist}>
				<Typography variant='subtitle1' sx={{ marginRight: '4px' }}>
					logs
				</Typography>
				<History color='inherit' />
			</div>
			<Divider sx={{ width: '3rem', margin: '8px 0' }} />

			<Stack className={styles.stack} sx={{ marginBlock: '1rem' }}>
				<ContactList />
			</Stack>
		</div>
	);
}
// function MProfile() {
// 	return (
// 		<div className={styles.profile}>
// 			<Paper className={styles.coverPic} />
// 			<Avatar
// 				className={styles.profilePic}
// 				src='/profilePic.jpeg'
// 				alt='profile pic'
// 			/>
// 			<Typography className={styles.uname} variant='h5'>
// 				@SanitaSingh
// 			</Typography>
// 		</div>
// 	);
// }

export default Profile;
