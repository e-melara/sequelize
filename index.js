import { sequelize } from './src/models/db.js';
import { Customer, Product } from './src/models/index.js';

let customer, product;
sequelize
	.sync({ alter: true })
	.then(() => {
		return Customer.findOne({
			where: { customerName: 'WittCode' },
		});
	})
	.then(data => {
		customer = data;
		return Product.findAll();
	})
	.then(products => {
		return customer.addProducts(products);
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => console.log(err));

