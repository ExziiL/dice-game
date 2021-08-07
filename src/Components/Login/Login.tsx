import React from 'react';
import * as faker from 'faker';

const LoginWindow = () => {
	return (
		<div className="flex flex-col justify-center h-64 m-2 space-y-10 text-center border-2 border-black shadow-xl rounded-2xl w-60">
			<img src={faker.internet.avatar()} alt="" className="mx-auto rounded-full w-28" />
			<form className="flex mx-auto ">
				<input type="text" name="name" className="w-32 h-8 pl-2 border-2 border-gray-600 rounded-l-full focus:outline-none" />
				<input type="submit" value="Login" className="w-12 pr-1 text-white bg-gray-600 rounded-r-full cursor-pointer" />
			</form>
		</div>
	);
};

export default LoginWindow;
