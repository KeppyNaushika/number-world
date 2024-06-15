"use client"
import React, { useState } from "react"

const StageNaturalNumbersCheckDialog = (props: {
  password: string
  nextStep: string
  setShowCheckDialog: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { password, nextStep, setShowCheckDialog } = props

  const [inputValue, setInputValue] = useState("")

  return (
    <div
      className="absolute z-50 flex size-full animate-floatInFromTop flex-col items-center justify-center bg-sky-50/95 p-12"
      onClick={() => setShowCheckDialog(false)}
    >
      <div className="pb-16 text-center text-2xl text-black">
        王は納得したか？
      </div>
      <button disabled>
        <input
          type="text"
          placeholder="KEY WORD"
          className="w-60 p-2 text-center text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toLocaleUpperCase())}
          onClick={() => {}}
        />
      </button>

      <div className="flex pt-12">
        <button
          className={`mx-4 w-36 rounded-lg bg-rose-200 p-4 text-center shadow-sm ${
            inputValue.toLocaleUpperCase() === password
              ? "text-black"
              : "text-black/20"
          }`}
          disabled={inputValue.toLocaleUpperCase() !== password}
          onClick={() => {
            localStorage.setItem("count", "20")
            localStorage.setItem("step", nextStep)
            window.location.reload()
          }}
        >
          次の世界へ
        </button>
      </div>
    </div>
  )
}

export default StageNaturalNumbersCheckDialog
