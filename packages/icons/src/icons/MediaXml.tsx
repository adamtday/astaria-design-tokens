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
    <path
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM17.573 19.734a.5.5 0 101 0h-1zm.5-3.934h.5a.5.5 0 00-.903-.296l.403.296zm-1.871 2.553l-.404.296a.5.5 0 00.807 0l-.403-.296zM14.33 15.8l.403-.296a.5.5 0 00-.903.296h.5zm-.5 3.934a.5.5 0 101 0h-1zm-.98-3.63a.5.5 0 10-.794-.608l.795.608zm-3.747 3.253a.5.5 0 10.794.608l-.794-.608zm.794-3.86a.5.5 0 00-.794.607l.794-.608zm2.16 4.468a.5.5 0 00.794-.608l-.795.608zM20.59 15.8a.5.5 0 10-1 0h1zm-.5 4h-.5a.5.5 0 00.5.5v-.5zm2.41.5a.5.5 0 100-1v1zm-3.927-.566V15.8h-1v3.934h1zm-.903-4.23l-1.872 2.553.807.591 1.871-2.552-.806-.592zm-1.065 2.553l-1.872-2.553-.806.592 1.872 2.553.806-.592zM13.83 15.8v3.934h1V15.8h-1zm-1.774-.304l-2.953 3.861.794.608 2.954-3.861-.795-.608zm-2.953.608l2.953 3.86.795-.607-2.954-3.86-.794.607zM19.59 15.8v4h1v-4h-1zm.5 4.5h2.41v-1h-2.41v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaXml =
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
export default MediaXml;
