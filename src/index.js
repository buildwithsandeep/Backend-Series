// import connectDB from './db/index.js';
// import express from 'express';

// const app = express();

// // 🔍 debug ke liye
// console.log("ENV CHECK:", process.env.MONGODB_URI);

// // 🔥 DB connect
// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is running at port : ${process.env.PORT || 8000}`);
        
//     })
// })
// .catch((err) => {
//     console.log('MONGO DB Connection failed !!! ' , err);
    
// })

import connectDB from './db/index.js';
import app from './app.js';   // ✅ yaha change

// 🔍 debug ke liye
console.log("ENV CHECK:", process.env.MONGODB_URI);

// 🔥 DB connect
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log('MONGO DB Connection failed !!! ', err);
});