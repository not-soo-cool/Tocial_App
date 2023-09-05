const mongoose = require("mongoose");




const connectDatabase = () => {

    // console.log(process.env.DB_URI);
    mongoose.connect("mongodb+srv://singhsyashvendra:Mongo123@mern-projects.pn3jint.mongodb.net/?retryWrites=true&w=majority").then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err)=> console.log(err));
};

module.exports = connectDatabase