import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import { create, all, type MathType, isFraction } from "mathjs"

const calcOperators = ["+", "-", "×", "÷"] as const

type CalcOperators = (typeof calcOperators)[number]

const math = create(all)

const calcRobot = {
  "+": "/images/robot_blue.png",
  "-": "/images/robot_green.png",
  "×": "/images/robot_orange.png",
  "÷": "/images/robot_purple.png",
}

const calcName = {
  "+": "加法",
  "-": "減法",
  "×": "乗法",
  "÷": "除法",
}

const StageNaturalNumbers = (props: {
  setStep: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { setStep } = props

  const [inputValue1, setInputValue1] = useState("")
  const [inputValue2, setInputValue2] = useState("")
  const [inputValue3, setInputValue3] = useState("")
  const [calcOperator, setCalcOperator] = useState<CalcOperators>(
    calcOperators[0]
  )
  const [showAnswer, setShowAnswer] = useState(false)
  const [count, setCount] = useState<number | null>(null)
  const [showCheckDialog, setShowCheckDialog] = useState(true)

  const math = create(all)

  const handleCalc = useCallback(() => {
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
  }, [inputValue1, inputValue2, calcOperator, math])

  useEffect(() => {
    const savedCount = localStorage.getItem("count")
    if (savedCount === null) {
      setCount(20)
    } else {
      setCount(Number(savedCount))
    }
  }, [])

  useEffect(() => {
    if (count === null) return
    localStorage.setItem("count", count.toString())
  }, [count])

  useEffect(() => {
    setShowAnswer(false)
  }, [calcOperator, inputValue1, inputValue2])

  return (
    <div className="flex size-full flex-col items-center justify-center rounded-2xl bg-sky-100 px-4 py-8">
      {showCheckDialog && <div className="absolute"></div>}
      <div className="text-lg text-black">
        自然数の王国で使える計算マシーンはどれだろう
      </div>
      <div className="m-4 flex flex-col items-center justify-center rounded-md bg-sky-200 p-8 shadow-md">
        <div className="mb-6 text-slate-600">
          お試し計算マシーン（残り{count}回）
        </div>
        <div className="flex">
          {calcOperators.map((calcOperator) => (
            <div
              key={calcOperator}
              className=" mx-2 flex size-20 cursor-pointer flex-col items-center justify-center rounded-md bg-slate-700 text-center text-white shadow-md transition-opacity duration-200 ease-in-out hover:opacity-80"
              onClick={() => {
                setCalcOperator(calcOperator)
              }}
            >
              {
                <>
                  <Image
                    src={calcRobot[calcOperator]}
                    width={32}
                    height={32}
                    alt="Blue Robot"
                  ></Image>
                  <div className="pt-2 text-xs text-white">
                    {calcName[calcOperator]}
                  </div>
                </>
              }
            </div>
          ))}
        </div>
        <div className="my-8 flex items-center">
          <input
            type="text"
            className="w-40 p-4 text-center text-black"
            onChange={(e) => {
              setInputValue1(e.target.value)
            }}
          />
          <div className="w-8 px-2 text-center text-2xl text-black">
            {calcOperator}
          </div>
          <input
            type="text"
            className="w-40 p-4 text-center text-black"
            onChange={(e) => {
              setInputValue2(e.target.value)
            }}
          />
          <div className="w-8 px-2 text-center text-2xl text-black">=</div>
          <input
            type="text"
            className="w-40 p-4 text-center text-black"
            value={showAnswer ? inputValue3 : ""}
            readOnly={true}
          />
        </div>
        <button
          className=" mx-2 flex w-60 cursor-pointer flex-col items-center justify-center rounded-md bg-slate-700 py-2 text-center text-white shadow-md transition-opacity duration-200 ease-in-out hover:opacity-80"
          style={{ opacity: (count ?? 20) < 1 ? 0.5 : undefined }}
          onClick={() => {
            handleCalc()
            setShowAnswer(true)
            setCount((prev) => (prev ?? 20) - 1)
          }}
          disabled={(count ?? 20) < 1}
        >
          計算する
        </button>
      </div>
      <div className="flex items-center">
        <div
          className="mx-8 cursor-pointer select-none rounded-2xl bg-white/95 px-8 py-2 text-black transition-colors duration-200 ease-in-out hover:bg-white"
          onClick={() => setStep("Natural4")}
        >
          戻る
        </div>
        <div className="flex flex-col">
          <div className="py-2 text-xs text-slate-500">
            答えが必ず自然数になる、使って良い計算マシーン　→　理由を説明する
          </div>
          <div className="py-2 text-xs text-slate-500">
            答えが自然数にならないことがある、使ってはいけない計算マシーン　→　反例を示す
          </div>
        </div>
        <div
          className="mx-8 cursor-pointer select-none rounded-2xl bg-white/95 px-8 py-2 text-black transition-colors duration-200 ease-in-out hover:bg-white"
          onClick={() => {
            setShowCheckDialog(true)
          }}
        >
          チェック
        </div>
      </div>
    </div>
  )
}

export default StageNaturalNumbers
