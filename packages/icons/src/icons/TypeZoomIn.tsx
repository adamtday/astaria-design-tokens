import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#TypeZoomIn_svg__filter0_d_4798_4681)">
      <path
        d="M19.412 13.604a5.844 5.844 0 11-11.687 0 5.844 5.844 0 0111.687 0z"
        fill="#fff"
      />
      <path
        d="M13.568 19.448a5.844 5.844 0 100-11.687 5.844 5.844 0 000 11.687z"
        stroke="currentColor"
      />
      <path
        d="M16.756 12.542H14.63v-2.125h-2.125v2.125H10.38v2.104h2.125v2.146h2.125v-2.146h2.125v-2.104zM18.406 16.944l-1.503 1.503 5.793 5.792 1.502-1.502-5.792-5.793z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="TypeZoomIn_svg__filter0_d_4798_4681"
        x={-2}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4798_4681"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4798_4681"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TypeZoomIn =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default TypeZoomIn;
