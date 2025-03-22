const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const CourseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
database.connect();

app.use(express.json());
app.use(cookieParser());

// Updated CORS configuration
const allowedOrigins = ['https://study-notion-puce-one.vercel.app/'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin like mobile apps or curl requests
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // If using credentials like cookies
    maxAge: 14400,
}));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudnairyconnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", CourseRoutes);
app.use("/api/v1/contact", require("./routes/ContactUs"));


app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "StudyNotion backend is successfully running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
