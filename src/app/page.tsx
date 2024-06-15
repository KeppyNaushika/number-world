"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { MdSettings } from "react-icons/md"

import AspectRatioBox from "./components/AspectRatioBox"

import Settings from "./components/Settings"

import CalculatorStage from "./stories/CalculatorStage"

import Intro0 from "./stories/Intro/intro0"
import Natural0 from "./stories/NaturalNumbers/Natural0"
import Natural1 from "./stories/NaturalNumbers/Natural1"
import Natural2 from "./stories/NaturalNumbers/Natural2"
import Natural3 from "./stories/NaturalNumbers/Natural3"
import Natural4 from "./stories/NaturalNumbers/Natural4"
import Natural5 from "./stories/NaturalNumbers/Natural5"

import Integer0 from "./stories/IntegerNumbers/Integer0"
import Integer1 from "./stories/IntegerNumbers/Integer1"
import Integer2 from "./stories/IntegerNumbers/Integer2"

import Rational0 from "./stories/RationalNumbers/Rational0"
import Rational1 from "./stories/RationalNumbers/Rational1"
import Rational2 from "./stories/RationalNumbers/Rational2"

import Epilogue0 from "./stories/Epilogue/Epilogue0"
import Epilogue1 from "./stories/Epilogue/Epilogue1"
import Epilogue2 from "./stories/Epilogue/Epilogue2"
import Epilogue3 from "./stories/Epilogue/Epilogue3"
import Epilogue4 from "./stories/Epilogue/Epilogue4"

interface Story {
  step: string
  nextStep?: string
  backStep?: string
  component?: JSX.Element
}

const stories: Story[] = [
  {
    step: "intro0",
    nextStep: "Natural0",
    component: <Intro0 />,
  },
  {
    step: "Natural0",
    backStep: "intro0",
    nextStep: "Natural1",
    component: <Natural0 />,
  },
  {
    step: "Natural1",
    backStep: "Natural0",
    nextStep: "Natural2",
    component: <Natural1 />,
  },
  {
    step: "Natural2",
    backStep: "Natural1",
    nextStep: "Natural3",
    component: <Natural2 />,
  },
  {
    step: "Natural3",
    backStep: "Natural2",
    nextStep: "Natural4",
    component: <Natural3 />,
  },
  {
    step: "Natural4",
    backStep: "Natural3",
    nextStep: "Natural5",
    component: <Natural4 />,
  },
  {
    step: "Natural5",
    backStep: "Natural4",
    nextStep: "StageNaturalNumbers",
    component: <Natural5 />,
  },
  {
    step: "StageNaturalNumbers",
  },
  {
    step: "Integer0",
    nextStep: "Integer1",
    component: <Integer0 />,
  },
  {
    step: "Integer1",
    backStep: "Integer0",
    nextStep: "Integer2",
    component: <Integer1 />,
  },
  {
    step: "Integer2",
    backStep: "Integer1",
    nextStep: "StageIntegerNumbers",
    component: <Integer2 />,
  },
  {
    step: "StageIntegerNumbers",
  },
  {
    step: "Rational0",
    nextStep: "Rational1",
    component: <Rational0 />,
  },
  {
    step: "Rational1",
    backStep: "Rational0",
    nextStep: "Rational2",
    component: <Rational1 />,
  },
  {
    step: "Rational2",
    backStep: "Rational1",
    nextStep: "StageRationalNumbers",
    component: <Rational2 />,
  },
  {
    step: "StageRationalNumbers",
  },
  {
    step: "Epilogue0",
    nextStep: "Epilogue1",
    component: <Epilogue0 />,
  },
  {
    step: "Epilogue1",
    backStep: "Epilogue0",
    nextStep: "Epilogue2",
    component: <Epilogue1 />,
  },
  {
    step: "Epilogue2",
    backStep: "Epilogue1",
    nextStep: "Epilogue3",
    component: <Epilogue2 />,
  },
  {
    step: "Epilogue3",
    backStep: "Epilogue2",
    nextStep: "Epilogue4",
    component: <Epilogue3 />,
  },
  {
    step: "Epilogue4",
    backStep: "Epilogue3",
    component: <Epilogue4 />,
  },
]

export default function Home() {
  const [step, setStep] = useState("")
  const [showSettings, setShowSettings] = useState(false)

  const handleSettingBtnClick = () => {
    setShowSettings((prev) => !prev)
  }

  // Load step from localStorage on mount
  useEffect(() => {
    const savedStep = localStorage.getItem("step")
    if (savedStep === null) {
      setStep("intro0")
    } else {
      setStep(savedStep)
    }
  }, [])

  // Save step to localStorage whenever it changes
  useEffect(() => {
    if (step === "") return
    localStorage.setItem("step", step)
  }, [step])

  return (
    <AspectRatioBox>
      <div className="flex h-full flex-col items-center justify-center bg-gray-200 text-white">
        {showSettings && <Settings setShowSettings={setShowSettings} />}
        {step.startsWith("Natural") && (
          <Image
            src={"/images/natural_numbers.png"}
            alt="Integer Numbers"
            className="absolute inset-0 size-full object-cover"
            layout="fill"
            style={{ opacity: 0.5 }}
          />
        )}
        {step.startsWith("Integer") && (
          <Image
            src={"/images/integer_numbers.png"}
            alt="Integer Numbers"
            className="absolute inset-0 size-full object-cover"
            layout="fill"
            style={{ opacity: 0.5 }}
          />
        )}
        {step.startsWith("Rational") && (
          <Image
            src={"/images/rational_numbers.png"}
            alt="Integer Numbers"
            className="absolute inset-0 size-full object-cover"
            layout="fill"
            style={{ opacity: 0.5 }}
          />
        )}
        <div className="z-10 flex size-full flex-col">
          <div
            className="absolute cursor-pointer select-none rounded-md p-2 text-xs text-slate-50"
            onClick={handleSettingBtnClick}
          >
            <MdSettings size={24} />
          </div>

          {(step.startsWith("intro") ||
            step.startsWith("Natural") ||
            step.startsWith("Integer") ||
            step.startsWith("Rational") ||
            step.startsWith("Epilogue")) && (
            <>
              <div className="flex h-1/6 justify-around"></div>
              <div className="mx-12 flex h-2/3 flex-col content-center justify-center rounded-2xl bg-white/95">
                {stories.find((story) => story.step === step)?.component}
              </div>
              <div className="flex h-1/6 items-center justify-around">
                <div
                  className="cursor-pointer select-none rounded-2xl bg-white/95 px-8 py-2 text-black transition-colors duration-200 ease-in-out hover:bg-white"
                  style={{
                    opacity: stories.find((story) => story.step === step)
                      ?.backStep
                      ? 1
                      : 0,
                  }}
                  onClick={() => {
                    setStep(
                      stories.find((story) => story.step === step)?.backStep ??
                        step
                    )
                  }}
                >
                  戻る
                </div>
                <div
                  className="cursor-pointer select-none rounded-2xl bg-white/95 px-8 py-2 text-black transition-colors duration-200 ease-in-out hover:bg-white"
                  style={{
                    opacity: stories.find((story) => story.step === step)
                      ?.nextStep
                      ? 1
                      : 0,
                  }}
                  onClick={() => {
                    setStep(
                      stories.find((story) => story.step === step)?.nextStep ??
                        step
                    )
                  }}
                >
                  次へ
                </div>
              </div>
            </>
          )}
          {step === "StageNaturalNumbers" && (
            <CalculatorStage
              password={"NATURAL NUMBERS"}
              setOfNumberDescription={"自然数"}
              backStep="Natural4"
              nextStep="Integer0"
              setStep={setStep}
            />
          )}
          {step === "StageIntegerNumbers" && (
            <CalculatorStage
              password={"INTEGER NUMBERS"}
              setOfNumberDescription={"整数"}
              backStep="Integer1"
              nextStep="Rational0"
              setStep={setStep}
            />
          )}
          {step === "StageRationalNumbers" && (
            <CalculatorStage
              password={"RATIONAL NUMBERS"}
              setOfNumberDescription={"数"}
              backStep="Rational1"
              nextStep="Epilogue0"
              setStep={setStep}
            />
          )}
        </div>
      </div>
    </AspectRatioBox>
  )
}
