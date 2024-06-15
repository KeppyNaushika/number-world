import React from "react"

const description = [
  "加法・減法・乗法・除法のうち、２つの自然数を計算すると",
  "必ず自然数になる計算マシーンを選び、王様に提案します。",
  "",
  "使って良い計算マシーンは、その理由を、",
  "使ってはいけない計算マシーンは、結果が自然数にならない例（反例）を、",
  "王様に説明して、納得してもらえたら次のステージに進めます。"
]

const Natural2 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="text-center text-black pb-4 text-lg">ルール 1</div>

      {description.map((story) => (
        <div className="text-center text-black py-2 text-xs">{story}</div>
      ))}
    </div>
  )
}

export default Natural2
