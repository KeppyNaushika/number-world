import React from "react"

const description = [
  "小数を入力する時は、「0.3」「-0.58」のようにします。",
  "分数を入力する時は、「1/3」「-5/8」のようにします。",
]

const Rational2 = () => {
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

export default Rational2
