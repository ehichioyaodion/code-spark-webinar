import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How is the CODE SPARK program structured?",
      answer:
        "Instead of a brief, rushed session, CODE SPARK is an ongoing, periodic corporate training academy. We break down complex software mechanics into interactive weekly sprint blocks, taking you completely from raw document bones up to real-world cloud deployment pipelines.",
    },
    {
      question: "Who leads the technical training sessions?",
      answer:
        "All core instructional tracks, technical live builds, and architectural reviews are delivered directly by active industry engineers—bringing professional full-stack engineering expertise and specialized mentorship directly into your learning dashboard.",
    },
    {
      question: "What is the schedule for our live sessions?",
      answer:
        "The CODE SPARK academy operates on a predictable periodic rhythm. Each training week includes a primary live structural code-along lab, a dedicated live interactive debugging sandbox to handle errors, and continuous chat channel help inside our private community groups.",
    },
    {
      question: "Do I need any prior programming knowledge to join?",
      answer:
        "None at all! The CODE SPARK curriculum is explicitly engineered to handle absolute beginners. We skip dry textbook theory and dive straight into interactive, visual blocks of code that give you clear, real-time feedback from day one.",
    },
    {
      question: "What tools and environments will we use?",
      answer:
        "To keep our onboarding simple and fast, we won't require heavy local computer terminal configs. We write real, functional layout and logical strings directly inside highly optimized, cloud-native development environments that run instantly from any standard web browser.",
    },
    {
      question: "How long do I get access to the materials and community?",
      answer:
        "Your registration locks in full access to your specific active training cohort cycle. This covers all live streaming links, project source files, and continuous ongoing placement within the private academy community channels where you can submit code revisions and collaborate long after your track wraps up.",
    },
    {
      question: "How do I register and secure the launch discount?",
      answer:
        "Our onboarding system is fully automated. Simply click the 'Register Now' button to access the secure payment gateway, where you can safely process your placement token using Mobile Money (MoMo) or a local bank card.\n\n⚠️ IMPORTANT DIRECTION:\nOnce your transaction completes, please do not close your terminal window! The payment gateway will automatically pass your session over to redirect you right into our private WhatsApp Cohort channel.",
    },
    {
      question: "Is there an entry fee for the training program?",
      answer:
        "Yes. To keep our learning tracks highly accountable and maintain small, high-quality peer cohorts, entry requires an asset commitment. By applying the current launch promo, you secure a full promotional discount, locking in your active cohort access pass for exactly ₵100 GHS instead of the standard tier cost.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 min-h-screen text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            CODE SPARK Training Academy
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Everything you need to know about navigating the training curriculum designed by our engineering team.
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