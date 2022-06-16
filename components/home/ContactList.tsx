import { Email, Message, PhoneMissed } from '@mui/icons-material';
import {
	Avatar,
	ButtonGroup,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@mui/material';
import styles from '../../styles/Home.module.css';

function ListText() {
	return (
		<>
			<ListItemText>
				<Typography
					className={styles.uname}
					variant='subtitle1'
					style={{ margin: '0 1rem' }}>
					@SanitaSingh
				</Typography>
			</ListItemText>
			<ListItemText>
				<PhoneMissed
					style={{
						margin: '0 1rem',
						color: 'gainsboro',
						fontSize: '1rem',
					}}
				/>
				<Typography
					className={styles.email}
					variant='caption'
					style={{ margin: 0 }}>
					3 missed calls
				</Typography>
			</ListItemText>
		</>
	);
}

function MListText() {
	return (
		<List>
			<ListItemText>
				<Typography
					className={styles.uname}
					variant='subtitle1'
					style={{ margin: '0 1rem' }}>
					@SanitaSingh
				</Typography>
				<PhoneMissed
					style={{
						margin: '0 1rem',
						color: 'gainsboro',
						fontSize: '1rem',
					}}
				/>
				<Typography
					className={styles.email}
					variant='caption'
					style={{ margin: 0 }}>
					3 missed calls
				</Typography>
			</ListItemText>
		</List>
	);
}

function ContactItem() {
	const match = useMediaQuery('(max-width:550px)');

	return (
		<>
			<ListItem className={styles.contactList}>
				<ListItemIcon>
					<Avatar
						className={styles.appbarPic}
						src='/profilePic.jpeg'
						alt='profile pic'
						sx={{ width: '3rem', height: '3rem' }}
					/>
				</ListItemIcon>
				{match ? <MListText /> : <ListText />}
				<ButtonGroup sx={{ marginLeft: '1rem' }}>
					<Tooltip title='send message'>
						<IconButton aria-label='send message'>
							<Message sx={{ color: 'lightgray' }} />
						</IconButton>
					</Tooltip>
					<Tooltip title='send email'>
						<IconButton aria-label='send email'>
							<Email sx={{ color: 'lightgray' }} />
						</IconButton>
					</Tooltip>
				</ButtonGroup>
			</ListItem>
			<Divider
				variant='middle'
				sx={{ width: '80%', marginTop: '8px', marginBottom: '1rem' }}
			/>
		</>
	);
}

const ContactList = () => {
	return (
		<>
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
			<ContactItem />
		</>
	);
};

export default ContactList;
