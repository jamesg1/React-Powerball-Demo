import React from 'react';
import { IconProps } from '../Icon';

const Lightning: React.FC<IconProps> = ({ width, fill }: IconProps) => (
  <svg
    id="lightning-icon"
    width={width}
    height={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path fill={fill} d="M8 24l3-9h-9l14-15-3 9h9l-14 15z" />
  </svg>
);

/** Svg Path Source: https://iconmonstr.com/connection-1-svg/ */

export default Lightning;
