import { Op } from 'sequelize';
import { User } from './src/models/User.js';

User.sync({
	alter: true,
})
	.then(() => {
		/* return User.findAll({
			raw: true,
		}); */
		/* return User.findByPk(1, {
      raw: true
    }); */
		/* return User.findOne({
			where: {
				age: {
					[Op.or]: {
						[Op.lt]: 25,
						[Op.eq]: null,
					},
				},
			},
		}); */
		/* return User.findAndCountAll({
			raw: true,
			where: {
				username: 'admin',
				WittCodeRocks: true,
			},
		}); */
		return User.findAll();
	})
	.then(data => {
		console.log(data);
		// const { count, rows } = data;
		// console.log(count, rows);
		// console.log(data.toJSON());
	})
	.catch(err => console.log(err));

