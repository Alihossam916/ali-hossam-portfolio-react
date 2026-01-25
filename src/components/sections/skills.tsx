// shadcn/ui imports
import { Card } from "../ui/card";

export default function SkillsSection() {
  return (
    <section
      id="skillsSection"
      className="min-h-screen m-6 xs:m-14 md:m-20 lg:m-28"
    >
      <h2 className="text-foreground text-4xl text-center md:text-left font-semibold mb-10">
        My Skills
      </h2>

      {/* skills container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* HTML5 */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">HTML</h3>
        </Card>

        {/* CSS3 */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">CSS</h3>
        </Card>

        {/* JavaScript */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">JavaScript</h3>
        </Card>

        {/* React */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">React</h3>
        </Card>

        {/* Redux */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="Redux"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">Redux</h3>
        </Card>

        {/* TypeScript */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">TypeScript</h3>
        </Card>

        {/* Tailwind CSS */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">Tailwind CSS</h3>
        </Card>

        {/* Bootstrap */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-medium">Bootstrap</h3>
        </Card>

        {/* GitHub */}
        <Card className="p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-slate-500/50 hover:shadow-slate-500/70">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-16 h-16 mb-4 invert-100"
          />
          <h3 className="text-lg font-medium">GitHub</h3>
        </Card>
      </div>
    </section>
  );
}
