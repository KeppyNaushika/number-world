"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { MdSettings } from "react-icons/md"

import AspectRatioBox from "./components/AspectRatioBox"

import Intro0 from "./stories/intro/intro0"
import Natural0 from "./stories/NaturalNumbers/Natural0"
import Natural1 from "./stories/NaturalNumbers/Natural1"
import Natural2 from "./stories/NaturalNumbers/Natural2"
import Natural3 from "./stories/NaturalNumbers/Natural3"
import Natural4 from "./stories/NaturalNumbers/Natural4"
import Natural5 from "./stories/NaturalNumbers/Natural5"

import NaturalNumberes from "@/images/natural_numbers.png"
import IntergerNumbers from "@/images/integer_numbers.png"
import RationalNumbers from "@/images/rational_numbers.png"
import StageNaturalNumbers from "./stories/NaturalNumbers/StageNaturalNumbers"

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
    nextStep: "stageNaturalNumbers",
    component: <Natural5 />,
  },
  {
    step: "stageNaturalNumbers",
  },
]

const Settings = (props: {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [password, setPassword] = useState("")
  console.log(password === "password")
  const { setShowSettings } = props

  return (
    <div
      className="absolute animate-floatInFromTop w-full h-full bg-lime-50/95 flex flex-col p-12 items-center justify-center z-50"
      onClick={() => setShowSettings(false)}
    >
      <div className="text-center text-black text-2xl py-8">王の力</div>
      <button disabled>
        <input
          type="password"
          placeholder="Password"
          className="w-60 p-2 text-center text-black"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => {}}
        />
      </button>

      <div className="flex pt-12">
        <button
          className={`w-36 text-center p-4 mx-4 bg-lime-100 rounded-lg shadow-sm ${
            password === "password" ? "text-black" : "text-black/20"
          }`}
          disabled={password !== "password"}
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
        >
          最初から
        </button>
        <button
          className={`w-36 text-center p-4 mx-4 bg-lime-100 rounded-lg shadow-sm ${
            password === "password" ? "text-black" : "text-black/20"
          }`}
          disabled={password !== "password"}
          onClick={() => {
            localStorage.removeItem("count")
            window.location.reload()
          }}
        >
          回数リセット
        </button>
      </div>
    </div>
  )
}

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
      <div className="bg-gray-200 text-white flex flex-col items-center justify-center h-full">
        {showSettings && <Settings setShowSettings={setShowSettings} />}
        {step.startsWith("Natural") && (
          <Image
            src={NaturalNumberes}
            alt="Integer Numbers"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
        )}
        {step.startsWith("Integer") && (
          <Image
            src={IntergerNumbers}
            alt="Integer Numbers"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
        )}
        {step.startsWith("Rational") && (
          <Image
            src={RationalNumbers}
            alt="Integer Numbers"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
        )}
        <div className="flex flex-col w-full h-full z-10">
          <div
            className="absolute text-slate-50 text-xs p-2 select-none cursor-pointer rounded-md"
            onClick={handleSettingBtnClick}
          >
            <MdSettings size={24} />
          </div>

          {(step.startsWith("intro") ||
            step.startsWith("Natural") ||
            step.startsWith("Integer") ||
            step.startsWith("Rational")) && (
            <>
              <div className="flex justify-around h-1/6"></div>
              <div className="flex flex-col justify-center content-center h-2/3 bg-white/95 mx-12 rounded-2xl">
                {stories.find((story) => story.step === step)?.component}
              </div>
              <div className="flex justify-around h-1/6 items-center">
                <div
                  className="text-black select-none cursor-pointer px-8 py-2 transition-colors duration-200 ease-in-out rounded-2xl bg-white/95 hover:bg-white"
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
                  className="text-black select-none cursor-pointer px-8 py-2 transition-colors duration-200 ease-in-out rounded-2xl bg-white/95 hover:bg-white"
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
          {step === "stageNaturalNumbers" && <StageNaturalNumbers />}
        </div>
      </div>
    </AspectRatioBox>
  )
}
