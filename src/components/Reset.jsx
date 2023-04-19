import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

function Reset ({ setIndex }) {
	const [userEmail, setUserEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleEmailBlur = (event) => {
		const email = event.target.value;
		setUserEmail(email);
	};

	const handleForgetPassword = () => {
		if (!userEmail) {
			toast.error('email field cannot be empty!');
		}
		sendPasswordResetEmail(auth, userEmail)
			.then(() => {
				toast.success('Password Reset email sent. Please check your email.');
			})
			.catch((e) => {
				setError(e.message);
				toast.error(e.message);
			});
	};

	return (
		<div className='container'>
			<form className='form login' onSubmit={handleSubmit}>
				{error && <p className='error-text'>{error}</p>}

				<h2>Reset Form</h2>

				<div className='inputBox'>
					<input
						onBlur={handleEmailBlur}
						name='email'
						type='email'
						placeholder='your email'
						autoComplete='username'
						required
					/>
					<HiOutlineMail className='icon' />
				</div>

				<div className='inputBox'>
					<input
						type='button'
						value='Reset Now'
						onClick={handleForgetPassword}
					/>
				</div>

				<p>
					Remembered password ?<button type='button' onClick={() => setIndex(1)}> Login</button>
				</p>
				<p>
					New here ?<button type='button' onClick={() => setIndex(0)}> Create an account</button>
				</p>
			</form>
		</div>
	);
};

Reset.propTypes = {
  setIndex: PropTypes.number.isRequired,
};

export default Reset;
