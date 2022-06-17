import { NextPage } from 'next';
import Signup from '../components/auth/Signup';
import Image from 'next/image';
import { ArrowDownward } from '@mui/icons-material';
import styles from '../styles/Signup.module.css';
import Link from 'next/link';

const signupPage = '/assets/heroImages/signupPage.svg';

const SignupPage: NextPage = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div>
					<h1 className={styles.title}>Contacts</h1>
					<Image
						className={styles.heroImage}
						src={signupPage}
						alt='hero image'
						width={600}
						height={600}
					/>
					<Link href='#signup' aria-label='to signup page'>
						<a className={styles.link}>
							<hr className={styles.line} />
							<ArrowDownward className={styles.arrow} />
						</a>
					</Link>
				</div>
				<br />
				<br />
				<Signup />
			</div>
		</main>
	);
};

export default SignupPage;
