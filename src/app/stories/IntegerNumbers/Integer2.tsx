import React from "react"

const description = ["負の数を入力する時は、「-3」「-58」のようにします。"]

const Integer2 = () => {
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

export default Integer2
