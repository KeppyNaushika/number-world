import React from "react"

const description = [
  "「召喚されし、３人の勇者たちよ。",
  "自然数以外を生み出してはいけないというルールに違反することなく、",
  "我々の国にある２つの数から新しい数を生み出すことのできる計算マシーンを",
  "４つの中から選んでくれたまえ」",
]

const Natural2 = () => {
  return (
    <div className=" animate-floatInFromTop">
      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-2xl text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Natural2
