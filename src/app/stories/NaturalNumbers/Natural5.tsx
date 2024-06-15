import React from "react"

const description = [
  "勇者のみなさんは、特別に計算マシーンをお試しできます。",
  "ただしお試しできるのは、王様への説明を含めて20回までで、それを超えるとゲームオーバーです。",
  "どの数で試すのかをパーティの人とよく相談して決めましょう。",
  "",
  "王様は気まぐれで勇者を指名します。",
  "全員が説明できるようにしておこう。",
]

const Natural5 = () => {
  return (
    <div className=" animate-floatInFromTop">
      <div className="pb-4 text-center text-lg text-black">ルール 2</div>

      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-xs text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Natural5
