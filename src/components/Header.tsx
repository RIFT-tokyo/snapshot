import * as React from 'react';
import Form from './Form';

const Header: React.VFC<{handleSubmit: any }> = ({ handleSubmit }) => {
	return (
		<div>
			<h1>SnapShot</h1>
			<Form handleSubmit={handleSubmit}/>
		</div>
	)
}

export default Header
