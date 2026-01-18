// React imports
import { useState } from "react";

// shadcn-ui imports
import { Button } from "../ui/button";

// Component imports
import MobileNavbar from "./mobileNavbar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#heroSection", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full py-4 sticky top-0 z-50 bg-background">
      <nav className="flex flex-row justify-between items-center px-4 lg:px-8 xl:px-20">
        <a
          href="#heroSection"
          className="group flex flex-row items-center h-12 overflow-hidden"
        >
          <img
            src="/images/ali-hossam-logo.png"
            alt="Logo"
            loading="lazy"
            decoding="async"
            className="w-32 h-auto object-cover object-center"
          />
          <p className="hidden xs:block text-xl font-bold text-primary-foreground group-hover:text-foreground transition-colors duration-300">
            Ali Hossam
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:list-none md:flex m-0 p-0 text-primary-foreground text-lg">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="inline-block mx-4 hover:text-foreground transition-colors duration-300"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-x-6">
          <a
            href="/public/ali-hossam-resume.pdf"
            download="Ali_Hossam_Resume.pdf"
            className="hidden xxs:block"
          >
            <Button className="rounded text-md font-bold uppercase cursor-pointer transition-colors duration-300">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#3C5371"
                style={{ width: "28px", height: "28px", marginLeft: "8px" }}
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <MobileNavbar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <hr className="border-border mt-2" />
    </header>
  );
}
