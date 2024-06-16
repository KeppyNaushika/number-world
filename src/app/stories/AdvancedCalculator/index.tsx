import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import { create, all, type MathType, isFraction } from "mathjs"

const calcOperators = ["+", "-", "×", "÷", "^"] as const

type CalcOperators = (typeof calcOperators)[number]

const math = create(all)

const calcRobot = {
  "+": "/images/robot_blue.png",
  "-": "/images/robot_green.png",
  "×": "/images/robot_orange.png",
  "÷": "/images/robot_purple.png",
  "^": "/images/robot_pink.png",
}

const calcName = {
  "+": "加法",
  "-": "減法",
  "×": "乗法",
  "÷": "除法",
  "^": "累乗/冪乗",
}

const Index = (props: {
  backStep: string
  setStep: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { backStep, setStep } = props

  const [inputValue1, setInputValue1] = useState("")
  const [inputValue2, setInputValue2] = useState("")
  const [inputValue3, setInputValue3] = useState("")
  const [calcOperator, setCalcOperator] = useState<CalcOperators>(
    calcOperators[0]
  )
  const [showAnswer, setShowAnswer] = useState(false)

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
        case "^":
          try {
            let adjustedValue1 = value1
            if (value2.s < 0) {
              adjustedValue1 = math.fraction(value1.d, value1.n)
            }
            const numeratorPower = math.pow(
              adjustedValue1.n,
              math.abs(value2.n)
            )
            const denominatorPower = math.pow(
              adjustedValue1.d,
              math.abs(value2.n)
            )
            const resultSymbol = value1.s === 1 || value2.n % 2 === 0 ? 1 : -1
            console.log(numeratorPower, denominatorPower)
            if (
              typeof numeratorPower !== "number" ||
              typeof denominatorPower !== "number"
            ) {
              result = "計算不可"
            } else {
              if (resultSymbol === -1 && value2.d % 2 === 0) {
                result = "数直線上に無い数"
              } else {
                const numeratorRoot = math.nthRoot(numeratorPower, value2.d)
                const denominatorRoot = math.nthRoot(denominatorPower, value2.d)
                result = math.divide(
                  math.multiply(resultSymbol, numeratorRoot),
                  denominatorRoot
                )
                if (typeof result !== "string") {
                  result = math.format(
                    math.simplify(math.parse(math.format(result)))
                  )
                }
              }
            }
          } catch (e) {
            result = "ムリで〜す"
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
  }

  useEffect(() => {
    setShowAnswer(false)
  }, [calcOperator, inputValue1, inputValue2])

  return (
    <div className="flex size-full flex-col items-center justify-center rounded-2xl bg-sky-100 px-4 py-8">
      <div className="text-lg text-black">
        計算マシーンにいろいろな値を入れて試してみよう
      </div>
      <div className="m-4 flex flex-col items-center justify-center rounded-md bg-sky-200 p-8 shadow-md">
        <div className="mb-6 text-slate-600">計算マシーン</div>
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
                    alt="Robot"
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
          onClick={() => {
            handleCalc()
            setShowAnswer(true)
          }}
        >
          計算する
        </button>
      </div>
      <div className="flex items-center">
        <div
          className="mx-8 cursor-pointer select-none rounded-2xl bg-white/95 px-8 py-2 text-black transition-colors duration-200 ease-in-out hover:bg-white"
          onClick={() => setStep(backStep)}
        >
          戻る
        </div>
        <div className="flex flex-col">
          <div className="py-2 text-xs text-slate-500">
            「5³」を「5^3」、「2¹²」を「2^12」と表します。
          </div>
          <div className="py-2 text-xs text-slate-500">
            指数が自然数でないとき、累乗（るいじょう）ではなく冪乗（べきじょう）といいます。
          </div>
        </div>
        <div className="mx-8 cursor-pointer select-none rounded-2xl bg-white/0 px-8 py-2 text-black transition-colors duration-200 ease-in-out hover:bg-white">
          　
        </div>
      </div>
    </div>
  )
}

export default Index
