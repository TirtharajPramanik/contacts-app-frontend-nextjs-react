import { Add, DynamicFeed } from '@mui/icons-material';
import {
	AppBar,
	Toolbar,
	Typography,
	ButtonGroup,
	IconButton,
	Divider,
	Avatar,
	Tooltip,
	useMediaQuery,
} from '@mui/material';
import styles from '../../styles/Home.module.css';

function Appbar() {
	const up700 = useMediaQuery('(min-width:700px)');

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
							<IconButton aria-label='new contact'>
								<Add />
							</IconButton>
						</Tooltip>
						<Tooltip title='select multiple'>
							<IconButton aria-label='select multiple'>
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
								<Typography variant='subtitle1'>Sanita Singh</Typography>
								<Avatar
									className={styles.appbarPic}
									src='/profilePic.jpeg'
									alt='profile pic'
								/>
							</div>
						</div>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}
// function MAppbar() {
// 	return (
// 		<AppBar
// 			className={styles.appbar}
// 			variant='outlined'
// 			elevation={0}
// 			position='sticky'>
// 			<Toolbar className={styles.container} variant='dense'>
// 				<div className={styles.content}>
// 					<Typography variant='h5'>Contacts</Typography>
// 					<ButtonGroup>
// 						<IconButton>
// 							<Add />
// 						</IconButton>
// 						<IconButton>
// 							<DynamicFeed />
// 						</IconButton>
// 					</ButtonGroup>
// 				</div>
// 				<Divider orientation='vertical' />
// 				<div className={styles.content}>
// 					<Typography variant='h5'>Profile</Typography>
// 					<Person />
// 				</div>
// 			</Toolbar>
// 		</AppBar>
// 	);
// }

export default Appbar;
