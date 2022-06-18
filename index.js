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
		return Student.findAll({
			attributes: ['name'],
			where: {
				[Op.or]: {
					favorite_class: 'Computer',
					subscribe_to_wittcode: true,
				},
			},
		});
	})
	.then(data => {
		data.forEach(e => console.log(e.toJSON()));
	})
	.catch(err => console.log(err));

