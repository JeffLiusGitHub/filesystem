export const explorer = {
	name: 'file-system',
	isFolder: true,
	child: [
		{
			name: 'node_modules',
			isFolder: true,
			child: [
				{ name: 'bin', isFolder: false },
				{
					name: 'public',
					isFolder: false,
				},
			],
		},
		{
			name: 'src',
			isFolder: true,
			child: [
				{
					name: 'Component',
					isFolder: true,
					child: [{ name: 'folder.js', isFolder: false }],
				},
				{
					name: 'App.js',
					isFolder: false,
				},
				{
					name: 'App.css',
					isFolder: false,
				},
				{
					name: 'App.test.js',
					isFolder: false,
				},
				{
					name: 'index.js',
					isFolder: false,
				},
				{
					name: 'index.css',
					isFolder: false,
				},
			],
		},
	],
};
