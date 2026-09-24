const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function submitInquiry(payload) {
  const res = await fetch(`${API_URL}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
 
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.errors?.join(", ") || data.error || "Submission failed");
  }
  return data;
  }