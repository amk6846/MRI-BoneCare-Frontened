import React from 'react'

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Start Your Journey to Better MRI Insights</h2>
      <p className="text-lg mb-6">
        Experience accurate, fast, and secure MRI scan analysis with advanced AI technology.
        Sign up now and get started for free!
      </p>
      <div>
        <a 
          href="/SignUp" 
          className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out"
        >
          Get Started for Free
        </a>
      </div>
    </div>
  </section>

  )
}

export default CTA