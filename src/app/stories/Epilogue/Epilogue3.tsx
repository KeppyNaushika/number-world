import React from "react"

import Image from "next/image"

const description = [
  "さらに、別の探検家によると、数の王国も、これまで探検してきた３つの以外にも存在するとのこと。",
  "",
  "一体、どんな王国が待っているのか。そして、累乗の計算マシーンを使える王国は他にもあるのか。",
  "",
  "我々の問いは尽きませんが、それはまた、別のお話。",
  "",
  "もしかすると、２年後、あるいは、４年後にもう一度、みなさんは召喚されるかもしれません。",
]

const Epilogue3 = () => {
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

export default Epilogue3
