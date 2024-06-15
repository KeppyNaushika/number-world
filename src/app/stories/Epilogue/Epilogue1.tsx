import React from "react"

import Image from "next/image"

const description = [
  "それからというもの、３つの王国は計算マシーンを使いながら、それぞれでさらなる発展を遂げました。",
  "",
  "しかし、数年後、新たな計算マシーンが発明されました。",
  "それは、みなさんが知っている「累乗」の計算です。",
  "",
  "「新しい計算マシーンが発明されたらしいぞ！」",
  "それぞれの王国は、「累乗」を導入するかで大論争です。",
]

const Epilogue0 = () => {
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

export default Epilogue0
