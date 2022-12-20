const mongoose = require("mongoose");

// add your own url of mongoDB here.
const url = "mongodb+srv://Mahir:<password>@cluster0.7ftzehg.mongodb.net/stackoverflow";
  
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
