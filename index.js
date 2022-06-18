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
		return User.findAll({
			// attributes: ['username', 'password']
			// attributes: [['username', 'myName'], ['password', 'myPassword']]
			// attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'sum']],
			// attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'avg']],
			// attributes: [[sequelize.fn('MAX', sequelize.col('age')), 'max']],
			// attributes: { excludes: ['password'] },
			// where: { age: 25 }
			// limit: 2
			/* attributes: [
				'username',
				[sequelize.fn('SUM', sequelize.col('age')), 'sum_age'],
			],
      group: 'username' */
			// where: {
			// 	// [Op.or]: { username: 'admin', age: 25 },
			//   age: {
			//     // [Op.gt] : 25
			//     // [Op.lt] : 25
			//   }
			// },
			// where: sequelize.where(
			// 	sequelize.fn('char_length', sequelize.col('username')), 5
			// ),
		});
	})
	.then(data => {
		data.forEach(function (element) {
			console.log(element.toJSON());
		});
	})
	.catch(() => {});

