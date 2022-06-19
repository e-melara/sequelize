import { sequelize } from './src/models/db.js';
import { Post } from './src/models/Post.js';
import { User } from './src/models/User.js';

let user, posts;
sequelize
	.sync({ alter: true })
	.then(() => {
		return User.findOne({
			where: { username: 'admin' },
		});
	})
	.then(data => {
		user = data;
		return Post.findAll();
	})
	.then(data => {
		posts = data;
		return user.addPosts(posts);
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => console.log(err));

