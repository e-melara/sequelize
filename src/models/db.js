import Sequelize from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', '1234567890', {
	host: 'localhost',
	dialect: 'postgres',
});