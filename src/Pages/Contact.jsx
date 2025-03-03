import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../components/Firebase";
import Swal from "sweetalert2";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!email.trim() || !fullName.trim() || !message.trim()) {
      Swal.fire({
        title: "Invalid Input Field(s)",
        text: "Please Fill in The Correct Details",
        icon: "error",
      });

      return;
    }

    setIsLoading(true);

    // Add 2 second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const formData = { email, fullName, message };
      await addDoc(collection(db, "contact"), {
        ...formData,
        createdAt: new Date(),
      });

      // Clear form fields after successful submission
      console.log(formData);
      setEmail("");
      setFullName("");
      setMessage("");

      Swal.fire({
        icon: "success",
        title: "MESSAGE SENT",
        text: "Please We Will Get Back To You Shortly",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Add disabled state to button based on form validity
  const isFormValid = email.trim() && fullName.trim() && message.trim();

  return (
    <div className="bg-gray-100 antialiased">
      <section className="py-16 bg-gradient-to-b from-[#ffffff] to-light-background-color">
        <div className="container mx-auto px-4 ">
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;re here to help! If you have any questions, feedback, or
                inquiries, please feel free to reach out to us using the form
                below or through our contact information.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="name"
                    placeholder="Your Name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex justify-start">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isLoading || !isFormValid}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-700">Address</h3>
                  <p className="text-gray-600">
                    123 Main Street, Accra
                    <br />
                    Greater Accra Region, Ghana
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Phone</h3>
                  <p className="text-gray-600">+233 123 456 7890</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Email</h3>
                  <p className="text-gray-600">helpline.codespark@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
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
