import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bloks() {
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0h5a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm0 11h5a2 2 0 012 2v9a2 2 0 01-2 2H2a2 2 0 01-2-2v-9a2 2 0 012-2zM13 0h9a2 2 0 012 2v11a2 2 0 01-2 2h-9a2 2 0 01-2-2V2a2 2 0 012-2zm0 17h9a2 2 0 012 2v3a2 2 0 01-2 2h-9a2 2 0 01-2-2v-3a2 2 0 012-2z"
        fill="#758CA3"
      />
    </Svg>
  )
}

export default Bloks