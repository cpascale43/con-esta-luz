import React, { useEffect, useState, useRef } from "react"

const Triangle = ({ children }) => {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [containerRef])
  return (
    <div className="triangle-wrapper" ref={containerRef}>
      <div
        className="triangle"
        style={{
          width: "0%",
          height: "0%",
          position: "absolute",
          zIndex: "-1",
          borderTop: `${containerWidth}px solid transparent`,
          borderBottom: `${containerWidth}px solid transparent`,
          borderLeft: `${containerWidth}px solid green`,
        }}
      />
      {children}
    </div>
  )
}

export default Triangle
