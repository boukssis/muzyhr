import { z } from "zod";
import { businessSizes, serviceOptions, type ServiceId } from "@/config/site";

const serviceIds = serviceOptions.map((item) => item.id) as [
  ServiceId,
  ...ServiceId[],
];

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(80, "Name must be 80 characters or fewer."),
  company: z
    .string()
    .min(2, "Please enter your company name.")
    .max(120, "Company name must be 120 characters or fewer."),
  email: z
    .string()
    .min(3, "Please enter your work email.")
    .max(120, "Email must be 120 characters or fewer.")
    .email("Please enter a valid work email."),
  phone: z
    .string()
    .max(40, "Phone number must be 40 characters or fewer.")
    .refine(
      (value) => value === "" || /^[+()\d\s.-]{7,40}$/.test(value),
      "Please enter a valid phone number, or leave the field blank.",
    ),
  businessSize: z
    .string()
    .refine(
      (value) =>
        value === "" || (businessSizes as readonly string[]).includes(value),
      "Please select a business size from the list.",
    ),
  service: z.enum(serviceIds, "Please select a service."),
  message: z
    .string()
    .min(20, "Please share a little more detail — at least a sentence.")
    .max(2000, "Message must be 2,000 characters or fewer."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "invalid" | "demo" | "sent" | "failed";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string>>;
};

export const initialContactState: ContactState = { status: "idle" };

export function toFieldErrors(error: z.ZodError) {
  const fieldErrors: ContactState["fieldErrors"] = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fieldErrors[key as keyof ContactInput]) {
      fieldErrors[key as keyof ContactInput] = issue.message;
    }
  }
  return fieldErrors;
}
