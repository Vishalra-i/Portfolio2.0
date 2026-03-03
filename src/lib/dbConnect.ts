import mongoose, { Connection } from "mongoose";



const connection = {
    isConnected: false,
    db: null as Connection | null
};

export default async function dbConnect() {
   if(connection.isConnected) {
       console.log("Using existing connection");
       return
   } 
   try {
       const db = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}` || "")


       connection.isConnected  =  db?.connections[0].readyState ? true : false

       console.log("Mongodb connected")

   } catch (error) {
       console.log("Db connection failed ::" + error)
       process.exit(1)
   }
}