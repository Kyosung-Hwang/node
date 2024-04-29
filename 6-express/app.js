import express from "express";
const app = express();

// chapter 1
// app.get("/sky/:id", (req, res, next) => {
//   // console.log(req.path);
//   // console.log(req.header);
//   console.dir(req.header);
//   console.log(req.params);
//   console.log(req.query);
//   // http://localhost:8080/sky/kevin/?keyword=hello
//   console.log("get");
//   // res.send("hi!");
//   // res.json({ name: "kevin" });
//   // res.sendStatus(400);

//   res.setHeader("key3", "value3");
//   res.sendStatus(201).send("created");
// });

// chatper 2
// app.all("/api", (req, res, next) => {
//   console.log("all");
//   next();
// });

// app.use("/blue", (req, res, next) => {
//   console.log("use");
//   next();
// });

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("first");
//     next("route");
//   },
//   (req, res, next) => {
//     console.log("first 2");
//     next();
//   }
// );

// app.get("/", (req, res, next) => {
//   console.log("second");
// });

// app.use((req, res, next) => {
//   res.status(404).send("Not available! @_@");
// });

// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send("Sorry, try later!");
// });

// chatper 3
// app.use(express.json());

// app.post("/", (req, res, next) => {
//   console.log(req.body);
// });

// router

app.use(express.json()); // REST API, BODY
app.use(express.urlencoded({ extended: false })); // HTML Form => Body
app.use(express.static);
app.listen(8080);
