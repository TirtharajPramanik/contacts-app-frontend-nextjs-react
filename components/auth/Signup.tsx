import Link from 'next/link';
import styles from '../../styles/Signup.module.css';

const Signup = () => {
	return (
		<div className={styles.signup} id='signup'>
			<form action=''>
				<h1 className={styles.label}>Signup</h1>
				<br />
				<label className={styles.inputLabel} htmlFor='uname'>
					Username
				</label>
				<input
					className={styles.input}
					type='text'
					name='uname'
					placeholder='Enter Your Username'
					required
					autoFocus
				/>
				<br />
				<br />
				<br />
				<label className={styles.inputLabel} htmlFor='email'>
					Email
				</label>
				<input
					className={styles.input}
					type='email'
					name='email'
					placeholder='Enter Your Email'
					required
				/>
				<br />
				<br />
				<br />
				<label className={styles.inputLabel} htmlFor='pword'>
					Password
				</label>
				<input
					className={styles.input}
					type='password'
					name='pword'
					placeholder='Enter Your Password'
					required
				/>
				<br />
				<br />
				<br />
				<br />
				<br />
				<input className={styles.submit} type='submit' name='submit' />
			</form>
			<Link href='/login'>
				<a className={styles.link}>Log In</a>
			</Link>
		</div>
	);
};

export default Signup;
