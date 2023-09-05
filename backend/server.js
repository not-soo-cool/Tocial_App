const app = require("./app");
// const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dcq3gtqtn', 
//   api_key: '997367811343619', 
//   api_secret: 'LpF8WQaCtheG-0GCb8tDawFN3x4' 
// });


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});