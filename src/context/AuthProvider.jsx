/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import {
	signOut,
	getAuth,
	updateProfile,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider ({ children }) {


	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);

	const verifyEmail = () => sendEmailVerification(auth.currentUser);

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser === null || currentUser.emailVerified) {
				setUser(currentUser);
			}
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		logOut,
		loading,
		signIn,
		createUser,
		setLoading,
		verifyEmail,
		updateUserProfile,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
export default AuthProvider;
