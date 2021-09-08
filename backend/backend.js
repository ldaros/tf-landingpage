const express = require("express");
const nedb = require("nedb");
const cors = require("cors");

// Set up express
const app = express();
app.use(cors());

app.listen(3000, () => console.log("Listening at port 3000"));
app.use(express.static("backend/public"));
app.use(express.json({ limit: "500kb" }));

// Set up db
const database = new nedb("backend/database.db");
database.loadDatabase();

// Handle post requests
app.post("/api", (request, response) => {
  console.log("Request Got!");
  const data = request.body;
  console.log(data);
  database.insert(data);

  response.json({
    status: 200,
    data: JSON.stringify(request.body),
  });
});

// Handle get requests
app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    response.json(data);
  });
});
