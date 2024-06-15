"use client"
import React, { useState } from "react"

const Settings = (props: {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [password, setPassword] = useState("")
  console.log(password === "password")
  const { setShowSettings } = props

  return (
    <div
      className="absolute z-50 flex size-full animate-floatInFromTop flex-col items-center justify-center bg-lime-50/95 p-12"
      onClick={() => setShowSettings(false)}
    >
      <div className="py-8 text-center text-2xl text-black">王の力</div>
      <button disabled>
        <input
          type="password"
          placeholder="Password"
          className="w-60 p-2 text-center text-black"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => {}}
        />
      </button>

      <div className="flex pt-12">
        <button
          className={`mx-4 w-36 rounded-lg bg-lime-100 p-4 text-center shadow-sm ${
            password === "password" ? "text-black" : "text-black/20"
          }`}
          disabled={password !== "password"}
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
        >
          最初から
        </button>
        <button
          className={`mx-4 w-36 rounded-lg bg-lime-100 p-4 text-center shadow-sm ${
            password === "password" ? "text-black" : "text-black/20"
          }`}
          disabled={password !== "password"}
          onClick={() => {
            localStorage.removeItem("count")
            window.location.reload()
          }}
        >
          回数リセット
        </button>
      </div>
    </div>
  )
}

export default Settings
