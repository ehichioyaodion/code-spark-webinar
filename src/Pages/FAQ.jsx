const FAQ = () => {
  const faqData = [
    {
      question: "What is CODE SPARK?",
      answer:
        "CODE SPARK is a live, fast-paced technical workshop designed to break down the barriers of software engineering. We teach absolute beginners, kids, and tech enthusiasts how to build real websites, apps, and software from scratch by understanding the fundamental logic of clean, practical code.",
    },
    {
      question: "Who is this Webinar For?",
      answer:
        "This webinar is engineered for two distinct groups Absolute Beginners and Young Learners Anyone (including teenagers and kids) who wants to learn how computers think and start writing real code through highly visual, instant-feedback micro-projects.Advanced Enthusiasts: Aspiring developers and creators who want to see how a clean project structure, modular code, and modern tools can speed up their deployment workflows compared to heavy, restrictive no-code editors.",
    },
    {
      question: "What Will I Learn in This Webinar?",
      answer:
        "You will learn the core building blocks of modern web and application development. We will write live HTML (the structural bones), CSS (the layout and style), and JavaScript (the interactive logic) to build a fully functional application. By the end of the 60 minutes, you will know how to deploy and host your code live on the web for anyone in the world to see.",
    },
    {
      question: "Do I Need Any Prior Coding Knowledge?",
      answer:
        "Not at all! This session is built specifically to handle absolute beginners. We don't start with dry, complicated computer science textbooks—we jump straight into interactive code blocks that make sense from the very first line. If you can type on a keyboard, you can follow along perfectly.",
    },
    {
      question: "What Tools and Platforms Will Be Covered?",
      answer:
        "To keep things simple, we won't make you install heavy desktop software or struggle with system configurations. We will be coding live inside highly optimized, browser-based coding sandboxes (like StackBlitz, CodePen, or Replit). Everything runs straight from your internet browser.",
    },
    {
      question: "Is the Webinar Live or Recorded?",
      answer:
        "This is a 100% Live interactive online session hosted via Google Meet. You will be able to watch our expert instructors code in real-time, ask questions in the chat, and get immediate debugging help.",
    },
    {
      question: "How Do I Register for the Webinar?",
      answer:
        "Registration is fully automated. Click the 'Register Now' button to open our secure payment gateway. You can easily process your ₵50 registration using Mobile Money (MoMo) or a bank card. ⚠️ Note: Once payment is successful, do not close your browser! You will be automatically redirected straight into our private WhatsApp Cohort Group.",
        // make correct listing or break line on the NOte warnings
    },
    {
      question: "Is There a Cost to Attend the Webinar?",
      answer:
        "Information regarding the cost, if any, will be clearly stated on the Webinar page and in our promotional materials. Please refer to the webinar details to understand if this is a free or paid webinar and what the associated fees are, if any.",
    },
    {
      question: "Will There Be Any Support After the Webinar?",
      answer:
        "Yes! When you register, you join the private eDev starter community group. After the live stream ends, you can use this group to share your modified code projects, get feedback from peers, ask technical questions, and access additional source files or future bootcamp opportunities.",
    },
    {
      question: "What are the Technical Requirements to Join the Webinar?",
      answer:
        "All you need is a device with a stable internet connection capable of running video conferencing software (Google Meet). While you can watch and learn from a smartphone or tablet, we highly recommend using a computer or keyboard-enabled device if you want to actively type out the code strings live along with the instructor!",
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
