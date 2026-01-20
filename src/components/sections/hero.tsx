// shadcn-ui components
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="min-h-screen -mt-16 mx-6 xs:mx-14 md:mx-20 lg:mx-28 flex flex-col-reverse md:flex-row justify-between items-center gap-y-16"
    >
      <div className="w-full md:max-w-1/2 flex flex-col justify-center items-start gap-4 bg-radial from-primary/30 from-0% via-40% to-60% to-background">
        <p>
          <span className="text-muted-foreground text-2xl">Hello, I'm</span>
          <br />{" "}
          <span className="text-4xl font-bold text-foreground">Ali Hossam</span>
        </p>
        <p className="text-3xl font-semibold text-primary">
          Frontend Developer
        </p>
        <p className="text-lg font-light">
          Junior front-end developer with a solid software engineering
          background, focused on building responsive, user-friendly web
          applications using modern JavaScript and React. Passionate about clean
          UI and continuous learning, and motivated to grow through real-world
          projects and team collaboration.
        </p>

        {/* info buttons */}
        <div className="flex flex-col xxs:flex-row justify-center items-center gap-y-4 gap-x-6">
          <a
            href="/public/ali-hossam-resume.pdf"
            download="Ali_Hossam_Resume.pdf"
          >
            <Button className="text-md font-bold uppercase cursor-pointer transition-colors duration-300">
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
          <a
            href="https://linkedin.com/in/ali-hossam-051810235"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="cursor-pointer text-md font-semibold border-primary"
              variant={"outline"}
            >
              Linkedin Profile
            </Button>
          </a>
        </div>
      </div>

      <div className="relative size-44 sm:size-60 md:size-72 lg:size-80 flex items-center justify-center">
        {/* image decoration */}
        <svg
          width="412"
          height="413"
          viewBox="0 0 412 413"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute m-auto size-52 sm:size-64 md:size-80 lg:size-96 text-primary animate-[spin_10s_linear_infinite]"
        >
          <circle
            cx="206"
            cy="206.401"
            r="204.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="18 36 54 72"
          ></circle>
        </svg>
        <img
          src="/images/Gemini_Generated_Image_fue4frfue4frfue4-removebg-preview.png"
          alt="developer avatar"
          className="relative z-10 size-44 sm:size-60 md:size-72 lg:size-80 object-contain"
        />
      </div>
    </section>
  );
}
