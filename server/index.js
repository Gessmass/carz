const app = require("./app");
require("dotenv").config({ path: '../.env' });


const port = parseInt(process.env.SERVER_PORT) ?? 4242;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Backend server is listening on ${port}`);
  }
});
