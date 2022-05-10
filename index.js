import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  let returnString = "";
  for (let i = 0; i < req.body.string_to_cut.length; i++) {
    if ((i + 1) % 3 == 0) {
      console.log(req.body.string_to_cut.substring(i, i + 1));
      returnString += req.body.string_to_cut.substring(i, i + 1);
    }
  }
  res.send(
    new Object({
      returnString,
    })
  );
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
