import React from 'react';

const AboutUs = () => {
  const keyFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Pure Coding Curriculum",
      description: "We bypass superficial builders to teach actual, foundational layout mechanics, logic blocks, and production scripts from your very first session."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      title: "Live Debug Sandboxes",
      description: "Get interactive, real-time code refactoring and line-by-line project testing inside community server environments alongside technical peers."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Production Cloud Hosting",
      description: "Learn how to wrap, optimize, compile asset trees, and trigger deployments straight onto global staging architectures independently."
    }
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      {/* MISSION & VISION HERO */}
      <section className="bg-gradient-to-b from-[#ffffff] to-light-background-color py-20 px-6 code-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              CODE SPARK Academy Culture
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering everyone to build independent software, responsive websites, and production apps through the power of clean code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* MISSION CARD */}
            <div className="p-8 md:p-10 bg-[#ffffff] rounded-3xl shadow-lg shadow-gray-200/80 border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="inline-flex p-3 rounded-2xl bg-orange-50 text-orange-600 font-bold tracking-wider text-xs uppercase mb-6">
                  Core Mandate
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                  <p>
                    To democratize technology creation by providing highly accessible, practical software engineering education. We enable individuals, young creators, and businesses to innovate and solve real-world problems by writing their own software, websites, and applications, regardless of their starting background.
                  </p>
                  <p>
                    We aim to unlock the potential of anyone with an idea by breaking down complex syntax into simple, logical building blocks—making authentic software development universally attainable, scalable, and boundless.
                  </p>
                </div>
              </div>
            </div>

            {/* VISION CARD */}
            <div className="p-8 md:p-10 bg-[#ffffff] rounded-3xl shadow-lg shadow-gray-200/80 border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="inline-flex p-3 rounded-2xl bg-orange-50 text-orange-600 font-bold tracking-wider text-xs uppercase mb-6">
                  Future Horizon
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                  <p>
                    To be a leading global platform for accessible coding education, fostering a world where modern technology is built and shaped by a highly diverse range of creators.
                  </p>
                  <p>
                    We envision a future where programming is no longer an intimidating barrier to entry, but a powerful skill that anyone can master. By bridging the gap between absolute beginners and advanced professional workflows, our learners will be at the forefront of the digital revolution.
                  </p>
                  <p className="font-medium text-gray-900 border-t border-gray-100 pt-4">
                    We aim to establish a high-value, high-impact tech academy that serves as a true long-term investment for families and an authentic engineering community for emerging developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN KEY FEATURES GRID */}
      <section className="py-20 px-6 bg-[#ffffff] border-t border-gray-100/60 code-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              The Academy Pillars
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our structures are designed systematically to turn curious tech enthusiast minds into practical foundational asset builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 rounded-3xl bg-light-background-color border border-gray-100 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 rounded-2xl bg-[#ffffff] shadow-sm mb-6 border border-gray-100/80">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
