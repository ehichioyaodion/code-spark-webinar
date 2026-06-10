import React, { useState } from 'react';

const FAQ = () => {
  // State to track which accordion item is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is CODE SPARK?",
      answer:
        "CODE SPARK is a live, fast-paced technical workshop designed to break down the barriers of software engineering. We teach absolute beginners, kids, and tech enthusiasts how to build real websites, apps, and software from scratch by understanding the fundamental logic of clean, practical code.",
    },
    {
      question: "Who is this Webinar For?",
      answer:
        "This webinar is engineered for two distinct groups:\n\n• Absolute Beginners & Young Learners: Anyone (including teenagers and kids) who wants to learn how computers think and start writing real code through highly visual, instant-feedback micro-projects.\n\n• Advanced Enthusiasts: Aspiring developers and creators who want to see how a clean project structure, modular code, and modern tools can speed up their deployment workflows compared to heavy, restrictive no-code editors.",
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
      question: "How Do I Register and Claim the Discount?",
      answer:
        "Registration is fully automated. Click the 'Register Now' button to open our secure payment gateway. You can easily process your registration using Mobile Money (MoMo) or a bank card.\n\n⚠️ IMPORTANT DIRECTION:\nOnce your payment is successful, please do not close your browser! The system will automatically redirect you straight into our private WhatsApp Cohort Group where starter assets are hosted.",
    },
    {
      question: "Is There a Cost to Attend the Webinar?",
      answer:
        "Yes. To ensure a highly committed group of learners, entry requires a baseline investment. By using the promotional launch code, you can claim an executive 70% off discount, locking in your slot for exactly ₵100 GHS instead of the standard tier fee.",
    },
    {
      question: "Will There Be Any Support After the Webinar?",
      answer:
        "Yes! When you register, you join the private eDev starter community group. After the live stream ends, you can use this group to share your modified code projects, get feedback from peers, ask technical questions, and access additional source files or future bootcamp opportunities.",
    },
    {
      question: "What are the Technical Requirements to Join?",
      answer:
        "All you need is a device with a stable internet connection capable of running video conferencing software (Google Meet). While you can watch and learn from a smartphone or tablet, we highly recommend using a computer or keyboard-enabled device if you want to actively type out the code strings live along with the instructor!",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 min-h-screen text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Live Coding Masterclass
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Everything you need to know about navigating the CODE SPARK experience.
          </p>
        </div>

        {/* Accordion Component Tree */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white border-orange-500 shadow-md shadow-orange-100' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus:outline-none group select-none"
                >
                  <span className={`font-semibold text-base sm:text-lg transition-colors duration-200 ${
                    isOpen ? 'text-orange-600' : 'text-gray-800 group-hover:text-gray-950'
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Chevron / Toggle Icon */}
                  <span className={`ml-4 flex-shrink-0 transition-transform duration-300 p-1 rounded-md ${
                    isOpen ? 'bg-orange-50 text-orange-600 rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Animated Collapsible Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 sm:p-6 text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
