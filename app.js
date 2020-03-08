const express = require("express");
const app = express();

/* Getting the routes */
const textsRoutes = require("./src/routes/texts.routes");

/* Telling express to use those routes */
app.use("/", textsRoutes);

/* Checking if there is a predefined port for the server to run. If isn't, run on 8088 */
const port = process.env.port || 8088;

/* Listening on port 8088 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
