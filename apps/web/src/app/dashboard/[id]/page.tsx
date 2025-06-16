import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Individual Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome to your dashboard. Here you can manage your profile, view analytics, and access personalized features.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Go to Profile
        </button>
      </div>
    </div>
  )
}

export default page