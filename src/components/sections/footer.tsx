import { Phone, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Contact Us
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            {/* Phone */}
            <a
              href="tel:+2001202775920"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+20 0120 277 5920</span>
            </a>

            {/* Email */}
            <a
              href="mailto:alihossam916@gmail.com"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>alihossam916@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/ali-hossam-051810235"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Alihossam916"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Ali Hossam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
