import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import inquiries from "./routes/inquiries.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true);
      const ok =
        origin === "http://localhost:5173" ||
        /^https:\/\/bona-studios(-[a-z0-9]+)?\.vercel\.app$/.test(origin);
      cb(ok ? null : new Error("CORS blocked"), ok);
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_, res) => res.json({ ok: true, service: "bona-studios-api" }));

app.use("/api/inquiries", inquiries);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`BONA Studios API running on http://localhost:${PORT}`);
});