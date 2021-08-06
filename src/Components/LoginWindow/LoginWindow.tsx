import { useState } from 'react';

import * as faker from 'faker';

const LoginWindow = () => {
	const [name, setName] = useState({
		value: '',
		show: '',
	});

	const handleNameChange = (event: any) => {
		setName({ ...name, value: event.target.value });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		setName({ value: '', show: name.value });
	};

	return (
		<div>
			<img src={faker.internet.avatar()} alt="" />
			<form onSubmit={(e) => handleSubmit(e)} className="ml-2 border-2 w-min">
				<input type="text" value={name.value} onChange={(e) => handleNameChange(e)} />
			</form>
			<div>{name.show}</div>
		</div>
	);
};

export default LoginWindow;
