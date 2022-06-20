import { Add, DynamicFeed } from '@mui/icons-material';
import {
	AppBar,
	Toolbar,
	Typography,
	ButtonGroup,
	IconButton,
	Divider,
	Tooltip,
} from '@mui/material';
import Image from 'next/image';
import { useContext } from 'react';
import { context } from '../../context/context';
import styles from '../../styles/Home.module.css';
import profilePic from '../../assets/heroImages/profilePic.jpeg';

function Appbar() {
	const { up700 } = useContext(context);

	return (
		<AppBar
			className={styles.appbar}
			variant='outlined'
			elevation={0}
			position='sticky'>
			<Toolbar className={styles.container} variant='dense'>
				<div className={styles.content}>
					<Typography variant='h5'>Contacts</Typography>
					<ButtonGroup>
						<Tooltip title='new contact'>
							<IconButton aria-label='new contact' color='inherit'>
								<Add />
							</IconButton>
						</Tooltip>
						<Tooltip title='select multiple'>
							<IconButton aria-label='select multiple' color='inherit'>
								<DynamicFeed />
							</IconButton>
						</Tooltip>
					</ButtonGroup>
				</div>
				{up700 && (
					<>
						<Divider orientation='vertical' />
						<div className={styles.content}>
							<Typography variant='h5'>Profile</Typography>
							<div className={styles.appbarProfile}>
								<Typography variant='subtitle1' sx={{ fontFamily: 'inherit' }}>
									Sanita Singh
								</Typography>
								<div className={styles.appbarAvatar}>
									<Image
										className={styles.profilePic}
										src={profilePic}
										alt='profile pic'
										width={160}
										height={160}
										placeholder='blur'
										blurDataURL='/vercel.svg'
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Appbar;
