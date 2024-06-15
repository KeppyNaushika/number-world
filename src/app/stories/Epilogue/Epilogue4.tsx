import React from "react"

import Image from "next/image"

const description = ["おしまい"]

const Epilogue3 = () => {
  return (
    <div className=" animate-floatInFromTop">
      {description.map((story, index) => (
        <div key={index} className="py-2 text-center text-lg text-black">
          {story}
        </div>
      ))}
    </div>
  )
}

export default Epilogue3
