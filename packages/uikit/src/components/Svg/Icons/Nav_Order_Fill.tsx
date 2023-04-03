import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 38 46"  {...props}>
<path d="M9 19H30V22.6885H9V19ZM9 28.3115H26.5749V32H9V28.3115Z" fill="#9FD900"/>
<path d="M35.5994 46H2.34207L0 43.5962V2.40385L2.34207 0H22.1325L23.6549 0.600961L31.5008 7.51202L37.1217 12.1995L38 14.0625V43.5962L35.5994 46ZM4.68413 41.1923H33.3159V15.2043L28.4561 11.1779L21.1957 4.80769H4.68413V41.1923Z" fill="#9FD900"/>

  </Svg>
);

export default Icon;
