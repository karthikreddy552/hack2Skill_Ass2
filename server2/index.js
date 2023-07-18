const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const cors = require("cors");
const videoRouter = require("./routers/videos.router");
const searchRouter = require("./routers/search.router");
const connectDB = require("./config/connectDB.config");
const fetchVideo_storeVideo = require("./database/fetchVideos.database");

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}))


app.get("/", (req, res) => {
    res.send("Hello, world! Welcome to YouTube backend API");
})

app.use("/api", videoRouter);
app.use("/api", searchRouter);


app.listen(PORT, async () => {
    await connectDB().then(() => {
        fetchVideo_storeVideo();
    })
    console.log(`server running on http://localhost:${process.env.PORT}`);
})