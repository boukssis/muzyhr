"use server";

import { deliveryEnabled, serviceOptions } from "@/config/site";
import { contactSchema, toFieldErrors, type ContactState } from "@/lib/contact";

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = read(formData, "companyWebsite");
  if (honeypot) {
    return {
      status: "failed",
      message: "The form could not be submitted. Nothing was sent.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: read(formData, "name"),
    company: read(formData, "company"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    businessSize: read(formData, "businessSize"),
    service: read(formData, "service"),
    message: read(formData, "message"),
  });

  if (!parsed.success) {
    return { status: "invalid", fieldErrors: toFieldErrors(parsed.error) };
  }

  const openedAt = Number(read(formData, "openedAt"));
  const elapsed = Date.now() - openedAt;
  if (!Number.isFinite(openedAt) || elapsed < 1200 || elapsed > 1000 * 60 * 60 * 12) {
    return {
      status: "failed",
      message:
        "Please wait a moment, then submit the form again. Nothing was sent.",
    };
  }

  if (!deliveryEnabled()) {
    return {
      status: "demo",
      message:
        "This preview checked your form and then discarded it. Nothing was emailed, stored, or delivered to muzyhr.",
    };
  }

  const serviceLabel =
    serviceOptions.find((item) => item.id === parsed.data.service)?.label ??
    parsed.data.service;

  const text = [
    `Name: ${parsed.data.name}`,
    `Company: ${parsed.data.company}`,
    `Email: ${parsed.data.email}`,
    `Phone: ${parsed.data.phone || "Not provided"}`,
    `Business size: ${parsed.data.businessSize || "Not provided"}`,
    `Service: ${serviceLabel}`,
    "",
    parsed.data.message,
  ].join("\n");

  const subject = `muzyhr enquiry — ${parsed.data.company}`
    .replace(/[\r\n]+/g, " ")
    .slice(0, 120);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: parsed.data.email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      return {
        status: "failed",
        message:
          "The message could not be sent. Nothing was delivered. Please try again, or reach muzyhr on LinkedIn.",
      };
    }
  } catch {
    return {
      status: "failed",
      message:
        "The message could not be sent. Nothing was delivered. Please try again, or reach muzyhr on LinkedIn.",
    };
  }

  return {
    status: "sent",
    message:
      "Your message has been sent to muzyhr. This does not confirm when you will hear back.",
  };
}
