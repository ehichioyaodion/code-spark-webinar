import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../components/Firebase";
import Swal from "sweetalert2";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Rate limiting states
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const COOLDOWN_TIME_MS = 5 * 60 * 1000; // 5 Minutes in milliseconds

  // Check on mount if a previous rate limit is still active
  useEffect(() => {
    const checkRateLimit = () => {
      const lastSubmission = localStorage.getItem("codespark_contact_last_submit");
      if (lastSubmission) {
        const timePassed = Date.now() - parseInt(lastSubmission, 10);
        
        if (timePassed < COOLDOWN_TIME_MS) {
          setIsRateLimited(true);
          setCountdown(Math.ceil((COOLDOWN_TIME_MS - timePassed) / 1000));
        }
      }
    };

    checkRateLimit();
  }, []);

  // Handle countdown clock ticker if rate limited
  useEffect(() => {
    let timer;
    if (isRateLimited && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setIsRateLimited(false);
            localStorage.removeItem("codespark_contact_last_submit");
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRateLimited, countdown]);

  // Format countdown seconds into readable MM:SS format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard Clause: Double check rate-limit status dynamically
    if (isRateLimited) {
      Swal.fire({
        title: "Spam Protection Active",
        text: `Please wait ${formatTime(countdown)} before sending another message.`,
        icon: "warning",
        confirmButtonColor: "#ea580c",
      });
      return;
    }

    if (!email.trim() || !fullName.trim() || !message.trim()) {
      Swal.fire({
        title: "Invalid Input Field(s)",
        text: "Please Fill in The Correct Details",
        icon: "error",
      });
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const formData = { email, fullName, message };
      await addDoc(collection(db, "contact"), {
        ...formData,
        createdAt: new Date(),
      });

      // Clear fields on success
      setEmail("");
      setFullName("");
      setMessage("");

      // Establish the rate-limiting block stamp inside the browser cache
      const submissionTimestamp = Date.now();
      localStorage.setItem("codespark_contact_last_submit", submissionTimestamp.toString());
      setIsRateLimited(true);
      setCountdown(COOLDOWN_TIME_MS / 1000);

      Swal.fire({
        icon: "success",
        title: "MESSAGE SENT",
        text: "We will get back to you shortly",
        confirmButtonColor: "#ea580c",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Failed to send message. Please try again.",
        confirmButtonColor: "#ea580c",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = email.trim() && fullName.trim() && message.trim();

  return (
    <div className="w-full bg-[#ffffff] antialiased">
      <section className="py-20 px-6 bg-gradient-to-b from-[#ffffff] to-light-background-color code-section">
        <div className="container mx-auto max-w-6xl">
          
          {/* HEADER BADGE INTERACTION */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Academy Support Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions regarding curriculum milestones, schedule variants, or registration tracks? Reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* MODERN GLASSMORPHIC INPUT CARD FORM CONTAINER */}
            <div className="lg:col-span-7 bg-[#ffffff] p-8 md:p-10 rounded-3xl shadow-lg shadow-gray-200/80 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send an Academy Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="name"
                    type="text"
                    disabled={isRateLimited}
                    placeholder="Your Name"
                    className="w-full bg-light-background-color border border-gray-200 rounded-xl py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    disabled={isRateLimited}
                    placeholder="Your Email Address"
                    className="w-full bg-light-background-color border border-gray-200 rounded-xl py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    rows="5"
                    disabled={isRateLimited}
                    placeholder="Type your custom inquiry here..."
                    className="w-full bg-light-background-color border border-gray-200 rounded-xl py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none shadow-sm"
                    type="submit"
                    disabled={isLoading || !isFormValid || isRateLimited}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Deploying Transmission...
                      </div>
                    ) : isRateLimited ? (
                      "Form Locked"
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* VISUAL TICKER COUNTDOWN */}
                  {isRateLimited && (
                    <p className="text-sm font-semibold text-amber-600 bg-amber-50 border border-amber-200 py-2 px-4 rounded-xl animate-pulse">
                      Anti-Spam lock active. Next submission available in {formatTime(countdown)}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* CORPORATE INFORMATION AND CHANNELS ACTION PANEL */}
            <div className="lg:col-span-5 space-y-8 lg:pl-4">
              <div className="p-8 bg-[#ffffff] rounded-3xl shadow-lg shadow-gray-200/80 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Channels
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Phone &amp; WhatsApp</h4>
                      <p className="text-gray-600 mt-0.5">+233 533 053 687</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Email Office</h4>
                      <p className="text-gray-600 mt-0.5">helpline.codespark@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Operational Cycles</h4>
                      <p className="text-gray-600 mt-0.5 leading-relaxed">
                        Monday - Saturday: 24 Hours Open
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AUTOMATED COMMUNICATIONS TRIGGERS ACCELERATOR */}
              <div className="p-8 bg-light-background-color rounded-3xl border border-gray-100 space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Quick Connect Links
                </h4>
                
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://wa.me/233533053687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 rounded-xl font-semibold transition-all group select-none"
                  >
                    <span className="flex items-center gap-3">
                      <i className="fa-brands fa-whatsapp text-2xl text-emerald-600"></i>
                      Launch WhatsApp Chat
                    </span>
                    <i className="fa-solid fa-arrow-right text-sm transform group-hover:translate-x-1 transition-transform"></i>
                  </a>

                  <a
                    href="tel:+233533053687"
                    className="flex items-center justify-between p-4 bg-orange-50 hover:bg-orange-100/80 text-orange-800 rounded-xl font-semibold transition-all group select-none"
                  >
                    <span className="flex items-center gap-3">
                      <i className="fa-solid fa-phone text-xl text-orange-600"></i>
                      Place Direct Call
                    </span>
                    <i className="fa-solid fa-arrow-right text-sm transform group-hover:translate-x-1 transition-transform"></i>
                  </a>

                  <a
                    href="mailto:helpline.codespark@gmail.com"
                    className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100/80 text-blue-800 rounded-xl font-semibold transition-all group select-none"
                  >
                    <span className="flex items-center gap-3">
                      <i className="fa-solid fa-envelope text-xl text-blue-600"></i>
                      Open Email Client
                    </span>
                    <i className="fa-solid fa-arrow-right text-sm transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
