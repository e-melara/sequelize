import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const User = sequelize.define(
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
			get() {
				const rawValue = this.getDataValue('username');
				return rawValue.toUpperCase();
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

