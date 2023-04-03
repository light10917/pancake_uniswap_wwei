import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 46 45" {...props}>
<path d="M24.8021 0.641393L43.3397 12.3849C43.9223 12.754 44.4019 13.2631 44.7343 13.8653C45.0666 14.4675 45.241 15.1433 45.2413 15.8302V40.9135C45.2409 41.4505 45.1342 41.9822 44.9272 42.4782C44.7203 42.9742 44.4171 43.4248 44.0351 43.8042C43.6531 44.1837 43.1996 44.4846 42.7007 44.6898C42.2018 44.895 41.6671 45.0004 41.1272 45H24.7272L24.7286 32.4197H20.5636V44.9986L4.11413 45C3.57423 45.0004 3.03954 44.895 2.54059 44.6898C2.04164 44.4846 1.5882 44.1837 1.20617 43.8042C0.824139 43.4248 0.520991 42.9742 0.314036 42.4782C0.107081 41.9822 0.000371196 41.4505 0 40.9135V15.4773C0 14.0626 0.735171 12.7492 1.94538 12.0039L20.4236 0.613268C21.0821 0.207649 21.8424 -0.00488988 22.6169 8.53873e-05C23.3915 0.00506066 24.1489 0.227348 24.8021 0.641393ZM40.9999 40.7813V15.8795L22.591 4.21888L4.24137 15.5279V40.7813H16.4947V28.291H28.7989V40.7799L40.9999 40.7813Z" fill="#9FD900"/>
 
  </Svg>
);

export default Icon;
