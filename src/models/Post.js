import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

import { User } from './User.js';

export const Post = sequelize.define(
	'post',
	{
		message: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

User.hasMany(Post);
Post.belongsTo(User);
