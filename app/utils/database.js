import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://itohitoshi81:Hisyses01@cluster0.otixaxt.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Success: Connected to MongoDB');
  } catch {
    console.log('Failure: Unconnected to MongoDB');
    throw new Error();
  }
};

export default connectDB;
