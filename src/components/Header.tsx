import * as React from 'react';
import { NavigateFunction } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import Form from './Form';
import Navigation from './Navigation';

const Header: React.VFC<{handleSubmit: (e: React.FormEvent, navigate: NavigateFunction, searchInput: string) => void, navigate: NavigateFunction }> = ({ handleSubmit, navigate }) => {
  // let naviagte = useNavigate();

	return (
		<div>
			<h1>SnapShot</h1>
			<Form handleSubmit={handleSubmit} navigate={navigate} />
			<Navigation />
		</div>
	)
}

export default Header
