import React from "react"

const description = [
  "勇者のみなさんは、特別に計算マシーンをお試しできます。",
  "ただしお試しできるのは、王様への説明を含めて20回までで、それを超えるとゲームオーバーです。",
  "どの数で試すのかをパーティの人とよく相談して決めましょう。",
  "",
  "王様は気まぐれで勇者を指名します。",
  "全員が説明できるようにしておこう。",
]

const Natural2 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="text-center text-black pb-4 text-lg">ルール 2</div>

      {description.map((story) => (
        <div className="text-center text-black py-2 text-xs">{story}</div>
      ))}
    </div>
  )
}

export default Natural2
