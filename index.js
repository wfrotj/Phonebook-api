import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (req, res) => {
  res.send("Hi guys");
});

app.listen(config.PORT, () => {
  console.log(`The server is now running on port: ${config.PORT}`);
});
