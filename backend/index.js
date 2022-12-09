import mongoose from "mongoose"
import app from './app'
import  config  from "./config/index"

//connecting to DB as soon as this file runs (USE OF IIFE  (self invoking function))

// (async () => {})()
(async () => {
    try {
        await mongoose.connect(config.MONGODB_URL)
        console.log("DB CONNECTED");

        app.on('error', (err) => {
            console.log("error: " , err);
        })
        const onListening = () =>{
            console.log(`Listening on ${config.PORT}`);
        }

        app.listen(config.PORT, onListening)
    } catch (err) {
        console.log("ERROR ", err );
        throw err
    }
})()

