import React from 'react'

const WhyChooseMri = () => {
  const features = [
    {
      imgSrc: "/images/Choose/Ai.jpg",
      title: "AI-Powered Analysis",
      description: "Our AI detects bone tumors & infections with high accuracy."
    },
    {
      imgSrc: "/images/Choose/secure.jpg",
      title: "Secure & Private",
      description: "Your medical data is encrypted & never shared."
    },
    {
      imgSrc: "/images/Choose/fast.jpg",
      title: "Fast Results",
      description: "Get MRI scan insights in minutes, not days."
    },
    {
      imgSrc: "/images/Choose/Accuracy.jpg",
      title: "High Accuracy",
      description: "Our deep-learning models achieve over 95% accuracy."
    },
    {
      imgSrc: "/images/Choose/report.jpg",
      title: "Doctor-Trusted",
      description: "Used by medical professionals for reliable MRI diagnosis."
    },
    {
      imgSrc: "/images/Choose/Free.jpg",
      title: "100% Free to Use",
      description: "No hidden charges—completely free MRI analysis."
    }
  ]

  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose MRI Bone Care?</h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Advanced AI technology for precise MRI scan analysis.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 duration-300 ease-in-out cursor-pointer">
              <img src={feature.imgSrc} alt={feature.title} className="w-96 h-44 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-2 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMri
