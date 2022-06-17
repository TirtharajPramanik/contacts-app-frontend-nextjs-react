import { Email, Message, PhoneMissed } from '@mui/icons-material';
import {
	ButtonGroup,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import { useContext } from 'react';
import { context } from '../../context/context';
import styles from '../../styles/Home.module.css';
// import profilePic from '../../public/profilePic.jpeg';

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
	const { down550 } = useContext(context);

	return (
		<>
			<ListItem className={styles.contactList}>
				<ListItemIcon>
					<div className={styles.listAvatar}>
						<Image
							className={styles.profilePic}
							src='/profilePic.jpeg'
							alt='profile pic'
							width={160}
							height={160}
						/>
					</div>
				</ListItemIcon>
				{down550 ? <MListText /> : <ListText />}
				<ButtonGroup>
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
	let list = [];
	for (let i = 0; i < 8; i++) {
		list.push(<ContactItem key={i} />);
	}
	return <>{list}</>;
};

export default ContactList;
