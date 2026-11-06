"use client";

import { Suspense, useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { submitInquiry } from "@/app/contact/actions";
import { buttonClasses } from "@/components/button-styles";
import { businessSizes, serviceOptions } from "@/config/site";
import { initialContactState, type ContactInput } from "@/lib/contact";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-danger">
      {message}
    </p>
  );
}

function Label({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
      {children}
      {optional ? <span className="ml-2 font-normal text-taupe-deep">Optional</span> : null}
    </label>
  );
}

function rememberOpenedAt(form: HTMLFormElement) {
  const field = form.elements.namedItem("openedAt");
  if (field instanceof HTMLInputElement && !field.value) {
    field.value = String(Date.now());
  }
}

function ServiceSelect({ error }: { error?: string }) {
  const params = useSearchParams();
  const requested = params.get("service") ?? "";
  const valid = serviceOptions.some((item) => item.id === requested) ? requested : "";
  const [service, setService] = useState(valid);

  return <ServiceField error={error} value={service} onChange={setService} />;
}

function ServiceField({
  error,
  value,
  onChange,
}: {
  error?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <Label htmlFor="service">Service interested in</Label>
      <select
        id="service"
        name="service"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "service-error" : undefined}
        className="field select"
      >
        <option value="">Select a service</option>
        {serviceOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldError id="service-error" message={error} />
    </div>
  );
}

export function ContactForm({ deliveryEnabled }: { deliveryEnabled: boolean }) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialContactState);

  useEffect(() => {
    if (state.status !== "invalid" || !state.fieldErrors) return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) document.getElementById(first)?.focus();
  }, [state]);

  const errorFor = (name: keyof ContactInput) => state.fieldErrors?.[name];

  return (
    <form
      action={formAction}
      className="relative space-y-5 border border-ink/10 bg-white p-5 sm:p-8"
      noValidate
      aria-label="Enquiry form"
      onFocus={(event) => rememberOpenedAt(event.currentTarget)}
      ref={(node) => {
        if (node) rememberOpenedAt(node);
      }}
    >
      {state.status === "invalid" && state.fieldErrors ? (
        <div role="alert" className="border border-danger/30 bg-ivory px-4 py-3 text-sm text-danger">
          <p className="font-semibold">Please correct the fields below.</p>
          <ul className="mt-2 space-y-1">
            {Object.entries(state.fieldErrors).map(([key, message]) =>
              message ? (
                <li key={key}>
                  <a href={`#${key}`} className="underline underline-offset-2">
                    {message}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ) : null}

      {state.status === "sent" || state.status === "failed" || state.status === "demo" ? (
        <div
          role={state.status === "failed" || state.status === "demo" ? "alert" : "status"}
          className={`border px-4 py-4 text-sm leading-relaxed ${
            state.status === "sent"
              ? "border-ink/15 bg-ivory text-ink"
              : "border-danger/30 bg-ivory text-danger"
          }`}
        >
          <p className="font-semibold">
            {state.status === "sent" ? "Message sent" : "Nothing was sent"}
          </p>
          {state.message ? <p className="mt-1">{state.message}</p> : null}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={errorFor("name") ? true : undefined}
            aria-describedby={errorFor("name") ? "name-error" : undefined}
            className="field"
          />
          <FieldError id="name-error" message={errorFor("name")} />
        </div>
        <div>
          <Label htmlFor="company">Company name</Label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            placeholder="Your company"
            aria-required="true"
            aria-invalid={errorFor("company") ? true : undefined}
            aria-describedby={errorFor("company") ? "company-error" : undefined}
            className="field"
          />
          <FieldError id="company-error" message={errorFor("company")} />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={120}
            placeholder="name@company.com"
            aria-required="true"
            aria-invalid={errorFor("email") ? true : undefined}
            aria-describedby={errorFor("email") ? "email-error" : undefined}
            className="field"
          />
          <FieldError id="email-error" message={errorFor("email")} />
        </div>
        <div>
          <Label htmlFor="phone" optional>
            Phone
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="Optional"
            aria-invalid={errorFor("phone") ? true : undefined}
            aria-describedby={errorFor("phone") ? "phone-error" : undefined}
            className="field"
          />
          <FieldError id="phone-error" message={errorFor("phone")} />
        </div>
        <div>
          <Label htmlFor="businessSize" optional>
            Business size
          </Label>
          <select
            id="businessSize"
            name="businessSize"
            defaultValue=""
            aria-invalid={errorFor("businessSize") ? true : undefined}
            aria-describedby={errorFor("businessSize") ? "businessSize-error" : undefined}
            className="field select"
          >
            <option value="">Select a range</option>
            {businessSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <FieldError id="businessSize-error" message={errorFor("businessSize")} />
        </div>
        <Suspense fallback={<ServiceField error={errorFor("service")} value="" onChange={() => undefined} />}>
          <ServiceSelect error={errorFor("service")} />
        </Suspense>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          placeholder="Where do people operations need more structure?"
          aria-required="true"
          aria-invalid={errorFor("message") ? true : undefined}
          aria-describedby={errorFor("message") ? "message-error" : undefined}
          className="field"
        />
        <FieldError id="message-error" message={errorFor("message")} />
      </div>

      <div className="pointer-events-none absolute h-px w-px overflow-hidden" aria-hidden="true">
        <input className="h-px w-px border-0 p-0" name="companyWebsite" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input id="openedAt" type="hidden" name="openedAt" defaultValue="" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className={buttonClasses("primary", "w-full sm:w-auto")}
          disabled={pending}
          aria-busy={pending}
        >
          {pending ? "Sending…" : "Request a conversation"}
          {pending ? null : (
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
        {deliveryEnabled ? null : (
          <p className="text-sm leading-relaxed text-ink-soft">
            Email isn’t connected on this preview, so a submission is not delivered. LinkedIn is beside the form if you want to write directly.
          </p>
        )}
      </div>
    </form>
  );
}
