import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Reset from '../components/Reset';

function Auth () {
	const [index, setIndex] = useState(0);
	return (
		<div className='auth-box'>
			<div className='tabs'>
				<button type='button'
					className={`tab-head ${index === 0 ? 'active' : null}`}
					onClick={() => setIndex(0)}
				>
					Sign Up
				</button>
				<button type='button'
					className={`tab-head ${index === 1 ? 'active' : null}`}
					onClick={() => setIndex(1)}
				>
					Log In
				</button>
				<button type='button'
					className={`tab-head ${index === 2 ? 'active' : null}`}
					onClick={() => setIndex(2)}
				>
					Reset
				</button>
			</div>
			<div className='auth'>
				<div hidden={index !== 0}>
					<Register index={index} setIndex={setIndex} />
				</div>

				<div hidden={index !== 1}>
					<Login index={index} setIndex={setIndex} />
				</div>

				<div hidden={index !== 2}>
					<Reset index={index} setIndex={setIndex} />
				</div>
			</div>
		</div>
	);
};

export default Auth;
