const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-light-background-color py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 font-bold text-lg">
           Empowering everyone to build software, websites, and apps through the power of clean code.
          </p>
        </div>

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                Our Mission
              </h3>
              {/* 💻 FIXED: Changed from <p> to <div> */}
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc pl-5"> {/* Added pl-5 so bullet points indent beautifully */}
                  <li className="mb-3">
                    To democratize technology creation by providing highly accessible, practical software engineering education. We enable individuals, young creators, and businesses to innovate and solve real-world problems by writing their own software, websites, and applications, regardless of their starting background.
                  </li>
                  <li className="mb-3">We aim to unlock the potential of anyone with an idea by breaking down complex syntax into simple, logical building blocks—making authentic software development universally attainable, scalable, and boundless.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                Our Vision
              </h3>
              {/* 💻 FIXED: Changed from <p> to <div> */}
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc pl-5"> {/* Added pl-5 so bullet points indent beautifully */}                 
                  <li className="mb-3">To be a leading global platform for accessible coding education, fostering a world where modern technology is built and shaped by a highly diverse range of creators.
                  </li>
                  <li className="mb-3">
                    We envision a future where programming is no longer an intimidating barrier to entry, but a powerful skill that anyone can master. By bridging the gap between absolute beginners and advanced professional workflows, our learners will be at the forefront of the digital revolution—building robust, independent software solutions and driving technological progress in their communities and beyond.
                  </li>
                  <li className="mb-3">
                    <strong>Why this shift matters for your brand:</strong> <br/>By focusing on real code made accessible rather than no-code, you position CODE SPARK as a serious, high-value tech academy. Parents will see this as a true long-term career investment for their kids, and advanced students will respect it as an authentic engineering community.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
