const mongoose=require("mongoose")

async function connectDb(){
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://database:123@cluster0.n3lgztl.mongodb.net/jobportaldb?retryWrites=true&w=majority")
    console.log("port 3000 running");
    // console.log("Db connected");

  } catch (error) {
   console.log(error,"Db error");
  }
}

module.exports={connectDb}