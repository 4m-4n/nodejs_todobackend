import mongoose from "mongoose";
export const connectdb = () => {
    mongoose.connect(process.env. MONGO_URI, {     //connection to database
        dbName: "backendapi",
    }).then((c) => console.log(`database coonected with ${c.connection.host}`));
}
