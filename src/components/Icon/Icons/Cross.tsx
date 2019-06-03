import React from 'react';
import { IconProps } from '../Icon';

const Cross: React.FC<IconProps> = ({ width, fill }: IconProps) => (
  <svg
    id="cross-icon"
    width={width}
    height={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path
      fill={fill}
      d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
    />
  </svg>
);

/** Svg Path Source: https://iconmonstr.com/x-mark-1-svg/ */

export default Cross;
