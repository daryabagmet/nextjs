import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
	mongoose.set('strictQuery', true);

	if (connected) {
		console.log('Mongo DB is alredy connected...');
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI);
		connected = true;
		console.log('Mongo DB connected...');
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
