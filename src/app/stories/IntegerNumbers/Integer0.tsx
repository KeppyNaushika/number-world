import React from "react"

import Image from "next/image"

const description = [
  "次に召喚されたのは、整数の王国でした。",
  "",
  "整数の王国の長である王様は、4つの計算マシーンを導入するかどうかで悩んでいました。",
  "",
  "この国でも、計算した結果、",
  "整数以外の数を生み出す計算マシーンは使うことができません。",
]

const Integer0 = () => {
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

export default Integer0
