"use client";

import { Suspense, useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitInquiry } from "@/app/contact/actions";
import { buttonClasses } from "@/components/button-styles";
import { businessSizes, serviceOptions } from "@/config/site";
import { initialContactState, type ContactInput } from "@/lib/contact";

const fields: { name: keyof ContactInput; label: string; optional?: boolean }[] = [
  { name: "name", label: "Name" },
  { name: "company", label: "Company" },
  { name: "email", label: "Work email" },
  { name: "phone", label: "Phone", optional: true },
  { name: "businessSize", label: "Business size", optional: true },
  { name: "service", label: "Service of interest" },
  { name: "message", label: "Message" },
];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-danger">
      {message}
    </p>
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

  return (
    <ServiceSelectField
      error={error}
      value={service}
      onChange={setService}
    />
  );
}

function ServiceSelectField({
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
      <label htmlFor="service" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
        Service of interest
      </label>
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
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialContactState,
  );

  useEffect(() => {
    if (state.status !== "invalid" || !state.fieldErrors) return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) document.getElementById(first)?.focus();
  }, [state]);

  const errorFor = (name: keyof ContactInput) => state.fieldErrors?.[name];

  return (
    <form
      action={formAction}
      className="space-y-7"
      noValidate
      aria-label="Enquiry form"
      onFocus={(event) => rememberOpenedAt(event.currentTarget)}
      ref={(node) => {
        if (node) rememberOpenedAt(node);
      }}
    >
      {!deliveryEnabled ? (
        <div className="border border-taupe/50 bg-stone px-4 py-4 text-sm leading-relaxed" role="note">
          <p className="font-semibold text-ink">Preview only — messages are not delivered</p>
          <p className="mt-1 text-ink-soft">
            This form checks that an enquiry is complete, then discards it. Nothing is emailed or stored. Please don’t include confidential employee information.
          </p>
        </div>
      ) : null}

      {state.status === "invalid" && state.fieldErrors ? (
        <div role="alert" className="border border-danger/30 bg-white px-4 py-3 text-sm text-danger">
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

      {state.status === "demo" || state.status === "sent" || state.status === "failed" ? (
        <div
          role={state.status === "failed" ? "alert" : "status"}
          className={`border px-4 py-4 text-sm leading-relaxed ${
            state.status === "sent"
              ? "border-ink/15 bg-white text-ink"
              : state.status === "failed"
                ? "border-danger/30 bg-white text-danger"
                : "border-taupe/50 bg-stone text-ink"
          }`}
        >
          <p className="font-semibold">
            {state.status === "sent"
              ? "Message sent"
              : state.status === "demo"
                ? "Nothing was sent"
                : "Message not sent"}
          </p>
          {state.message ? <p className="mt-1">{state.message}</p> : null}
        </div>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2">
        {fields.slice(0, 4).map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
              {field.label}
              {field.optional ? <span className="ml-2 font-medium normal-case tracking-normal text-ink-soft">Optional</span> : null}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.name === "email" ? "email" : field.name === "phone" ? "tel" : "text"}
              inputMode={field.name === "email" ? "email" : field.name === "phone" ? "tel" : undefined}
              autoComplete={
                field.name === "name"
                  ? "name"
                  : field.name === "company"
                    ? "organization"
                    : field.name === "email"
                      ? "email"
                      : field.name === "phone"
                        ? "tel"
                        : undefined
              }
              maxLength={field.name === "name" ? 80 : field.name === "company" ? 120 : field.name === "email" ? 120 : 40}
              aria-required={field.optional ? undefined : true}
              aria-invalid={errorFor(field.name) ? true : undefined}
              aria-describedby={errorFor(field.name) ? `${field.name}-error` : undefined}
              className="field"
            />
            <FieldError id={`${field.name}-error`} message={errorFor(field.name)} />
          </div>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="businessSize" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
            Business size
            <span className="ml-2 font-medium normal-case tracking-normal text-ink-soft">Optional</span>
          </label>
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
        <Suspense fallback={<ServiceSelectField error={errorFor("service")} value="" onChange={() => undefined} />}>
          <ServiceSelect error={errorFor("service")} />
        </Suspense>
      </div>

      <div>
        <label htmlFor="message" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-taupe-deep">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          aria-required="true"
          aria-invalid={errorFor("message") ? true : undefined}
          aria-describedby={errorFor("message") ? "message-error" : undefined}
          className="field resize-y"
        />
        <FieldError id="message-error" message={errorFor("message")} />
      </div>

      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input id="openedAt" type="hidden" name="openedAt" defaultValue="" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className={buttonClasses("primary", "w-full sm:w-auto")}
          disabled={pending}
          aria-busy={pending}
        >
          {pending ? "Sending…" : "Request a conversation"}
        </button>
        <p className="text-sm text-ink-soft">
          {deliveryEnabled
            ? "Share only what you are comfortable discussing."
            : "Demonstration mode is on. Submitting will not deliver this message."}
        </p>
      </div>
    </form>
  );
}
