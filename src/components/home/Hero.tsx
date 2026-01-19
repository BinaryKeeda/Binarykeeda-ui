"use client";

import { useState } from "react";

export default function Hero() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [outputVisible, setOutputVisible] = useState<boolean>(false);
  const [outputText, setOutputText] = useState<string>("");

  const handleRunCode = () => {
    if (isRunning) return;

    setIsRunning(true);
    setOutputVisible(true);
    setOutputText("");

    setTimeout(() => {
      setOutputText("Welcome to Emple!\nMaster DSA & Ace Interviews");
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="page-container w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#FFF1F1] border border-[#0F2854] rounded-full mb-6 text-sm">
              🚀 Start Your Learning Journey Today
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
              Master Your Skills{" "}
              <br />
              With{" "}
              <span className="bg-gradient-to-r from-[#3B0270] via-[#441752] to-[#3E1E68] bg-clip-text text-transparent">
                Emple
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Excel in coding, aptitude, logical reasoning, and core academic
              subjects with expert-curated quizzes and real-world challenges.
              Our structured learning approach helps you build strong fundamentals, 
              sharpen problem-solving skills, and gain the confidence needed to succeed.
            </p>

            <button className="px-10 py-4 bg-gradient-to-r from-[#3B0270] via-[#A888B5] to-[#3B0270] text-white font-semibold text-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all animate-float-slow">
              Start Learning Now
            </button>
          </div>

          {/* RIGHT CODE WINDOW */}
          <div className="relative w-full md:max-w-[520px] mt-10 md:mt-0">
            <div className="relative bg-[#F9DFDF]/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5 shadow-2xl">
              
              {/* WINDOW HEADER */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                <button
                  onClick={handleRunCode}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all
                  ${
                    isRunning
                      ? "bg-purple-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:-translate-y-0.5"
                  } text-white shadow-lg`}
                >
                  {isRunning ? "Running..." : "▶ Run Code"}
                </button>
              </div>

              {/* CODE CONTENT */}
              <div className="font-mono text-sm leading-relaxed text-gray-800 mb-4">
                <pre>{`class Welcome {
  public static void main(String[] args) {
    String message = "Welcome to Emple!";
    System.out.println(message);

    // Start your DSA journey today!
    System.out.println("Master DSA & Ace Interviews");
  }
}`}</pre>
              </div>

              {/* OUTPUT */}
              {outputVisible && (
                <div className="bg-purple-50/90 rounded-lg border border-indigo-500/20 p-4 mt-4">
                  <div className="text-xs font-semibold uppercase text-gray-500 mb-1">
                    Output
                  </div>
                  <pre className="text-sm text-gray-900 whitespace-pre-wrap">
                    {outputText}
                  </pre>
                </div>
              )}
            </div>

            {/* FLOATING ICONS */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-300 to-violet-400 p-4 rounded-xl shadow-lg text-2xl animate-float-fast z-20">
              ⚡
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl shadow-lg text-xl animate-float-slow z-20">
              🎯
            </div>

            <div
              className="hidden md:block absolute top-[55%] -right-10 bg-gradient-to-br from-violet-500 to-purple-500 p-3 rounded-xl shadow-lg text-lg animate-float-slow z-20"
              style={{ animationDelay: "1.5s" }}
            >
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
