import express from "express";
import { supabase } from "../lib/supabase.js";
import { sendNewInquiryEmail } from "../lib/email.js";

const router = express.Router();

/* -------- validation -------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = [];
  const {
    name = "",
    email = "",
    company = "",
    projectType = "",
    budget = "",
    techStack = [],
    message = "",
  } = body;

  if (!name.trim() || name.trim().length < 2) errors.push("Name is required");
  if (!EMAIL_RE.test(email)) errors.push("Valid email is required");
  if (!message.trim() || message.trim().length < 10)
    errors.push("Message must be at least 10 characters");
  if (!Array.isArray(techStack)) errors.push("techStack must be an array");

  return {
    errors,
    clean: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim() || null,
      project_type: projectType || null,
      budget: budget || null,
      tech_stack: techStack,
      message: message.trim(),
    },
  };
}

/* -------- POST /api/inquiries -------- */
router.post("/", async (req, res, next) => {
  try {
    const { errors, clean } = validate(req.body);
    if (errors.length) return res.status(400).json({ errors });

    const { data, error } = await supabase
      .from("inquiries")
      .insert(clean)
      .select("*")
      .single();

    if (error) throw error;

    sendNewInquiryEmail(data).catch((err) =>
      console.error("[notify] failed:", err.message)
    );

    res.status(201).json({ ok: true, id: data.id, createdAt: data.created_at });
  } catch (err) {
    next(err);
  }
});

/* -------- GET /api/inquiries (admin — protect later) -------- */
router.get("/", async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    res.json({ count: data.length, inquiries: data });
  } catch (err) {
    next(err);
  }
});

export default router;