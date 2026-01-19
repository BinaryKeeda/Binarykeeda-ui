export default function Services() {
  const features: {
    icon: string;
    title: string;
    desc: string;
  }[] = [
    {
      icon: "📚",
      title: "Practice Module",
      desc: "Interactive quizzes\nTopic specific assignments\nCoding Sandbox / Online IDE",
    },
    {
      icon: "💻",
      title: "Placement Module",
      desc: "End to end hiring portal\nPlacement preparation\nWorkshops",
    },
    {
      icon: "🎯",
      title: "Curriculum Vitae",
      desc: "Resume analysis for\ntop tech companies\nProfessional CV builder",
    },
    {
      icon: "🏆",
      title: "Jobs & Hackathons",
      desc: "Exciting internships\nUp-to-date job openings\nHackathons & workshops",
    },
    {
      icon: "🎓",
      title: "Mentorship",
      desc: "One-on-one / group mentoring\nIndustry expert roadmaps",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "Instant doubt resolution\nActive community support\nGuaranteed help",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-14 pt-20 pb-32"
    >
      <div className="page-container">
        {/* SECTION HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-700 to-purple-600 bg-clip-text text-transparent">
              Excel
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Comprehensive learning resources designed by industry experts to
            prepare you for top tech careers.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white backdrop-blur-xl
                         border border-purple-100 rounded-3xl p-8
                         flex flex-col items-center text-center
                         transition-all duration-500 ease-out
                         hover:-translate-y-3 hover:scale-[1.03]
                         hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.4)]
                         hover:border-purple-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* GRADIENT BACKGROUND ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* ANIMATED GLOW BORDER */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                              rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10" />
              
              {/* TOP CORNER GRADIENT ACCENT */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-transparent 
                              rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* BOTTOM CORNER GRADIENT ACCENT */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/40 to-transparent 
                              rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-full">
                {/* ICON WITH ENHANCED STYLING */}
                <div className="w-20 h-20 mb-6 mx-auto rounded-2xl
                                bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500
                                flex items-center justify-center text-4xl
                                shadow-lg shadow-purple-300/50
                                group-hover:shadow-xl group-hover:shadow-purple-400/60 
                                group-hover:scale-110 group-hover:rotate-3
                                transition-all duration-500 ease-out
                                relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent 
                                  group-hover:from-white/40 transition-colors duration-500" />
                  <span className="relative z-10 drop-shadow-lg filter group-hover:drop-shadow-2xl transition-all duration-500">
                    {feature.icon}
                  </span>
                </div>

                {/* TITLE WITH GRADIENT ON HOVER */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800
                               group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600
                               group-hover:bg-clip-text group-hover:text-transparent
                               transition-all duration-300">
                  {feature.title}
                </h3>

                {/* ANIMATED DIVIDER */}
                <div className="w-16 h-1 mx-auto mb-5 rounded-full
                                bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                                group-hover:w-28 transition-all duration-500 shadow-sm" />

                {/* DESCRIPTION */}
                <p className="text-gray-600 whitespace-pre-line leading-relaxed text-sm
                              group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>

              {/* FLOATING PARTICLES EFFECT */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-500" />
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-300 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-700" 
                   style={{ animationDelay: '0.2s' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}