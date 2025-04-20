"use client";
import { useState } from "react";
import { MdEmail, MdCallEnd } from "react-icons/md";

export default function ContactSupport() {
  const [faqs, setFaqs] = useState([
    { question: "How can I contact support?", answer: "You can reach us via email at support@mribonecare.com or call us at +1 (123) 456-7890 during business hours.", open: false },
    { question: "What are your support hours?", answer: "Our support team is available Monday to Friday, 9 AM - 6 PM (GMT).", open: false },
    { question: "How long does it take to get a response?", answer: "We typically respond to emails within 24 hours. Urgent queries via phone are handled immediately.", open: false },
    { question: "Do you offer live chat support?", answer: "Currently, we provide support via email and phone. Live chat will be available soon.", open: false },
    { question: "Can I schedule a support call?", answer: "Yes, you can schedule a call with our support team by emailing us with your preferred time and topic.", open: false },
    { question: "Where can I report technical issues?", answer: "You can report any technical issues by filling out the contact form on our website or emailing us.", open: false },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
  };

  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Contact Header with Background Image */}
      <div className="relative bg-contain bg-center h-48 sm:h-64 md:h-80" style={{ backgroundImage: "url('images/Contact.jpg')" }}></div>

      {/* Contact Form */}
      <div id="contact" className="flex flex-col justify-center items-center py-6 px-4 sm:px-6">
        <h1 className="text-black text-xl sm:text-2xl md:text-3xl text-center font-bold mt-6">Contact & Support</h1>
        <form className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg mt-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <label className="block mb-2 font-semibold">Name:</label>
          <input type="text" className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />

          <label className="block mb-2 font-semibold">Email:</label>
          <input type="email" className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />

          <label className="block mb-2 font-semibold">Message:</label>
          <textarea className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message" required></textarea>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition w-full">
            Submit
          </button>
        </form>
      </div>

      {/* Support Info */}
      <div className="mt-8 p-6 sm:p-8 bg-gray-50 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Email & Phone Support</h2>
        <p className="text-center">
          <strong className="flex justify-center items-center gap-2">
            <MdEmail size={25} /> Email:
          </strong>
          <a href="mailto:support@mribonecare.com" className="text-blue-600 hover:underline">support@mribonecare.com</a>
        </p>
        <p className="text-center mt-4">
          <strong className="flex justify-center items-center gap-2">
            <MdCallEnd size={25} /> Phone:
          </strong>
          <a href="tel:+92********" className="text-blue-600 hover:underline">+92 (332) 9693439</a>
        </p>
      </div>

      {/* FAQs Section */}
      <div className="mt-12 min-h-[130vh] p-6 sm:p-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b p-4 cursor-pointer bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition" onClick={() => toggleFAQ(index)}>
              <h3 className="font-medium flex justify-between items-center text-lg">
                {faq.question} <span>{faq.open ? "▲" : "▼"}</span>
              </h3>
              {faq.open && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-6 sm:p-12 bg-yellow-400">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need More Assistance?</h2>
        <p className="text-gray-700 mb-4">Our team is ready to help. Get in touch for further support.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto" onClick={() => smoothScroll("contact")}>
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
