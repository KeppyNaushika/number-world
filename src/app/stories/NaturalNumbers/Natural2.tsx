import React from "react"

const description = [
  "しかし、王国には厳しいルールがありました。",
  "",
  "それは、王国に属さない数を決して生み出してはいけないということです。",
  "",
  "「もし、一度でも自然数以外の数を生み出してしまえば、",
  "王国は再び戦火に包まれ、数の王国は滅びてしまう」",
  "",
  "王様はどの計算マシーンを導入すればよいのか、決めかねていました。",
]

const Natural1 = () => {
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

export default Natural1
