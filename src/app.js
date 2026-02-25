
import "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import postsRoute from "./routes/posts.route.js"
import authRoutes from "./routes/auth.route.js"

const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions))
app.use(express.json()); // Middleware to parse JSON bodies
app.get("/", (req, res) => {
    res.send("Blog Post API - Welcome!");
});

app.use("/api/post", postsRoute);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
