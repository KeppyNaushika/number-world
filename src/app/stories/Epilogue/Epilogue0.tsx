import React from "react"

import Image from "next/image"

const description = [
  "無事、私たちは３つの国の王様の要求を見事に解決しましたとさ。",
  "",
  "めでたし、めでたし。",
]

const Epilogue0 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="flex items-center justify-center pb-8 text-4xl text-black">
        GAME CLEAR
      </div>
      <div className="flex justify-center pb-4">
        <Image
          src={"/images/natural_numbers.png"}
          alt="Natural numbers background image"
          width={180}
          height={180}
          className="mx-8"
        />
        <Image
          src={"/images/integer_numbers.png"}
          alt="Integer numbers background image"
          width={180}
          height={180}
          className="mx-8"
        />
        <Image
          src={"/images/rational_numbers.png"}
          alt="Rational numbers background image"
          width={180}
          height={180}
          className="mx-8"
        />
      </div>
      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Epilogue0
