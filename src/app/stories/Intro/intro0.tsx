import React from "react"

const description = [
  "むかしむかし、遠い遠い世界に、三つの不思議な王国がありました。",
  "それぞれの王国には異なる「数」たちが住んでいました。",
  "ある日、三人の勇者パーティが異世界に召喚され、壮大な冒険が始まります。",
]

const intro0 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="pb-12 text-center text-3xl text-black">
        数の国の冒険者：勇者たちの挑戦
      </div>
      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default intro0
