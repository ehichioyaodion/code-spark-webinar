const FAQ = () => {
  const faqData = [
    {
      question: "What is No-Code Development?",
      answer:
        "No-code development allows you to create software, websites, and applications without writing traditional code. It uses visual interfaces and drag-and-drop tools, making technology creation accessible to everyone, regardless of coding experience.",
    },
    {
      question: "Who is this Webinar For?",
      answer:
        "This webinar is perfect for entrepreneurs, small business owners, marketers, designers, project managers, and anyone interested in building digital solutions without learning to code. Whether you're a complete beginner or have some technical background, you'll find value in learning how to bring your ideas to life with no-code tools.",
    },
    {
      question: "What Will I Learn in This Webinar?",
      answer:
        "In this webinar, you'll learn the fundamentals of no-code development and how to use no-code platforms to build websites, applications, and software. We'll cover key concepts, popular no-code tools, and practical examples to get you started on your no-code journey. You'll gain the knowledge and confidence to begin creating your own projects immediately.",
    },
    {
      question: "Do I Need Any Prior Coding Knowledge?",
      answer:
        "No coding knowledge is required at all! This webinar is specifically designed for individuals with no coding experience. We'll guide you through everything step-by-step, ensuring you can follow along and understand the concepts regardless of your technical background.",
    },
    {
      question: "What Tools and Platforms Will Be Covered?",
      answer:
        "We will introduce you to a range of popular and powerful no-code platforms suitable for building various types of applications. While we may focus on a few key tools for demonstration, the principles you learn will be applicable across many no-code platforms available today. Specific tools might include platforms for web development, app creation, and automation, depending on the webinar's focus.",
    },
    {
      question: "Is the Webinar Live or Recorded?",
      answer:
        "This webinar is a live online session, allowing you to interact with the instructor in real-time, ask questions, and get immediate clarifications.  There will also be a recording of the webinar available to all registered participants for review and catch-up at their convenience.",
    },
    {
      question: "How Do I Register for the Webinar?",
      answer:
        "Registration is simple! Just click on the 'Register Now' button on this page and fill out the registration form with your details. You'll receive a confirmation email with all the information you need to join the webinar session.",
    },
    {
      question: "Is There a Cost to Attend the Webinar?",
      answer:
        "Information regarding the cost, if any, will be clearly stated on the registration page and in our promotional materials. Please refer to the webinar details to understand if this is a free or paid webinar and what the associated fees are, if any.",
    },
    {
      question: "Will There Be Any Support After the Webinar?",
      answer:
        "Yes! We are committed to your learning journey. All participants will have access to a community forum or group where you can ask questions, share your progress, and connect with fellow learners.  We may also offer additional resources and follow-up sessions to support your continued learning.",
    },
    {
      question: "What are the Technical Requirements to Join the Webinar?",
      answer:
        "To join the webinar, you will need a stable internet connection and a device (computer, laptop, tablet, or smartphone) capable of accessing the internet and running video conferencing software (e.g., Zoom, Google Meet, etc. - specific platform details will be provided upon registration). No special software or coding tools are required to participate in the webinar itself.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our No-Code Webinar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
