const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./Routes/userRouter');
const postRouter = require('./Routes/postRouter')
const cors = require("cors");
const app = express();
app.use(express.json());

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://LeaderOfMeow:qwezxc!!%40!@cluster1.fvlhmya.mongodb.net/Blog");
  console.log("mongoose connected")
}
app.use(cors());
// user Router
app.use('/api/user',userRouter.router);
app.use('/api/post',postRouter.router);
app.listen(5000, () => {
  console.log("server running at 5000");
});
