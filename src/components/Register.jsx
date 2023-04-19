import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegUser, FaLock } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthProvider';


function Register ({ setIndex }) {
	const [error, setError] = useState('');
	const { createUser, updateUserProfile, verifyEmail } =
		useContext(AuthContext);

		const handleUpdateUserProfile = (name) => {
			const profile = {
				displayName: name,
			};
	
			updateUserProfile(profile)
				.then(() => {})
				.catch((e) => toast.error(e));
		};
	
		const handleEmailVerification = () => {
			verifyEmail()
				.then(() => {})
				.catch((e) => toast.error(e));
		};

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then(() => {
				// const user = result?.user;
				// console.log(user)
				setError('');
				form.reset();
				handleUpdateUserProfile(name);
				handleEmailVerification();
				toast.success('Hurray! signed up! Please verify email & login.', {
					duration: 2000,
				});
			})
			.catch((e) => {
				setError(e.message);
				toast.error(e.message);
			});
	};

	

	return (
		<div className='container'>
			<form className='form' onSubmit={handleSubmit}>
				{error && <p className='error-text'>{error}</p>}
				<h2>Sign Up</h2>

				<div className='inputBox'>
					<input name='name' type='text' placeholder='your username' required />
					<FaRegUser className='icon' />
				</div>

				<div className='inputBox'>
					<input
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
						name='password'
						type='password'
						autoComplete='current-password'
						placeholder='your password'
						required
					/>
					<FaLock className='icon' />
				</div>

				<div className='inputBox'>
					<input type='submit' value='Create Account' />
				</div>

				<p>
					Already a member ?<button type='button' onClick={() => setIndex(1)}> Log in</button>
				</p>
			</form>
		</div>
	);
};

Register.propTypes = {
  setIndex: PropTypes.number.isRequired,
};
export default Register;
