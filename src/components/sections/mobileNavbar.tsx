// shadcn-ui imports
import { Button } from "../ui/button";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavbar({ isOpen, onClose }: MobileNavbarProps) {
  const navItems = [
    { href: "#heroSection", label: "Home" },
    { href: "#skillsSection", label: "Skills" },
    { href: "#projectsSection", label: "Projects" },
    { href: "#contactSection", label: "Contact" },
  ];

  return (
    <div
      className={`md:hidden fixed w-full bg-background z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-2.5" : "-translate-y-[150%]"
      }`}
    >
      <ul className="flex flex-col py-8 space-y-6 text-primary-foreground text-lg">
        {navItems.map((item) => (
          <>
            <li className="px-8 hover:text-foreground transition-colors duration-300">
              <a href={item.href} onClick={onClose} className="block py-2">
                {item.label}
              </a>
            </li>
            <hr />
          </>
        ))}
        <a
          href="/public/ali-hossam-resume.pdf"
          download="Ali_Hossam_Resume.pdf"
          className="xxs:hidden w-full px-4"
        >
          <Button className="w-full rounded text-md font-bold uppercase cursor-pointer transition-colors duration-300">
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
      </ul>
    </div>
  );
}
