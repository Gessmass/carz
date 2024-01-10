const app = require("../src/App")
require("dotenv").config();

const port = parseInt(4242);

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Backend server is listening on ${port}`)
  }
})