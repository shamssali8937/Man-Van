"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { Button } from "../ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close on Escape and handle focus trapping
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!mobileMenuOpen) return;

      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [mobileMenuOpen],
  );

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // Focus the first item in the menu
      setTimeout(() => {
        const firstFocusable =
          menuRef.current?.querySelector<HTMLElement>("a, button");
        firstFocusable?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, handleKeyDown]);

  return (
    <>
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-red focus:text-white focus:font-display focus:italic focus:font-black focus:uppercase focus:tracking-wider focus:border-2 focus:border-brand-navy focus:shadow-cargo focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Utility Corridor Bar */}
      <div className="bg-brand-navy text-white text-[0.6875rem] font-mono border-b border-brand-navy-950 py-1.5 px-4 hidden sm:block select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-wider text-brand-paper-light">
              THE ROUTE: NATIONWIDE UK LOGISTICS &amp; REMOVALS
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-white/70">
              OPERATING: {siteConfig.openingHours.split("[")[0]}
            </span>
            <a
              href={siteConfig.telHref}
              className="text-white hover:text-brand-red font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <svg
                className="w-3 h-3 text-brand-red"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span>{siteConfig.telephone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-30 bg-brand-paper/95 backdrop-blur-md border-b-2 border-brand-navy shadow-sm transition-[padding,box-shadow] duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
              aria-label="AB Removals – Return to homepage"
            >
              <div className="relative w-36 h-12 sm:w-44 sm:h-14 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/brand/logo.svg"
                  alt="AB Removals – Man and Van"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3 py-1.5 font-display italic font-extrabold uppercase text-sm tracking-wider transition-colors duration-100 rounded-xs select-none ${
                      isActive
                        ? "text-brand-red bg-brand-red/10 border-b-2 border-brand-red"
                        : "text-brand-navy hover:text-brand-red hover:bg-brand-navy/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Block (Phone & Quote CTA) */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={siteConfig.telHref}
                className="flex flex-col text-right group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
                aria-label={`Call direct: ${siteConfig.telephone}`}
              >
                <span className="font-mono text-[0.625rem] font-bold text-brand-navy/60 uppercase tracking-widest">
                  DIRECT LINE
                </span>
                <span className="font-display italic font-black text-sm xl:text-base text-brand-navy group-hover:text-brand-red transition-colors">
                  {siteConfig.telephone}
                </span>
              </a>

              <Button
                variant="primary"
                size="md"
                href="/quote"
                className="shadow-cargo-sm"
              >
                GET A QUOTE
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/quote"
                className="sm:hidden bg-brand-red text-white font-display italic font-black uppercase text-xs px-3 py-1.5 border border-brand-red-700 rounded-xs shadow-cargo-sm"
              >
                QUOTE
              </Link>

              <button
                ref={toggleButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={
                  mobileMenuOpen
                    ? "Close main navigation"
                    : "Open main navigation"
                }
                className="p-2 border-2 border-brand-navy bg-white text-brand-navy rounded-xs shadow-cargo-sm hover:bg-brand-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy active:translate-y-0.5"
              >
                <span className="sr-only">Menu</span>
                {mobileMenuOpen ? (
                  // Close Icon
                  <svg
                    className="w-6 h-6 stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className="w-6 h-6 stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
        >
          {/* Backdrop with Click Outside */}
          <div
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            ref={menuRef}
            className="relative w-full max-w-sm bg-brand-paper border-l-2 border-brand-navy shadow-cargo-lg h-full overflow-y-auto flex flex-col z-10"
          >
            {/* Drawer Header */}
            <div className="p-4 border-b-2 border-brand-navy bg-brand-paper-light flex items-center justify-between">
              <div>
                <span className="font-mono text-[0.6875rem] font-bold text-brand-red uppercase">
                  THE ROUTE
                </span>
                <p className="font-display italic font-black text-lg text-brand-navy uppercase">
                  Navigation Menu
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
                className="p-2 border-2 border-brand-navy bg-white text-brand-navy rounded-xs shadow-cargo-sm hover:bg-brand-red hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Mobile navigation list"
              className="p-4 flex-1 flex flex-col gap-1"
            >
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 font-display italic font-black uppercase text-lg tracking-wider rounded-xs border-2 transition-all ${
                      isActive
                        ? "bg-brand-navy text-white border-brand-navy shadow-cargo-sm"
                        : "bg-white text-brand-navy border-brand-navy/20 hover:border-brand-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Drawer Footer Contacts */}
            <div className="p-5 border-t-2 border-brand-navy bg-brand-paper-light space-y-3">
              <Button
                variant="primary"
                size="lg"
                href="/quote"
                className="w-full text-center"
              >
                GET A FAST QUOTE
              </Button>

              <a
                href={siteConfig.telHref}
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-brand-navy bg-white text-brand-navy font-display italic font-black text-base uppercase rounded-xs shadow-cargo-sm"
              >
                <svg
                  className="w-4 h-4 text-brand-red"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                </svg>
                <span>CALL: {siteConfig.telephone}</span>
              </a>

              <p className="text-[0.6875rem] font-mono text-center text-brand-navy/60">
                {"UK LOGISTICS CORRIDOR — 7 DAYS A WEEK"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
