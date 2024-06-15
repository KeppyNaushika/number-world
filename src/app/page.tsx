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
      className="absolute z-50 flex size-full animate-floatInFromTop flex-col items-center justify-center bg-lime-50/95 p-12"
      onClick={() => setShowSettings(false)}
    >
      <div className="py-8 text-center text-2xl text-black">王の力</div>
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
          className={`mx-4 w-36 rounded-lg bg-lime-100 p-4 text-center shadow-sm ${
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
          className={`mx-4 w-36 rounded-lg bg-lime-100 p-4 text-center shadow-sm ${
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
      <div className="flex h-full flex-col items-center justify-center bg-gray-200 text-white">
        {showSettings && <Settings setShowSettings={setShowSettings} />}
        {step.startsWith("Natural") && (
          <Image
            src={"/images/natural_numbers.png"}
            alt="Integer Numbers"
            className="absolute inset-0 size-full object-cover"
            style={{ opacity: 0.5 }}
          />
        )}
        {step.startsWith("Integer") && (
          <Image
            src={"/images/integer_numbers.png"}
            alt="Integer Numbers"
            className="absolute inset-0 size-full object-cover"
            style={{ opacity: 0.5 }}
          />
        )}
        {step.startsWith("Rational") && (
          <Image
            src={"/images/rational_numbers.png"}
            alt="Integer Numbers"
            className="absolute inset-0 size-full object-cover"
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
            step.startsWith("Rational")) && (
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
          {step === "stageNaturalNumbers" && <StageNaturalNumbers />}
        </div>
      </div>
    </AspectRatioBox>
  )
}
