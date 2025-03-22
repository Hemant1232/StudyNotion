const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const CourseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
database.connect();

app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    maxAge: 14400,
  })
);

// File Upload Middleware (with limits)
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  })
);

cloudnairyconnect();

// Debugging Middleware
app.use((req, res, next) => {
  console.log("Incoming Request:", req.method, req.url);
  console.log("Request Body:", req.body);
  if (req.files) {
    console.log("Received Files:", req.files);
  }
  next();
});

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
