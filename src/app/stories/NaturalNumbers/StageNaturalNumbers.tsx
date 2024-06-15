import React, { useEffect, useState } from "react"
import Image from "next/image"

import Robot_blue from "@/images/robot_blue.png"
import Robot_green from "@/images/robot_green.png"
import Robot_orange from "@/images/robot_orange.png"
import Robot_purple from "@/images/robot_purple.png"

import { create, all, type MathType, isFraction } from "mathjs"

const calcOperators = ["+", "-", "×", "÷"] as const

type CalcOperators = (typeof calcOperators)[number]

const math = create(all)

const calcRobot = {
  "+": Robot_blue,
  "-": Robot_green,
  "×": Robot_orange,
  "÷": Robot_purple,
}

const calcName = {
  "+": "加法",
  "-": "減法",
  "×": "乗法",
  "÷": "除法",
}

const StageNaturalNumbers = () => {
  const [inputValue1, setInputValue1] = useState("")
  const [inputValue2, setInputValue2] = useState("")
  const [inputValue3, setInputValue3] = useState("")
  const [calcOperator, setCalcOperator] = useState<CalcOperators>(
    calcOperators[0]
  )
  const [showAnswer, setShowAnswer] = useState(false)
  const [count, setCount] = useState<number | null>(null)

  const math = create(all)

  const handleCalc = () => {
    try {
      const value1 = math.fraction(inputValue1)
      const value2 = math.fraction(inputValue2)
      let result: MathType | string

      switch (calcOperator) {
        case "+":
          result = math.add(value1, value2)
          break
        case "-":
          result = math.subtract(value1, value2)
          break
        case "×":
          result = math.multiply(value1, value2)
          break
        case "÷":
          if (math.equal(value2, 0)) {
            result = "ムリで〜す"
          } else {
            result = math.divide(value1, value2)
          }
          break
      }
      console.log(result)
      if (typeof result === "string") {
        setInputValue3(result)
      } else if (isFraction(result) && result.d === 1) {
        setInputValue3(result.s * result.n + "")
      } else {
        setInputValue3(math.format(result, { fraction: "ratio" }))
      }
    } catch (error) {
      setInputValue3("ムリで〜す")
    }
  }
  // Load step from localStorage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem("count")
    if (savedCount === null) {
      setCount(20)
    } else {
      setCount(Number(savedCount))
    }
  }, [])

  // Save step to localStorage whenever it changes
  useEffect(() => {
    if (count === null) return
    localStorage.setItem("count", count.toString())
  }, [count])

  useEffect(() => {
    setShowAnswer(false)
    handleCalc()
  }, [calcOperator, inputValue1, inputValue2])
  return (
    <div className="flex flex-col items-center justify-center bg-sky-100 px-4 py-8 rounded-2xl w-full h-full">
      <div className="text-lg text-black">
        自然数の王国で使える計算マシーンはどれだろう
      </div>
      <div className="flex flex-col justify-center items-center bg-sky-200 shadow-md rounded-md p-8 m-4">
        <div className="text-slate-600 mb-6">
          お試し計算マシーン（残り{count}回）
        </div>
        <div className="flex">
          {calcOperators.map((calcOperator) => (
            <div
              key={calcOperator}
              className=" bg-slate-700 shadow-md w-20 h-20 mx-2 text-center rounded-md text-white flex flex-col items-center justify-center hover:opacity-80 transition-opacity duration-200 ease-in-out cursor-pointer"
              onClick={() => {
                setCalcOperator(calcOperator)
              }}
            >
              {
                <>
                  <Image
                    src={calcRobot[calcOperator]}
                    width={32}
                    alt="Blue Robot"
                  ></Image>
                  <div className="text-white text-xs pt-2">
                    {calcName[calcOperator]}
                  </div>
                </>
              }
            </div>
          ))}
        </div>
        <div className="flex items-center my-8">
          <input
            type="text"
            className="p-4 w-40 text-center text-black"
            onChange={(e) => {
              setInputValue1(e.target.value)
            }}
          />
          <div className="px-2 text-2xl text-black w-8 text-center">
            {calcOperator}
          </div>
          <input
            type="text"
            className="p-4 w-40 text-center text-black"
            onChange={(e) => {
              setInputValue2(e.target.value)
            }}
          />
          <div className="px-2 text-2xl text-black w-8 text-center">=</div>
          <input
            type="text"
            className="p-4 w-40 text-center text-black"
            value={showAnswer ? inputValue3 : ""}
            readOnly={true}
          />
        </div>
        <button
          className=" bg-slate-700 shadow-md w-60 py-2 mx-2 text-center rounded-md text-white flex flex-col items-center justify-center hover:opacity-80 transition-opacity duration-200 ease-in-out cursor-pointer"
          style={{ opacity: (count ?? 20) < 1 ? 0.5 : undefined }}
          onClick={() => {
            setShowAnswer(true)
            setCount((prev) => (prev ?? 20) - 1)
          }}
          disabled={(count ?? 20) < 1}
        >
          計算する
        </button>
      </div>
      <div className="text-xs text-slate-500 py-2">
        答えが必ず自然数になる、使って良い計算マシーン　→　理由を説明する
      </div>
      <div className="text-xs text-slate-500 py-2">
        答えが自然数にならないことがある、使ってはいけない計算マシーン　→　反例を示す
      </div>
    </div>
  )
}

export default StageNaturalNumbers
