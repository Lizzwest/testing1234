const AppRouter = require("./routes/AppRouter");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const Pusher = require("pusher");
const connection = require("./db/connection");
const Schema = require("./db/schema");
// app config
const PORT = process.env.PORT || 3012;
const app = express();

// const pusher = new Pusher({
//   appId: "1107606",
//   key: "c1fc82a16b29639631a6",
//   secret: "d62e0950f7de5677bd52",
//   cluster: "us2",
//   useTLS: true,
// });
// middleware
app.use(logger("dev"));
// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db replica set stuff
// const connection_url =
//   "mongodb+srv://matic:itvCu819cDqb79KM@instaclone.vu2tt.mongodb.net/instaclone?retryWrites=true&w=majority";
// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useFindAndModify: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// mongoose.connection.once("open", () => {
//   console.log("DB Connected");
//   const changeStream = mongoose.connection.collection("posts").watch();
//   changeStream.on("change", (change) => {
//     console.log("CHS Triggered on pusher...");
//     console.log(change);
//     console.log("End of Change");

//     if (change.operationType === "insert") {
//       console.log("Triggering Pusher IMG UPLOAD");

//       const postDetails = change.fullDocument;
//       pusher.trigger("posts", "inserted", {
//         user: postDetails.user,
//         caption: postDetails.caption,
//         image: postDetails.image,
//       });
//     } else {
//       console.log("Unknown Trigger");
//     }
//   });
// });

// API Routes
app.get("/", (req, res) => res.status(200).send("yoooo it works"));
app.use("/api", AppRouter);
// app.post("/upload", (req, res) => {
//   const body = req.body;
//   dbModel.create(body, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });
// app.get("/sync", (req, res) => {
//   Schema.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });
// listen
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`App listening on port: ${PORT}`);
  } catch (error) {
    throw new Error("Connection Error");
  }
});
