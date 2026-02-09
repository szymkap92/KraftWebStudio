import { NextRequest, NextResponse } from "next/server";

/**
 * Mock contact-form endpoint.
 * In production, replace with an actual email/CRM integration
 * (e.g. SendGrid, Resend, Nodemailer, HubSpot).
 *
 * DSGVO note: personal data (name, email, message) must NOT be
 * logged to stdout in production. In development we log a masked
 * summary for debugging only.
 */

const isDev = process.env.NODE_ENV === "development";

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "***@***";
  return `${local[0]}***@${domain}`;
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // --- Validation ---
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "All fields are required and must be strings" },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must not exceed 5000 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // --- Dev-only masked logging ---
    if (isDev) {
      console.log(
        `[contact] ${new Date().toISOString()} | ${trimmedName} | ${maskEmail(trimmedEmail)}${trimmedPhone ? ` | tel: ${trimmedPhone.slice(0, 4)}***` : ""} | "${truncate(trimmedMessage, 50)}"`
      );
    }

    // TODO: integrate actual email transport here
    // e.g. await sendEmail({ to: OWNER_EMAIL, subject: ..., body: ... })

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
