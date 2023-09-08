import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const Connection = async () => {
  const URL = `mongodb+srv://naveen322meena:naveenmeena@assignment.fttfpa1.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true }); //mongoose.connect is a asyncronous function so that's why we are using await and async
    console.log("Server is successfully connected to mongodb");
  } catch (error) {
    console.log("server is not connected because of the error", error.message);
  }
};
export default Connection;
