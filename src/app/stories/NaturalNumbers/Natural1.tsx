import React from "react"

import Image from "next/image"

const description = [
  "自然数の王国の長である王様は、4つの計算マシーンを導入するかどうかで悩んでいました。",
  "",
  "それぞれの計算マシーンは、加法、減法、乗法、除法の力を持ち、",
  "王国の2つの数を用いて数を生み出すことができます。",
  "",
  "例えば、王国に住む「１０」と「２」から、",
  "「加法の計算マシーン」を使って「１２」を生み出すことができます。",
]

const Natural1 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="flex justify-center pb-4">
        <Image
          src={"/images/robot_blue.png"}
          alt="Blue Robot"
          width={50}
          height={50}
          className="mx-8"
        />
        <Image
          src={"/images/robot_green.png"}
          alt="Green Robot"
          width={50}
          height={50}
          className="mx-8"
        />
        <Image
          src={"/images/robot_orange.png"}
          alt="Orange Robot"
          width={50}
          height={50}
          className="mx-8"
        />
        <Image
          src={"/images/robot_purple.png"}
          alt="Purple Robot"
          width={50}
          height={50}
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

export default Natural1
