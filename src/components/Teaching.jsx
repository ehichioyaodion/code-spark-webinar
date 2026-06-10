import React, { useState, useEffect } from "react";
import codespark from "../assets/CODESPARKLOGO.png";
import image1 from "../assets/KwameMensah.png"
import image2 from "../assets/ChidiOkafor.png"
import image3 from "../assets/AminaKamau.png"
import { Link } from "react-router-dom";

const Teaching = () => {
  return (
    <div className="frame-root">
      <div className="frame-content"></div>
      <div className="frame-content">
        <div className="bg-[#fff] backdrop-blur-md w-full h-full">
          <div>
            <section
              className="bg-gradient-to-b from-[#ffffff] to-light-background-color lg:py-2 code-section"
              id="sxp3log"
            >
              <div className="container mx-auto mb-24 px-6">
                <div className="flex flex-col-reverse items-center lg:flex-row">
                  <div className="mt-12 w-full lg:mt-32 lg:w-[45%] lg:pr-14">
                    <h1 className="mb-4 text-center text-4xl font-bold lg:text-left lg:text-5xl xl:text-6xl">
                      Unlock Your Software, Websites and App Development
                      Potential
                    </h1>
                    <p className="mb-12 text-center text-xl text-dark-text-color lg:text-left">
                      Join our upcoming webinar, "How to Build Softwares, Websites, and Apps by Coding: A Beginner's Guide," and learn to create from scratch—no prior experience required! This hands-on session will empower you to transform your ideas into functional applications or websites using real code.
                    </p>
                    <div className="mb-12 flex items-center justify-center lg:items-start lg:justify-start">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer items-center rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-semibold text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color"
                      >
                        Reserve Your Spot Now
                      </Link>
                    </div>
                    <div className="flex items-center pb-10">
                      <img
                        src={image1}
                        alt="Satisfied Participant"
                        className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                        data-landingsite-gallery-type="image"
                      />
                      <div>
                        <i
                          className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                          aria-hidden="true"
                        ></i>
                        <p className="mb-2 inline text-lg text-dark-text"><span className="font-semibold text-dark-text">CODE SPARK</span> didn't waste time with dry theory. We jumped straight into real code layout structure on day one. Highly recommend for any beginner!
                        </p>
                        <i
                          className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                          aria-hidden="true"
                        ></i>
                        <p className="">
                          <span className="font-semibold text-dark-text">
                            Kwame Mensah
                          </span>
                          <span className="pl-2 font-semibold text-primary">
                            (Accra, Ghana)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full h-full lg:w-[55%] lg:pl-6">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/app-development-3727527-3135829.png"
                      alt="Hero"
                      className="mt-8 max-h-[200px] lg:max-h-[500px] h-auto w-auto object-contain lg:mt-0"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="py-20 code-section" id="snepr5h">
              <div className="container mx-auto px-6">
                <h2 className="mb-6 text-center text-6xl font-bold">
                  Master App and Websites Development in No Time
                </h2>
                <h3 className="mb-12 text-center text-xl text-dark-text">Join our transformative webinar and unlock the secrets to building Softwares, Websites, and Apps by learning how to code the smart way!
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">1</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold">Discover Coding Basics & Frameworks
                    </h4>
                    <p className="text-gray-text">Unveil user-friendly environments and modern frameworks that empower beginners to write clean code, while showing advanced users how to speed up their development workflow.
                    </p>
                  </div>
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">2</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold">
                      Step-by-Step Guidance
                    </h4>
                    <p className="text-gray-text">Follow along as our expert instructors walk you through the logic and construction of an application, ensuring you grasp foundational concepts effortlessly.
                    </p>
                  </div>
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">3</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold">
                      Engage with Interactive Learning
                    </h4>
                    <p className="text-gray-text">Participate in live coding challenges and Q&amp;A sessions. Ask questions and get immediate code reviews to enhance your learning experience.
                    </p>
                  </div>
                  <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
                    <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">4</span>
                    </div>
                    <h4 className="mb-2 text-2xl font-semibold">
                      Launch Your First App and Website
                    </h4>
                    <p className="text-gray-text">By the end of the session, you'll have the skills to write, deploy, and launch your very own application and website, ready to share with the world!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="code-section" id="s9un21r">
              <div className="container mx-auto px-6 lg:pt-24">
                <div className="flex flex-col items-stretch lg:flex-row">
                  <div className="flex flex-1 items-center justify-center rounded-3xl bg-light-background-color p-6 lg:w-1/2">
                    <img
                      className="mx-auto rounded-3xl"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/app-development-1805372-1534572.png"
                      alt="Hero"
                      data-landingsite-gallery-type="illustration"
                    />
                  </div>
                  <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
                    <h2 className="mb-4 text-center text-3xl font-bold lg:text-left lg:text-5xl">Transform Your Ideas into Softwares and Apps—With Real Code!
                    </h2>
                    <p className="mb-6 text-center text-xl text-dark-text lg:text-left">Join our upcoming webinar, "How to Build Apps with Coding: A Beginner's Guide," and discover how fun and simple it is to write your own applications. This interactive session will take place in just a few days, providing you with the tools and knowledge to bring your concepts to life, regardless of your starting skill level.
                    </p>
                    <ul className="mb-12 list-disc pl-6 text-xl">
                      <li className="mb-3">Learn to utilize powerful languages and editors to develop functional apps.
                      </li>
                      <li className="mb-3">
                        Receive step-by-step instruction tailored for absolute beginners and young learners.
                      </li>
                      <li className="mb-3">Engage in real-time debugging discussions and get immediate feedback from experts.
                      </li>
                      <li className="">Gain the confidence to write and launch your first app and website by the end of the session!
                      </li>
                    </ul>
                    <div className="flex justify-center lg:block">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer mb-12 inline-block rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-medium text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color"
                      >
                        Reserve Your Spot Today!
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={image3}
                        alt="Profile"
                        className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                        data-landingsite-gallery-type="image"
                      />
                      <div className="">
                        <i
                          className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                          aria-hidden="true"
                        ></i>
                        <p className="mb-2 inline text-lg text-dark-text">As someone with zero programming background, breaking things down into visual building blocks completely changed how I look at software development.
                        </p>
                        <i
                          className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                          aria-hidden="true"
                        ></i>
                        <p>
                          <span className="font-semibold text-dark-text">
                            Amina Kamau
                          </span>
                          <span className="pl-2 font-semibold text-primary">
                            (Nairobi, Kenya)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="code-section" id="sf8qk9f">
              <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
                <div className="flex flex-col-reverse items-stretch lg:flex-row">
                  <div className="lg:w-1/2 lg:pr-20">
                    <h2 className="mb-4 text-center text-3xl font-bold sm:text-5xl lg:text-left">Empower Yourself to Create Apps with Coding
                    </h2>
                    <p className="mb-6 text-center text-xl text-dark-text lg:text-left">Dive into the world of software development with our captivating webinar, "How to Build Apps with Coding: A Beginner's Guide," happening in just seven days! This interactive session is designed to make coding accessible to everyone, offering you the chance to turn your ideas into reality through programmatic thinking.
                    </p>
                    <ul className="mb-12 list-disc pl-8 text-xl">
                      <li className="mb-3">Explore versatile programming languages to develop your very own apps.
                      </li>
                      <li className="mb-3">Receive tailored, step-by-step guidance from industry experts.
                      </li>
                      <li className="mb-3">Participate in engaging coding logic discussions and get real-time syntax feedback.
                      </li>
                      <li className="">Feel confident deploying your first app and website by the end of the session!
                      </li>
                    </ul>
                    <div className="flex justify-center lg:block">
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer mb-12 inline-block rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-medium text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color"
                      >
                        Secure Your Spot Now!
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={image2}
                        alt="Profile"
                        className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                        data-landingsite-gallery-type="image"
                        data-testimonial-image=""
                        data-dont-replace=""
                      />
                      <div className="">
                        <i
                          className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                          aria-hidden="true"
                        ></i>
                        <p className="mb-2 inline text-lg text-dark-text">This webinar transformed my understanding of app creation! It bridges the gap perfectly for beginners while keeping things interesting for those who want to dive deeper into clean code.
                        </p>
                        <i
                          className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                          aria-hidden="true"
                        ></i>
                        <p>
                          <span className="font-semibold text-dark-text">
                            Chidi Okafor
                          </span>
                          <span className="pl-2 font-semibold text-primary">
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
                      alt="Hero"
                      data-landingsite-gallery-type="illustration"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="code-section" id="sbg5p1s">
              <div className="container mx-auto px-6 py-6 md:py-12">
                <div className="rounded-3xl bg-light-background-color px-4 py-8 md:py-40">
                  <h2 className="mx-auto mb-4 max-w-4xl text-center text-3xl font-bold md:text-6xl">Elevate Your App Creation Skills with CODE SPARK
                  </h2>
                  <p className="mb-8 text-center text-xl text-dark-text">Experience the freedom to build apps and websites by mastering the power of code! Our upcoming webinar, "How to Build Apps with Coding: A Beginner's Guide," takes place in just seven days, offering you a unique opportunity to transform your creative ideas into functional code effortlessly.
                  </p>
                </div>
                <div className="-mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:-mt-36 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:gap-y-12">
                  <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
                    <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">1</span>
                    </div>
                    <h4 className="mb-6 text-3xl font-semibold">Explore Modern Development Solutions
                    </h4>
                    <p className="text-dark-text">Discover intuitive tools and text editors that bring your code to life, making the learning process visual, accessible, and enjoyable for all ages.
                    </p>
                  </div>
                  <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
                    <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">2</span>
                    </div>
                    <h4 className="mb-6 text-3xl font-semibold">Hands-On Coding Experience
                    </h4>
                    <p className="text-dark-text">Follow along with expert instructors as they guide you through each line of code, ensuring you gain practical, real-world skills to build your own apps and websites.
                    </p>
                  </div>
                  <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
                    <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-light-background-color text-4xl">
                      <span className="text-primary">3</span>
                    </div>
                    <h4 className="mb-6 text-3xl font-semibold">
                      Community and Support
                    </h4>
                    <p className="text-dark-text">Join a community of learners of all skill levels to share insights, debug together, and foster collaborative coding experiences that accelerate your journey.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="code-section" id="s81opxe">
              <div className="container mx-auto px-4 py-12">
                <h2 className="mb-6 text-center text-3xl font-bold sm:text-6xl">Unlock Your Software Development Journey
                </h2>
                <p className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-dark-text sm:text-xl">Dive into the world of app creation with our enlightening articles aimed at empowering you with the skills to build applications through coding. Each piece is designed to guide you through the modern development landscape, helping you turn your innovative ideas into reality
                </p>
                <div className="flex flex-col md:flex-row">
                  <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
                    <img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/38590b1b-96dd-46d8-5856-ff8fdb6ec100/public"
                      alt="Blog"
                      className="h-64 w-full rounded-3xl object-cover"
                      data-landingsite-gallery-type="image"
                    />
                    <div className="px-4 py-6">
                      <p className="mb-2 uppercase text-primary">
                        Upcoming Webinar
                      </p>
                      <h3 className="mb-2 text-3xl font-medium">How to Build Apps with Coding: A Beginner's Guide
                      </h3>
                      <p className="mb-4 text-lg font-light text-gray-text">
                        Join our upcoming webinar and discover how to harness programming tools and frameworks to create functional applications easily. It's the perfect starting point for anyone looking to innovate and learn real coding skills.
                      </p>
                      <Link
                        to={"/webinars"}
                        className="cursor-pointer flex items-center uppercase text-primary hover:underline"
                      >
                        Learn More
                        <i
                          className="fa-solid fa-arrow-right ml-2"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                  </div>
                  <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
                    <img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e73e20ea-c9b4-4d97-d4cb-ab68d3cb9d00/public"
                      alt="Blog"
                      className="h-64 w-full rounded-3xl object-cover"
                      data-landingsite-gallery-type="image"
                    />
                    <div className="px-4 py-6">
                      <p className="mb-2 uppercase text-primary">Expert Tips</p>
                      <h3 className="mb-2 text-3xl font-medium">
                        Maximize Your Coding Potential
                      </h3>
                      <p className="mb-4 text-lg font-light text-gray-text">
                        Explore our expert insights on how to effectively structure your code to enhance your app development process. Learn industry best practices that can streamline your debugging workflow and increase productivity
                      </p>
                      <a
                        href="/webinars"
                        className="flex items-center uppercase text-primary hover:underline"
                      >
                        Read More{" "}
                        <i
                          className="fa-solid fa-arrow-right ml-2"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
                    <img
                      src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ce70abb3-da19-49f5-53aa-5b40e2a3ad00/public"
                      alt="Blog"
                      className="h-64 w-full rounded-3xl object-cover"
                      data-landingsite-gallery-type="image"
                    />
                    <div className="px-4 py-6">
                      <p className="mb-2 uppercase text-primary">
                        Join Our Community
                      </p>
                      <h3 className="mb-2 text-3xl font-medium">
                        Connect and Collaborate
                      </h3>
                      <p className="mb-4 text-lg font-light text-gray-text">
                        Engage with a vibrant community of aspiring and experienced developers eager to share and learn. Our articles spotlight community stories, open-source collaboration, and successes in the coding journey.
                      </p>
                      <Link
                        to={"/contact"}
                        className="flex items-center uppercase text-primary hover:underline"
                      >
                        Join Us{" "}
                        <i
                          className="fa-solid fa-arrow-right ml-2"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="mt-12 bg-light-background-color py-12 code-section"
              id="so719n"
            >
              <div className="container mx-auto flex flex-col sm:flex-row">
                <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/man-seeing-website-design-13604785-11089198.png"
                    alt="CTA"
                    className="h-auto w-full"
                    data-landingsite-gallery-type="illustration"
                  />
                </div>
                <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
                  <h3 className="mb-2 text-center text-3xl font-bold sm:text-left sm:text-6xl">
                    Empower Yourself with App Development
                  </h3>
                  <p className="mb-12 text-center text-lg text-gray-text sm:text-left sm:text-xl">
                    Ready to dive into the world of app creation? Join our hands-on webinar, "How to Build Apps with Coding: A Beginner's Guide," happening in just seven days! This session is designed specifically to break down barriers, enabling you to transform your innovative ideas into real applications using the power of code.
                  </p>
                  <div className="mb-12 flex items-center justify-center md:items-start md:justify-start">
                    <Link
                      to={"/webinars"}
                      className="cursor-pointer items-center rounded bg-primary-button-bg-color px-button-x py-button-y text-lg font-semibold text-primary-button-text-color hover:bg-primary-button-hover-bg-color hover:text-primary-button-hover-text-color"
                    >
                      Reserve Your Spot Today!
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
