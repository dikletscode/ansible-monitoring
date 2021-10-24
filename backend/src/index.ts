import dotenv from "dotenv";
dotenv.config();
import app from "./setup";

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
