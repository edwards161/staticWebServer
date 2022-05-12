const express = require("express");
const app = express();
// anytime the app is called, run it with the express method. 
// express listens on a port number. 
// with the .use method we can add something to the app. .use can call an optional arguement

app.use("/static", express.static("public"));

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
//listen takes two arguments, a port (5000) and a callback function. DELETE

// node src/server.js to run
// http://localhost:5000/static in web browser




