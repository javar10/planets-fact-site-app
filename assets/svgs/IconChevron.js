import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIconChevron = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={6} height={8} {...props}>
    <Path fill="none" stroke="#FFF" d="m1 0 4 4-4 4" opacity={0.4} />
  </Svg>
);
export default SvgIconChevron;
