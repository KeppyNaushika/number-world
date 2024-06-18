import React from "react"

const description = [
  "私たちが召喚されたのは、自然数の王国で、王様から重大な使命を受けました。",
  "",
  "「我々の王国の繁栄のためには、",
  "計算マシーンを使って、数を生み出す必要があるだろう」",
  "",
  "王国の住民である数たちも、計算マシーンに興味津々です。",
]

const Natural0 = () => {
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

export default Natural0
