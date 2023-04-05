import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 59 59" {...props}>
<circle cx="29.5" cy="29.5" r="29.5" fill="#F0F0F0"/>
<path d="M38.1973 31.707L29.0049 40.8994L19.8125 31.707" stroke="#9FD901" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 40.8998V18.0322" stroke="#9FD901" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

    </Svg>
  );
};

export default Icon;
