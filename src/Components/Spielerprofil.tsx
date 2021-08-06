/* eslint-disable no-restricted-globals */
import { useState } from 'react';

const Spielerprofil = (props: any) => {
	const [augenzahl, setAugenzahl] = useState(4);

	return (
		<div>
			<div className="flex flex-col min-h-screen bg-gray-100">
				<div className="m-auto">
					<div className="flex flex-col max-w-sm px-10 py-8 bg-gray-200 rounded-md shadow-md md:px-8">
						<div className="flex flex-col gap-6 md:flex-row md:gap-8">
							<img src="https://randomuser.me/api/portraits/men/78.jpg" alt="" className="w-24 h-24 mx-auto border-4 border-gray-300 rounded-full" />
							<div className="flex flex-col text-center md:text-left">
								<div className="text-lg font-medium text-gray-800">{props.name}</div>
								<div className="mb-3 text-gray-500 whitespace-nowrap">Würfel: {augenzahl}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spielerprofil;
