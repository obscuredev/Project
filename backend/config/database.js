const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://userone:checkpass1@briansclub.3wcw4vh.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((cnct) => {
    console.log("Database connected successfully");
    console.log(`Hosting at Mongodb : ${cnct.connection.host}`);
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.log(error.message);
    process.exit(1);
  });
