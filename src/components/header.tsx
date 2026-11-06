"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLockup } from "@/components/brand-lockup";
import { buttonClasses } from "@/components/button-styles";
import { nav, type NavHref } from "@/config/site";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function isActive(pathname: string, href: NavHref) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const reduce = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const titleId = useId();
  const isClient = useIsClient();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const header = headerRef.current;
    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) buttonRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const locked = document.querySelectorAll("header, #content, footer, aside");
    const previousOverflow = document.body.style.overflow;
    const previousTouch = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    locked.forEach((node) => node.setAttribute("inert", ""));
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouch;
      document.querySelectorAll("header, #content, footer, aside").forEach((node) => {
        node.removeAttribute("inert");
      });
    };
  }, [open]);

  return (
    <header ref={headerRef} className="site-header sticky top-0 z-40">
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-[80rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <BrandLockup priority />
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-taupe-deep transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={buttonClasses("primary", "header-cta")}
          >
            Let’s talk HR
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isClient
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  id="mobile-navigation"
                  ref={panelRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={titleId}
                  className="mobile-nav"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex h-[var(--header-h)] items-center justify-between border-b border-ink/10 px-5 sm:px-8">
                    <BrandLockup />
                    <button
                      ref={closeRef}
                      type="button"
                      className="grid h-11 w-11 place-items-center rounded-full"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <span className="relative block h-4 w-4" aria-hidden="true">
                        <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-ink" />
                        <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-ink" />
                      </span>
                    </button>
                  </div>
                  <nav className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-6 sm:px-10" aria-label="Mobile">
                    <p id={titleId} className="sr-only">
                      Menu
                    </p>
                    <ol>
                      {nav.map((item, index) => {
                        const active = isActive(pathname, item.href);
                        return (
                          <motion.li
                            key={item.href}
                            initial={reduce ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: reduce ? 0 : 0.4,
                              delay: reduce ? 0 : 0.05 + index * 0.045,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="border-b border-ink/10"
                          >
                            <Link
                              href={item.href}
                              aria-current={active ? "page" : undefined}
                              className="flex min-h-14 items-baseline gap-4 py-3"
                              onClick={(event) => {
                                event.preventDefault();
                                setOpen(false);
                                router.push(item.href);
                              }}
                            >
                              <span className="w-8 text-[0.72rem] font-semibold tracking-[0.14em] text-taupe-deep">
                                {item.number}
                              </span>
                              <span
                                className={`font-display text-[clamp(2rem,7vw,2.75rem)] font-semibold tracking-[-0.04em] ${
                                  active ? "text-taupe-deep" : "text-ink"
                                }`}
                              >
                                {item.label}
                              </span>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ol>
                  </nav>
                  <div className="px-6 pb-8 sm:px-10">
                    <p className="mb-4 text-sm text-taupe-deep">People operations, made simple.</p>
                    <Link
                      href="/contact"
                      className={buttonClasses("primary", "w-full")}
                      onClick={(event) => {
                        event.preventDefault();
                        setOpen(false);
                        router.push("/contact");
                      }}
                    >
                      Let’s talk HR
                    </Link>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
