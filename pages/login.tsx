import { Login } from '../components/auth/Login';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Login.module.css';
import loginPage from '../assets/heroImages/loginPage.png';
import { ArrowDownward } from '@mui/icons-material';
import Link from 'next/link';

const LoginPage: NextPage = () => {
	return (
		<div className={styles.loginPage}>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1 className={styles.title}>Contacts</h1>
					<Image
						className={styles.heroImage}
						src={loginPage}
						alt='hero image'
					/>
					<Link href='#login' aria-label='to login page'>
						<a className={styles.link}>
							<hr className={styles.line} />
							<ArrowDownward className={styles.arrow} />
						</a>
					</Link>
				</main>
				<Login />
			</div>
		</div>
	);
};

export default LoginPage;
