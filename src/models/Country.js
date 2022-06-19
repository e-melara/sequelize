import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const Country = sequelize.define(
	'country',
	{
		countryName: {
			type: DataTypes.STRING,
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);

export const Capital = sequelize.define(
	'capital',
	{
		capitalName: {
			type: DataTypes.STRING,
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);

Country.hasOne(Capital, {});
Capital.belongsTo(Country, {});