import * as React from 'react';
import Form from './Form';
import Navigation from './Navigation';

const Header: React.VFC<{handleSubmit: any }> = ({ handleSubmit }) => {
	return (
		<div>
			<h1>SnapShot</h1>
			<Form handleSubmit={handleSubmit} />
			<Navigation />
		</div>
	)
}

export default Header
