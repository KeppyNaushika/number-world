"use client"
import React, { useEffect, useState } from "react"

import { create, all, type MathType } from "mathjs"
import Image from "next/image"

import Robot_blue from "@/images/robot_blue.png"
import Robot_green from "@/images/robot_green.png"
import Robot_orange from "@/images/robot_orange.png"
import Robot_purple from "@/images/robot_purple.png"

const calcOperators = ["+", "-", "×", "÷"] as const

type CalcOperators = (typeof calcOperators)[number]


const BlueRobot = () => {
  const [inputValue1, setInputValue1] = useState("")
  const [inputValue2, setInputValue2] = useState("")
  const [inputValue3, setInputValue3] = useState("")
  const [calcOperator, setCalcOperator] = useState<CalcOperators>(
    calcOperators[0]
  )

  const math = create(all)

  const isInteger = (value: string) => {
    return /^[+-]?\d+$/.test(value)
  }

  const handleCalc = () => {
    try {
      if (!isInteger(inputValue1) || !isInteger(inputValue2)) {
        setInputValue3("ムリで〜す")
        return
      }

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
        default:
          result = "ムリで〜す"
      }
    } catch (error) {
      setInputValue3("ムリで〜す")
    }
  }

  useEffect(() => {
    handleCalc()
  }, [calcOperator, inputValue1, inputValue2])

  return (
    <div className="flex flex-col items-center bg-sky-100 px-4 py-8 rounded-2xl">
      <Image src={Robot_blue} width={80} alt="Blue Robot"></Image>
      <div className="flex items-center my-8">
        <input
          type="text"
          className="p-4 w-24 text-center text-black text-xs"
          onChange={(e) => {
            setInputValue1(e.target.value)
            setInputValue3("")
          }}
        />
        <div className="px-2 text-2xl text-black w-8 text-center">
          {calcOperator}
        </div>
        <input
          type="text"
          className="p-4 w-24 text-center text-black text-xs"
          onChange={(e) => {
            setInputValue2(e.target.value)
            setInputValue3("")
          }}
        />
        <div className="px-2 text-2xl text-black w-8 text-center">=</div>
        <input
          type="text"
          className="p-4 w-24 text-center text-black text-xs"
          value={inputValue3}
          readOnly={true}
        />
      </div>
      <div className="flex">
        {calcOperators.map((calcOperator) => (
          <div
            key={calcOperator}
            className=" bg-slate-700 shadow-md w-20 py-4 mx-2 text-center rounded-md text-white"
            onClick={() => {
              setCalcOperator(calcOperator)
            }}
          >
            {calcOperator}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlueRobot