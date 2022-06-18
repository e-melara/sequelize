import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const Student = sequelize.define(
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

