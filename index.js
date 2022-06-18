const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('postgres', 'postgres', '1234567890', {
	host: 'localhost',
	dialect: 'postgres',
});

const User = sequelize.define(
	'user',
	{
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4, 6],
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.INTEGER,
			defaultValue: 21,
		},
		WittCodeRocks: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
	}
);
// tom

User.sync({ alter: true })
	.then(() => {
		/* return User.update(
			{ age: 20 },
			{
				where: {
					age: {
						[Op.lt]: 45,
					},
				},
			}
		); */
		/* return User.findOne({
			attributes: [[sequelize.fn('COUNT', sequelize.col('age')), 'count']],
			where: {
				age: {
					[Op.eq]: 20,
				},
			},
		}); */
		return User.count('*', {
			where: {
				age: {
					[Op.eq]: 20,
				},
			},
		});
	})
	.then(data => {
		console.log(data);
		/* data.forEach(function (element) {
			console.log(element.toJSON());
		}); */
	})
	.catch(error => {
		console.log(error);
	});

