import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIconHamburger = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={17} {...props}>
    <Path
      fill="#FFF"
      fillRule="evenodd"
      d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z"
    />
  </Svg>
);
export default SvgIconHamburger;
