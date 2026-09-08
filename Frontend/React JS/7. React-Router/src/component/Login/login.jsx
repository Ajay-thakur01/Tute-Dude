import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      {/* Login Card */}
      <div className="
        w-full max-w-md
        bg-[#050909]
        border border-emerald-500/70
        rounded-2xl
        p-8
        shadow-[0_0_35px_rgba(16,185,129,0.25)]
      ">

        {/* User Icon */}
        <div className="flex justify-center mb-6">
          <div className="
            w-20 h-20
            rounded-full
            border-2 border-emerald-400
            flex items-center justify-center
            text-emerald-400
            shadow-[0_0_25px_rgba(16,185,129,0.45)]
          ">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome <span className="text-emerald-400">Back</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Login to your account to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Email
            </label>

            <div className="relative">
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
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
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

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
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
            Login
            <span className="text-xl">→</span>
          </button>

        </form>

        {/* Sign Up */}
        <p className="text-center text-gray-400 text-sm mt-7">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-emerald-400 hover:text-emerald-300 transition"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login