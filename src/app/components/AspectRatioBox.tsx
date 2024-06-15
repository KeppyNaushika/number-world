import React, { useEffect, useRef, useState } from "react"

const AspectRatioBox = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(1)

  const handleResize = () => {
    if (containerRef.current) {
      const containerWidth = 960 // 固定幅
      const containerHeight = 540 // 固定高さ
      const scaleWidth = window.innerWidth / containerWidth
      const scaleHeight = window.innerHeight / containerHeight
      const newScale = Math.min(scaleWidth, scaleHeight)
      setScale(newScale)
      console.log(newScale)
    } else {
      console.log("containerRef.current is null")
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center"
        style={{
          overflow: "hidden",
          maxWidth: "100vw",
          maxHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "960px",
            height: "540px",
            transform: `scale(${scale})`,
            transformOrigin: "center",
            position: "absolute",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AspectRatioBox
