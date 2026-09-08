import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">

      {/* Signup Card */}
      <div
        className="
          w-full max-w-md
          bg-[#050909]
          border border-emerald-500/70
          rounded-2xl
          p-8
          shadow-[0_0_35px_rgba(16,185,129,0.25)]
        "
      >

        {/* User Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="
              w-20 h-20
              rounded-full
              border-2 border-emerald-400
              flex items-center justify-center
              text-emerald-400
              shadow-[0_0_25px_rgba(16,185,129,0.45)]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m1.5-1.5h-3m-2.25 7.125a6.75 6.75 0 0 0-13.5 0"
              />
              <circle
                cx="9"
                cy="6"
                r="3.25"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create <span className="text-emerald-400">Account</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full
                bg-[#0b1212]
                border border-gray-700
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-500
                outline-none
                transition
                focus:border-emerald-400
                focus:ring-1
                focus:ring-emerald-400
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Email address"
              className="
                w-full
                bg-[#0b1212]
                border border-gray-700
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-500
                outline-none
                transition
                focus:border-emerald-400
                focus:ring-1
                focus:ring-emerald-400
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="
                w-full
                bg-[#0b1212]
                border border-gray-700
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-500
                outline-none
                transition
                focus:border-emerald-400
                focus:ring-1
                focus:ring-emerald-400
              "
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="
                w-full
                bg-[#0b1212]
                border border-gray-700
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-500
                outline-none
                transition
                focus:border-emerald-400
                focus:ring-1
                focus:ring-emerald-400
              "
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="
              w-full
              bg-emerald-500
              hover:bg-emerald-400
              text-black
              font-semibold
              py-3
              rounded-xl
              transition-all
              duration-300
              shadow-[0_0_20px_rgba(16,185,129,0.35)]
              hover:shadow-[0_0_30px_rgba(16,185,129,0.55)]
              flex items-center justify-center gap-2
            "
          >
            Create Account
            <span className="text-xl">→</span>
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm mt-7">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:text-emerald-300 transition"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Signup