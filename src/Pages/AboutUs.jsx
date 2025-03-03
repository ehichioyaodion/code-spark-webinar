const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-light-background-color py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-lg">
            Empowering everyone to build software, websites, and apps without
            coding expertise.
          </p>
        </div>

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To democratize technology creation by providing accessible,
                no-code education that enables individuals and businesses to
                innovate and solve problems using software, websites, and
                applications, regardless of their coding background. We aim to
                unlock the potential of anyone with an idea, making technology
                development universally attainable.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To be the leading global platform for no-code education,
                fostering a world where technology is built and shaped by a
                diverse range of creators. We envision a future where coding is
                no longer a barrier to entry for software development, and our
                learners are at the forefront of this revolution, building
                innovative digital solutions and driving progress in their
                communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
