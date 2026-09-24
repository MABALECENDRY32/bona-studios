import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "BONA Studios <onboarding@resend.dev>";

export async function sendNewInquiryEmail(inquiry) {
  const {
    id,
    name,
    email,
    company,
    project_type,
    budget,
    tech_stack = [],
    message,
  } = inquiry;

  const techList = tech_stack.length ? tech_stack.join(", ") : "—";

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;background:#0A0A0A;color:#FAFAFA;padding:32px;border-radius:12px;max-width:560px;">
      <h1 style="margin:0 0 4px;font-size:22px;">New inquiry 🔔</h1>
      <p style="color:#A1A1AA;margin:0 0 24px;font-size:14px;">
        Someone just submitted the contact form on BONA Studios.
      </p>

      <table style="width:100%;font-size:14px;border-collapse:collapse;">
        <tr><td style="color:#A1A1AA;padding:6px 0;width:130px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="color:#A1A1AA;padding:6px 0;">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:#F59E0B;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="color:#A1A1AA;padding:6px 0;">Company</td><td>${escapeHtml(company || "—")}</td></tr>
        <tr><td style="color:#A1A1AA;padding:6px 0;">Project</td><td>${escapeHtml(project_type || "—")}</td></tr>
        <tr><td style="color:#A1A1AA;padding:6px 0;">Budget</td><td>${escapeHtml(budget || "—")}</td></tr>
        <tr><td style="color:#A1A1AA;padding:6px 0;vertical-align:top;">Tech stack</td><td>${escapeHtml(techList)}</td></tr>
      </table>

      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #262626;">
        <div style="color:#A1A1AA;font-size:12px;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:8px;">Message</div>
        <div style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</div>
      </div>

      <p style="margin-top:32px;color:#666;font-size:12px;">
        Inquiry ID: ${id}
      </p>
    </div>
  `;

  const text = [
    `New inquiry from ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Project: ${project_type || "—"}`,
    `Budget: ${budget || "—"}`,
    `Tech stack: ${techList}`,
    "",
    message,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: process.env.NOTIFY_EMAIL,
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` · ${company}` : ""}`,
    html,
    text,
  });

  if (error) {
    console.error("[resend] failed to send", error);
    throw new Error("Email send failed");
  }

  return data;
}

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}