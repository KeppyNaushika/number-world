import React from "react"

const description = [
  "加法・減法・乗法・除法のうち、２つの数を計算すると",
  "必ず数になる計算マシーンを選び、王様に提案します。",
  "",
  "使って良い計算マシーンは、その理由を、",
  "使ってはいけない計算マシーンは、結果が数にならない例（反例）を、",
  "王様に説明して、納得してもらえたら次のステージに進めます。",
]

const Rational1 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="pb-4 text-center text-lg text-black">ルール 1</div>

      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-xs text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Rational1
