import React, { useState, useEffect } from "react";
import codespark from "../assets/CODESPARKLOGO.png";
import image1 from "../assets/KwameMensah.png";
import image2 from "../assets/ChidiOkafor.png";
import image3 from "../assets/AminaKamau.png";
import { Link } from "react-router-dom";

const Teaching = () => {
  return (
    <div className="frame-root">
      <div className="frame-content"></div>
      <div className="frame-content">
        <div className="bg-[#fff] backdrop-blur-md w-full h-full">
          <div>
            {/* HERO SECTION */}
            <section
              className="bg-gradient-to-b from-[#ffffff] to-light-background-color lg:py-2 code-section"
              id="sxp3log"
            >
              <div className="container mx-auto mb-24 px-6">
                <div className="flex flex-col-reverse items-center lg:flex-row">
                  <div className="mt-12 w-full lg:mt-32 lg:w-[45%] lg:pr-14">
                    <h1 className="mb-4 text-center text-4xl font-bold lg:text-left lg:text-5xl xl:text-6xl text-gray-900 tracking-tight">
                      Unlock Your Software, Websites and App Development Potential
                    </h1>
                    <p className="mb-12 text-center text-xl text-dark-text-color lg:text-left leading-relaxed">
                      Stop relying on restrictive drag-and-drop templates. Join the next continuous live coding cohort by <span className="font-semibold text-gray-900">CODE SPARK Academy</span>. Directed by industry engineers, you will break down software engineering into structured milestones and learn to launch real production apps from absolute scratch.
                    </p>
                    <div className="mb-12 flex items-center justify-center lg:items-start lg:justify-start">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer items-center rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-semibold text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color transition-all shadow-md select-none"
                      >
                        Join the Next CODE SPARK Cohort
                      </Link>
                    </div>
                    <div className="flex items-center pb-10">
                      <img
                        src={image1}
                        alt="Satisfied Participant"
                        className="mr-4 h-[72px] w-[72px] rounded-full object-cover border-2 border-orange-500/20"
                      />
                      <div>
                        <i
                          className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1 text-orange-500/40"
                          aria-hidden="true"
                        ></i>
                        <p className="mb-2 inline text-lg text-dark-text">
                          <span className="font-semibold text-dark-text">CODE SPARK</span> didn't waste time with dry theory. We jumped straight into real code layout structure on day one with our instructor. Highly recommend for any beginner!
                        </p>
                        <i
                          className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1 text-orange-500/40"
                          aria-hidden="true"
                        ></i>
                        <p className="text-sm mt-1">
                          <span className="font-semibold text-dark-text">
                            Kwame Mensah
                          </span>
                          <span className="pl-2 font-semibold text-orange-600">
                            (Accra, Ghana)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full h-full lg:w-[55%] lg:pl-6">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/app-development-3727527-3135829.png"
                      alt="CODE SPARK Training Framework"
                      className="mt-8 max-h-[200px] lg:max-h-[500px] h-auto w-auto object-contain lg:mt-0"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* THE 4 PILLARS SPRINT SUMMARY */}
            <section className="py-20 code-section" id="snepr5h">
              <div className="container mx-auto px-6">
                <h2 className="mb-6 text-center text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  The CODE SPARK Project-Driven Blueprint
                </h2>
                <h3 className="mb-12 text-center text-xl text-dark-text max-w-3xl mx-auto leading-relaxed">
                  We don't do boring lectures. Our training program specializes in periodic, structured training paths that give absolute beginners an active launchpad into tech.
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-gray-200/80 border border-gray-100 md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">1</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold text-gray-900">Modern Architecture</h4>
                    <p className="text-gray-600">
                      Master modern code configuration paths, text editors, and lightning-fast project structures built for real production execution.
                    </p>
                  </div>
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-gray-200/80 border border-gray-100 md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">2</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold text-gray-900">Step-by-Step Logic</h4>
                    <p className="text-gray-600">
                      Code along with live technical labs. Follow systematic breakdowns of component variables, functions, and layout styles.
                    </p>
                  </div>
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-gray-200/80 border border-gray-100 md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">3</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold text-gray-900">Live Interactive Reviews</h4>
                    <p className="text-gray-600">
                      Drop your custom development folders into our shared sandboxes. Get direct line-by-line debugging from our core instruction team.
                    </p>
                  </div>
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-gray-200/80 border border-gray-100 md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">4</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold text-gray-900">Continuous Launch Loops</h4>
                    <p className="text-gray-600">
                      Compile asset configurations and connect live triggers to cloud platforms to deploy applications onto public server links instantly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* DETAILED OVERVIEW SECTION 1 */}
            <section className="code-section" id="s9un21r">
              <div className="container mx-auto px-6 lg:pt-24">
                <div className="flex flex-col items-stretch lg:flex-row">
                  <div className="flex flex-1 items-center justify-center rounded-3xl bg-light-background-color p-6 lg:w-1/2">
                    <img
                      className="mx-auto rounded-3xl"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/app-development-1805372-1534572.png"
                      alt="CODE SPARK Platform Concept"
                    />
                  </div>
                  <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
                    <h2 className="mb-4 text-center text-3xl font-bold lg:text-left lg:text-5xl text-gray-900">
                      Transform Intentions into Real Software — Line by Line
                    </h2>
                    <p className="mb-6 text-center text-xl text-dark-text lg:text-left leading-relaxed">
                      Our ongoing masterclass series addresses the critical gap between watching tutorial videos and typing standalone code programs. Our corporate academy runs highly structured, live-streamed sprints tailored specifically for absolute beginners.
                    </p>
                    <ul className="mb-12 list-disc pl-6 text-xl text-gray-700 space-y-3">
                      <li>Utilize industrial-grade environments and script tools to build applications.</li>
                      <li>Receive targeted micro-instruction designed deliberately for teenagers, kids, and young learners.</li>
                      <li>Engage in interactive weekly debugging office hours to fix broken structures alongside peers.</li>
                      <li>Develop the absolute confidence to deploy standalone web architecture setups independently.</li>
                    </ul>
                    <div className="flex justify-center lg:block">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer mb-12 inline-block rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-semibold text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color transition-all shadow-sm select-none"
                      >
                        Claim Your CODE SPARK Academy Pass
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={image3}
                        alt="Amina Kamau Profile Portfolio"
                        className="mr-4 h-[72px] w-[72px] rounded-full object-cover border-2 border-orange-500/20"
                      />
                      <div>
                        <i
                          className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1 text-orange-500/40"
                          aria-hidden="true"
                        ></i>
                        <p className="mb-2 inline text-lg text-dark-text">
                          Having a seasoned development mentor break down syntax into visual blocks completely changed how I look at software engineering.
                        </p>
                        <i
                          className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1 text-orange-500/40"
                          aria-hidden="true"
                        ></i>
                        <p className="text-sm mt-1">
                          <span className="font-semibold text-dark-text">
                            Amina Kamau
                          </span>
                          <span className="pl-2 font-semibold text-orange-600">
                            (Nairobi, Kenya)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DETAILED OVERVIEW SECTION 2 */}
            <section className="code-section" id="sf8qk9f">
              <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
                <div className="flex flex-col-reverse items-stretch lg:flex-row">
                  <div className="lg:w-1/2 lg:pr-20">
                    <h2 className="mb-4 text-center text-3xl font-bold sm:text-5xl lg:text-left text-gray-900">
                      Continuous Mentorship, Zero Restrictions
                    </h2>
                    <p className="mb-6 text-center text-xl text-dark-text lg:text-left leading-relaxed">
                      True web engineering proficiency isn't developed in a single afternoon. The <span className="font-semibold text-gray-900">CODE SPARK</span> corporate model combines intense live training iterations with direct code refactoring and hosting deployment workflows over structured periodic pathways.
                    </p>
                    <ul className="mb-12 list-disc pl-8 text-xl text-gray-700 space-y-3">
                      <li>Explore versatile layout architectures and programmatic assets to construct core apps.</li>
                      <li>Receive deliberate, milestone-focused training from active industry operators.</li>
                      <li>Participate in collaborative engineering chat channels for rapid group debugging.</li>
                      <li>Deploy ongoing project increments live onto staging addresses across the web.</li>
                    </ul>
                    <div className="flex justify-center lg:block">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer mb-12 inline-block rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-semibold text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color transition-all shadow-sm select-none"
                      >
                        Unlock Full Ongoing Program Access
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={image2}
                        alt="Chidi Okafor Profile Portfolio"
                        className="mr-4 h-[72px] w-[72px] rounded-full object-cover border-2 border-orange-500/20"
                      />
                      <div>
                        <i
                          className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1 text-orange-500/40"
                          aria-hidden="true"
                        ></i>
                        <p className="mb-2 inline text-lg text-dark-text">
                          The <span className="font-semibold text-gray-900">CODE SPARK</span> curriculum bridges the gap perfectly for beginners while giving us deep technical insights into real software pipelines.
                        </p>
                        <i
                          className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1 text-orange-500/40"
                          aria-hidden="true"
                        ></i>
                        <p className="text-sm mt-1">
                          <span className="font-semibold text-dark-text">
                            Chidi Okafor
                          </span>
                          <span className="pl-2 font-semibold text-orange-600">
                            (Lagos, Nigeria)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-1 items-center justify-center rounded-button bg-light-background-color p-6 lg:w-1/2">
                    <img
                      className="mx-auto rounded-button"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/web-programming-3454635-2918524.png"
                      alt="CODE SPARK Student Terminal Setup"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* CALL OUT JUMBOTRON CARD */}
            <section className="code-section" id="sbg5p1s">
              <div className="container mx-auto px-6 py-6 md:py-12">
                <div className="rounded-3xl bg-light-background-color px-4 py-8 md:py-24 border border-gray-100">
                  <h2 className="mx-auto mb-4 max-w-4xl text-center text-3xl font-bold md:text-5xl text-gray-900 tracking-tight">
                    Elevate Your Engineering Trajectory with CODE SPARK Academy
                  </h2>
                  <p className="mb-8 text-center text-xl text-dark-text max-w-2xl mx-auto leading-relaxed">
                    Experience the deep creative freedom that comes with knowing how to design, write, test, and host application servers under direct supervision from our professional team.
                  </p>
                </div>
                <div className="-mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:-mt-16 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:gap-y-12">
                  <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-10 text-center shadow-xl shadow-gray-200/80 border border-gray-100/50">
                    <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">1</span>
                    </div>
                    <h4 className="mb-4 text-2xl font-semibold text-gray-900">Modern Code Engines</h4>
                    <p className="text-gray-600">
                      Discover optimized sandbox configurations and browser tools that make writing real code highly visual and immediate.
                    </p>
                  </div>
                  <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-10 text-center shadow-xl shadow-gray-200/80 border border-gray-100/50">
                    <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">2</span>
                    </div>
                    <h4 className="mb-4 text-2xl font-semibold text-gray-900">Live CodeLabs Sprints</h4>
                    <p className="text-gray-600">
                      Build fully responsive software alongside your instructor line-by-line to anchor technical concepts smoothly.
                    </p>
                  </div>
                  <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-10 text-center shadow-xl shadow-gray-200/80 border border-gray-100/50">
                    <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl font-bold">
                      <span className="text-orange-600">3</span>
                    </div>
                    <h4 className="mb-4 text-2xl font-semibold text-gray-900">Continuous Cohort Core</h4>
                    <p className="text-gray-600">
                      Secure a long-term position inside the formal academy network channels to build collaborative products and network.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* TRAINING CARD GRID LOGS */}
            <section className="code-section" id="s81opxe">
              <div className="container mx-auto px-4 py-12">
                <h2 className="mb-6 text-center text-3xl font-bold sm:text-5xl text-gray-900 tracking-tight">
                  Unlock Your Software Engineering Pathway
                </h2>
                <p className="mx-auto mb-8 max-w-3xl text-center text-lg font-light text-gray-600 sm:text-xl leading-relaxed">
                  Dive into professional development frameworks engineered by the academy to arm you with sustainable programming mechanics.
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-5 shadow-lg shadow-gray-200 border border-gray-100 flex flex-col justify-between">
                    <div>
                      <img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/38590b1b-96dd-46d8-5856-ff8fdb6ec100/public"
                        alt="Development Layout"
                        className="h-64 w-full rounded-2xl object-cover"
                      />
                      <div className="px-2 py-6">
                        <p className="mb-2 uppercase text-xs font-bold tracking-wider text-orange-600">
                          Active Training Tracks
                        </p>
                        <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                          Continuous App Architecture
                        </h3>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Join the next official cohort cycle and master structural file layout paths, responsive CSS adjustments, and dynamic logic bindings.
                        </p>
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer inline-flex items-center uppercase text-sm font-bold tracking-wide text-orange-600 hover:text-orange-700 hover:underline select-none"
                      >
                        Explore Academy Syllabus
                        <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-5 shadow-lg shadow-gray-200 border border-gray-100 flex flex-col justify-between">
                    <div>
                      <img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e73e20ea-c9b4-4d97-d4cb-ab68d3cb9d00/public"
                        alt="Debugging Layout"
                        className="h-64 w-full rounded-2xl object-cover"
                      />
                      <div className="px-2 py-6">
                        <p className="mb-2 uppercase text-xs font-bold tracking-wider text-orange-600">
                          Mentorship Insights
                        </p>
                        <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                          Core Academy Methodology
                        </h3>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Gain access to specialized advice detailing how to keep your scripts modular, avoid code clutter, and optimize file structures cleanly inside development environments.
                        </p>
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <a
                        href="/webinars"
                        className="inline-flex items-center uppercase text-sm font-bold tracking-wide text-orange-600 hover:text-orange-700 hover:underline select-none"
                      >
                        Inspect Developer Insights
                        <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>

                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-5 shadow-lg shadow-gray-200 border border-gray-100 flex flex-col justify-between">
                    <div>
                      <img
                        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ce70abb3-da19-49f5-53aa-5b40e2a3ad00/public"
                        alt="Community Collaboration Layout"
                        className="h-64 w-full rounded-2xl object-cover"
                      />
                      <div className="px-2 py-6">
                        <p className="mb-2 uppercase text-xs font-bold tracking-wider text-orange-600">
                          Corporate Ecosystem
                        </p>
                        <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                          Connect, Review & Deploy
                        </h3>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Enter our community servers to network with technical students, collaborate on mock projects, and run real code tests.
                        </p>
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <Link
                        to={"/contact"}
                        className="inline-flex items-center uppercase text-sm font-bold tracking-wide text-orange-600 hover:text-orange-700 hover:underline select-none"
                      >
                        Enter Student Matrix
                        <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BASE BOTTOM FOOTER CALL TO ACTION */}
            <section
              className="mt-12 bg-light-background-color py-12 code-section"
              id="so719n"
            >
              <div className="container mx-auto flex flex-col sm:flex-row items-center">
                <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/man-seeing-website-design-13604785-11089198.png"
                    alt="Final Call Layout Graphic"
                    className="h-auto w-full object-contain"
                    style={{ maxHeight: "350px" }}
                  />
                </div>
                <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
                  <h3 className="mb-4 text-center text-3xl font-bold sm:text-left sm:text-5xl text-gray-900 tracking-tight">
                    Secure Your Academy Training Pass
                  </h3>
                  <p className="mb-12 text-center text-lg text-gray-600 sm:text-left sm:text-xl leading-relaxed">
                    Ready to master how code compilers parse applications? Secure your placement in the upcoming <span className="font-semibold text-gray-900">CODE SPARK</span> corporate cohort track, tap into specialized guidance by our engineering mentors, and host functional software live on the web.
                  </p>
                  <div className="mb-12 flex items-center justify-center md:items-start md:justify-start">
                    <Link
                      to={"/webinars"}
                      className="cursor-pointer items-center rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-semibold text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color transition-all shadow-md select-none"
                    >
                      Initialize Academy Account
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;