"use client";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-14 py-32"
    >
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Empowering Students to{" "}
              <span className="block bg-gradient-to-r from-violet-500 via-purple-700 to-violet-600 bg-clip-text text-transparent">
                Crack Tech Careers
              </span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are BinaryKeeda, an innovative E-learning and Testing startup on a
              mission to transform education for the digital generation. Our
              platform empowers students with personalized learning paths,
              expert-led courses, and real-time assessments designed to sharpen
              their skills and prepare them for the future.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're looking to master coding, cybersecurity, digital
              marketing, or other in-demand fields, BinaryKeeda bridges the gap
              between knowledge and real-world application. Learn. Practice.
              Excel. Join the movement redefining how students grow and succeed.
            </p>
          </div>

          {/* RIGHT: HIGHLIGHT BOX */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-10 border border-purple-200 shadow-xl">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-violet-600 text-xl">✔</span>
                <p className="text-gray-800">
                  Structured learning paths designed by industry experts
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-violet-600 text-xl">✔</span>
                <p className="text-gray-800">
                  Practice-driven approach with real interview problems
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-violet-600 text-xl">✔</span>
                <p className="text-gray-800">
                  Focus on clarity, confidence, and long-term career growth
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
