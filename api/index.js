const express = require("express");
const userRoute = require("./routes/user");

const PORT = 5000
const app = express();

app.use(express.json())
app.use("/api/user", userRoute);

app.listen(PORT, () => console.log(`Server is running en port ${PORT}`))