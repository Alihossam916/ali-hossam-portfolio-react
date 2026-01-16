import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="w-full py-4 fixed z-50 bg-background-blur backdrop-blur-md">
      <nav className="flex flex-row justify-between items-center px-0 lg:px-8 xl:px-20">
        <a href="#" className="flex flex-row items-center h-12 overflow-hidden">
          <img
            src="/images/ali-hossam-logo.png"
            alt="Logo"
            loading="lazy"
            decoding="async"
            className="w-40 h-auto object-cover object-center"
          />
          <p className="text-xl font-bold text-primary-foreground">
            Ali Hossam
          </p>
        </a>
        <ul className="list-none m-0 p-0 text-primary-foreground text-lg">
          <li className="inline-block mx-4 hover:text-foreground transition-colors duration-300">
            <a href="#">Home</a>
          </li>
          <li className="inline-block mx-4 hover:text-foreground transition-colors duration-300">
            <a href="#">About</a>
          </li>
          <li className="inline-block mx-4 hover:text-foreground transition-colors duration-300">
            <a href="#">Projects</a>
          </li>
          <li className="inline-block mx-4 hover:text-foreground transition-colors duration-300">
            <a href="#">Contact</a>
          </li>
          <li className="inline-block mx-4">
            <a
              href="/public/ali-hossam-resume.pdf"
              download="Ali_Hossam_Resume.pdf"
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
          </li>
        </ul>
      </nav>
      <hr className="border-border mt-2" />
    </header>
  );
}
