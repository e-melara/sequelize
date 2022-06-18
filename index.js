const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

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

User.sync({ alter: true })
	.then(() => {
		/* const user = User.build({
			username: 'admin',
			password: 'admin',
			age: 24,
			WittCodeRocks: true,
		});
		return user.save(); */
		/* return User.create({
      username: 'superadmin',
      password: 'admin',
      age: 40,
      WittCodeRocks: true,
    }) */
		/* return User.findAll({
      attributes: ['username', 'password', 'age', 'WittCodeRocks'],
    }); */
		//return User.findAll({
		/* attributes: [[sequelize.fn('max', sequelize.col('age')), 'max_age']], */
		/* attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'SUMA']], */
		/* attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'AVG']], */
		/* attributes: { exclude: ['password'] }, */
		//});
		/* return User.bulkCreate(
			[
				{
					username: 'tom',
					age: 25,
					password: '12345',
				},
				{
					username: 'Mike',
					age: 31,
					password: '123450',
				},
			],
			{ validate: true }
		); */
	})
	.then(data => {
		d/* ata.forEach(function (element) {
			console.log(element.toJSON());
		}); */
	})
	.catch(() => {});

