import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 54 62" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.7138 0L53.3488 15.1357V46.3947L27.4137 62L0 46.4288V14.6023L26.7138 0ZM4.05695 17.0335V44.0423L27.355 57.2758L49.2919 44.0764V17.5216L26.6756 4.66965L4.05695 17.0335Z"
        fill="#9FD900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6664 12.8276L40.5012 20.7434L50.1961 14.7617L52.2819 18.3868L40.5017 25.6552L27.5423 17.6625L14.1497 24.9541L2.13395 18.3088L4.05362 14.5866L14.1646 20.1786L27.6664 12.8276Z"
        fill="#9FD900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.292 22.4483L41.6121 30.7393L39.6047 34.2069L27.281 27.0717L15.8615 33.6107L13.8707 30.1335L27.292 22.4483Z"
        fill="#9FD900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.8048 35.2759L41.6121 44.3755L39.5874 48.1034L26.7914 40.2398L14.8083 47.5068L12.8037 43.7666L26.8048 35.2759Z"
        fill="#9FD900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.4112 51.3103V22.4483H42.6791V51.3103H38.4112Z"
        fill="#9FD900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7367 52.3793V21.3793H16.0046V52.3793H11.7367Z"
        fill="#9FD900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6074 38.4828V24.5862H28.8084V38.4828H25.6074Z"
        fill="#9FD900"
      />
    </Svg>
  );
};

export default Icon;
