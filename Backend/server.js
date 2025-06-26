const express = require("express");
const cors = require("cors");
const uploadRoute = require("./upload");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use('/api', uploadRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
} )