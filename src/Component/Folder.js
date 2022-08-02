import React, { useState } from 'react';

function Folder({ explorer }) {
	console.log(explorer);
	const [expand, setExpand] = useState(false);
	if (explorer.isFolder) {
		return (
			<>
				<span
					style={{ cursor: 'pointer' }}
					onClick={() => setExpand((expend) => !expand)}
				>
					-{explorer.name}
				</span>
				<br />
				<div style={{ paddingLeft: '20px' }}>
					{expand &&
						explorer.child.map((child) => (
							<Folder key={child.name} explorer={child} />
						))}
				</div>
			</>
		);
	} else {
		return (
			<>
				<span>{explorer.name}</span>
				<br></br>
			</>
		);
	}
}

export default Folder;
