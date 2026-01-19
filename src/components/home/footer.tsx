import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-white border-t border-gray-200"
    >
      {/* MAIN FOOTER */}
      <div className="page-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              BinaryKeeda
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Learn. Practice. Excel. <br />
              Join the movement redefining how students learn and succeed.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:bg-[#0A66C2] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:bg-red-500 hover:text-white transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="text-sm text-gray-600">
              Reach us at{" "}
              <a
                href="mailto:contact@binarykeeda.com"
                className="underline"
              >
                contact@binarykeeda.com
              </a>
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>BK DSA Sheet</li>
              <li>BK 210 Roadmap</li>
              <li>Roadmaps</li>
            </ul>
          </div>

          {/* PRACTICE */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">
              Practice
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>Quizzes</li>
              <li>Test Series</li>
              <li>Coding Sheet</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">
        <div className="page-container py-6 text-center text-sm text-gray-500">
          © 2026 BinaryKeeda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
