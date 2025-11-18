import * as React from "react";
import Svg, { Defs, Circle, G, Mask, Use, Path } from "react-native-svg";
const SvgPlanetMars = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={336}
    height={336}
    {...props}
  >
    <Defs>
      <Circle id="planet-mars_svg__a" cx={168} cy={168} r={168} />
      <Circle id="planet-mars_svg__c" cx={168} cy={168} r={168} />
      <Circle id="planet-mars_svg__e" cx={168} cy={168} r={168} />
      <Circle id="planet-mars_svg__g" cx={168} cy={168} r={168} />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Circle cx={168} cy={168} r={168} fill="#FF6A45" fillRule="nonzero" />
      <Mask id="planet-mars_svg__b" fill="#fff">
        <Use xlinkHref="#planet-mars_svg__a" />
      </Mask>
      <Path
        fill="#FF9B6B"
        fillRule="nonzero"
        d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.5 11.99V48h13c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12m172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12z"
        mask="url(#planet-mars_svg__b)"
      />
      <Mask id="planet-mars_svg__d" fill="#fff">
        <Use xlinkHref="#planet-mars_svg__c" />
      </Mask>
      <Path
        fill="#FF9B6B"
        fillRule="nonzero"
        d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12m172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12z"
        mask="url(#planet-mars_svg__d)"
      />
      <Mask id="planet-mars_svg__f" fill="#fff">
        <Use xlinkHref="#planet-mars_svg__e" />
      </Mask>
      <Path
        fill="#D04237"
        fillRule="nonzero"
        d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12z"
        mask="url(#planet-mars_svg__f)"
      />
      <Mask id="planet-mars_svg__h" fill="#fff">
        <Use xlinkHref="#planet-mars_svg__g" />
      </Mask>
      <Path
        fill="#000"
        fillRule="nonzero"
        d="M169-16h184v368H169z"
        mask="url(#planet-mars_svg__h)"
        opacity={0.078}
      />
    </G>
  </Svg>
);
export default SvgPlanetMars;
