const express = require("express");
const app = express();
const port = process.env.PORT || 5050;
require("./db/connection");
app.use(express.json());

const Players = require("./model/players");

// app.get("/", (req, res) => {
//   res.send("welocmt");
// });

// app.post("/player", async (req, res) => {
//   try {
//     const user = new Players(req.body);
//     const createPlayer = await user.save();
//     res.send(createPlayer);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.get("/player", async (req, res) => {
//   try {
//     const users = await Players.find();
//     res.send(users);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.get("/player/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const pdata = await Players.findById(_id);
//     res.send(pdata);
//     console.log(pdata);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.patch("/player/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const pdata = await Players.findByIdAndUpdate(_id, req.body, { new: true });
//     res.send(pdata);
//     console.log(pdata);
//   } catch (e) {
//     res.send(e);
//   }
// });

app.delete("/player/:id", async (req, res) => {
  try {
    const users = await Players.findByIdAndDelete(req.params.id);
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log("server connected");
});
