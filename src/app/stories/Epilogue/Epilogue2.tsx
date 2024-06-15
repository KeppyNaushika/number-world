import React from "react"

import Image from "next/image"

const description = [
  "整数の王国では、こんな話が出回っていました。",
  "「うわさによると、自然数の王国では、累乗の計算マシーンの使用を認めたらしい。」",
  "「我々は、自然数の王国に負けているのか？」",
  "「なぜ、我々にも使わせてくれないのか！」",
  "",
  "一方その頃、全ての数の国では、ついに累乗の計算マシーンの使用が禁止されることとなりました。",
  "「累乗の計算マシーンにいろいろな数を入れると、私たちの知らない数が生み出されてしまうらしい」",
  "王国の住民は大混乱です。",
]

const Epilogue2 = () => {
  return (
    <div className=" animate-floatInFromTop">
      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-xs text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Epilogue2
