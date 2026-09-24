import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import inquiries from "./routes/inquiries.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const allowedOrigins = [
  "http://localhost:5173",
  "https://bona-studios.vercel.app",
  "https://bona-studios-c2jk7821a-bona20.vercel.app",
  process.env.CLIENT_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      // allow no-origin requests (Postman, curl, server-to-server)
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  })
);

const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_, res) => res.json({ ok: true, service: "bona-studios-api" }));

app.use("/api/inquiries", inquiries);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`BONA Studios API running on http://localhost:${PORT}`);
});