const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('postgres', 'postgres', '1234567890', {
	host: 'localhost',
	dialect: 'postgres',
});

const Student = sequelize.define(
	'student',
	{
		student_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4, 20],
			},
		},
		favorite_class: {
			type: DataTypes.STRING(25),
			defaultValue: 'Computer',
		},
		school_year: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		subscribe_to_wittcode: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

Student.sync()
	.then(() => {
		console.log('Model synced');
		Student.bulkCreate([
			{
				name: 'WittCode',
				school_year: 12,
			},
			{
				name: 'Michael',
				school_year: 11,
				favorite_class: 'Basket Weaving',
				subscribe_to_wittcode: false,
			},
			{
				name: 'Freddie',
				school_year: 10,
				favorite_class: 'Math',
				subscribe_to_wittcode: true,
			},
			{
				name: 'Spencer',
				school_year: 6,
				favorite_class: 'Music',
				subscribe_to_wittcode: false,
			},
		]);
	})
	.catch(err => console.log(err));

