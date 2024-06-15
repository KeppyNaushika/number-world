import React from "react"

const description = [
  "むかしむかし、遠い遠い世界に、三つの不思議な王国がありました。",
  "それぞれの王国には異なる「数」たちが住んでいました。",
  "ある日、三人の勇者パーティが異世界に召喚され、壮大な冒険が始まります。",
]

const intro0 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="text-3xl text-black pb-12 text-center">
        数の国の冒険者：勇者たちの挑戦
      </div>
      {description.map((story) => (
        <div className="text-center text-black py-2">{story}</div>
      ))}
    </div>
  )
}

export default intro0
