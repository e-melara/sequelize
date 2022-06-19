import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const Customer = sequelize.define(
	'customer',
	{
		customerName: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	}
);

