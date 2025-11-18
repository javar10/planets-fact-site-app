import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIconSource = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <Path
      fill="#FFF"
      d="M11.34.66Q10.68 0 9.75 0h-7.5Q1.32 0 .66.66T0 2.25v7.5q0 .93.66 1.59t1.59.66h7.5q.93 0 1.59-.66T12 9.75v-7.5q0-.93-.66-1.59M10 6.25a.47.47 0 0 1-.305.46.5.5 0 0 1-.195.04.47.47 0 0 1-.352-.149L8.023 5.476 3.852 9.648a.48.48 0 0 1-.352.149.48.48 0 0 1-.352-.149l-.796-.797a.48.48 0 0 1-.149-.351.48.48 0 0 1 .149-.352l4.172-4.172-1.125-1.125q-.243-.226-.11-.546A.47.47 0 0 1 5.75 2H9.5q.203 0 .352.148A.48.48 0 0 1 10 2.5z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgIconSource;
