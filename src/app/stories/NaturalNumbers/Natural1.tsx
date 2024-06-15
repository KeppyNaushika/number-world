import React from "react"

const description = [
  "例えば、王国に住む「１０」と「２」から、",
  "「加法の計算マシーン」を使って「１２」を生み出すことができます。",
  "",
  "王様は言いました。",
  "「我々の王国の繁栄のためには、",
  "計算マシーンを使って、新たな数を生み出す必要があるだろう」",
]

const Natural1 = () => {
  return (
    <div className=" animate-floatInFromTop">
      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Natural1
