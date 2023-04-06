import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg color="#FFFFFF" viewBox="0 0 42 46" {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M19 3.1547C20.2376 2.44017 21.7624 2.44017 23 3.1547L37.1865 11.3453C38.4241 12.0598 39.1865 13.3803 39.1865 14.8094V31.1906C39.1865 32.6197 38.4241 33.9402 37.1865 34.6547L23 42.8453C21.7624 43.5598 20.2376 43.5598 19 42.8453L4.81347 34.6547C3.57586 33.9402 2.81347 32.6197 2.81347 31.1906V14.8094C2.81347 13.3803 3.57586 12.0598 4.81347 11.3453L19 3.1547Z" stroke="black" strokeWidth="5" strokeLinejoin="round"/>
<circle cx="21.0004" cy="23.0004" r="6.6" stroke="black" strokeWidth="5"/>

    </Svg>
  );
};

export default Icon;
