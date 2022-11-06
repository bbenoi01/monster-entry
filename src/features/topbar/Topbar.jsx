import './Topbar.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../app/slices/authSlice';

const Topbar = () => {
	const { authenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login());
	};

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	return (
		<nav className='navbar fixed-top navbar-dark'>
			<div className='container-fluid'>
				<div id='brand' className='navbar-brand'>
					Monster Entry
				</div>
				<button
					id='auth-btn'
					className={
						authenticated ? 'btn btn-outline-danger' : 'btn btn-outline-success'
					}
					onClick={authenticated ? handleLogout : handleLogin}
					type='submit'
				>
					{authenticated ? 'Logout' : 'Login'}
				</button>
			</div>
		</nav>
	);
};

export default Topbar;
