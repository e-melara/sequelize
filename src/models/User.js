import zlib from 'zlib';
import bcrypt from 'bcryptjs';
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
			set(value) {
				const salt = bcrypt.genSaltSync(12);
				const hash = bcrypt.hashSync(value, salt);
				this.setDataValue('password', hash);
			},
		},
		age: {
			type: DataTypes.INTEGER,
			defaultValue: 21,
			validate: {
				isOldEnough: function (value) {
					if (value < 21) {
						throw new Error('You are not old enough');
					}
				},
			},
		},
		WittCodeRocks: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		description: {
			type: DataTypes.STRING,
			set(value) {
				const compressed = zlib.deflateSync(value).toString('base64');
				this.setDataValue('description', compressed);
			},
			get() {
				const value = this.getDataValue('description');
				const uncompressed = zlib.inflateSync(Buffer.from(value, 'base64'));
				return uncompressed.toString();
			},
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
	}
);

