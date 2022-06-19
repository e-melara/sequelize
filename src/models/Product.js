import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

import { Customer } from './Customer.js';

export const Product = sequelize.define(
	'product',
	{
		productName: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	}
);

export const ProductCustomer = sequelize.define(
	'product_customer',
	{
		productCustomerId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		timestamps: false,
	}
);

Product.belongsToMany(Customer, { through: ProductCustomer });
Customer.belongsToMany(Product, { through: ProductCustomer });

