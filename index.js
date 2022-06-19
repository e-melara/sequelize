import { User } from './src/models/User.js';

User.sync({
	alter: true,
})
	.then(() => {
		return User.create({
			username: 'lilili',
			password: '1283736',
		});
	})
	.then(data => {})
	.catch(err => console.log(err));

