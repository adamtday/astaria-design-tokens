import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      d="M24.91 27.439v.5h.011l-.011-.5zm-17.43 0v-.5h-.005l.005.5zm-1.215-1.09h-.5v.025l.003.025.497-.05zM4.288 5.221l-.496.06.002.02.004.02.49-.1zm.594-.66l-.009.5h.009v-.5zm22.626 0l.014-.499h-.014v.5zm.468.66l-.476-.15-.007.021-.005.023.488.106zm-2.102 21.128h-.5v.025l.002.025.498-.05zM13.39 24.715a.5.5 0 101 0h-1zm-5.447 0a.5.5 0 101 0h-1zm7.58-7.036a.5.5 0 000 1v-1zm1.63 1a.5.5 0 000-1v1zm-1.63.634a.5.5 0 000 1v-1zm2.992 1a.5.5 0 100-1v1zm1.911-1a.5.5 0 000 1v-1zm2.99 1a.5.5 0 100-1v1zm-11.16-8.626a.5.5 0 100 1v-1zm7.08 1a.5.5 0 100-1v1zm-3.812 9.35a.5.5 0 100 1v-1zm1.629 1a.5.5 0 000-1v1zm-1.634.633a.5.5 0 000 1v-1zm2.723 1a.5.5 0 100-1v1zm2.184-1a.5.5 0 000 1v-1zm2.99 1a.5.5 0 100-1v1zm1.493 2.269H7.48v1h17.43v-1zm-17.435 0a.709.709 0 01-.48-.182l-.668.745c.318.285.73.44 1.158.437l-.01-1zm-.48-.182a.71.71 0 01-.232-.457l-.995.099c.042.424.242.818.56 1.103l.667-.745zm-.23-.408V14.911h-1v11.438h1zm-.01-11.538L4.778 5.12l-.98.2 1.977 9.69.98-.2zm-1.97-9.65a.088.088 0 01.003-.038l-.954-.301a1.088 1.088 0 00-.042.46l.992-.121zm.003-.038a.088.088 0 01.018-.032l-.743-.67a1.088 1.088 0 00-.229.4l.954.302zm.018-.032a.088.088 0 01.03-.022l-.398-.917c-.143.062-.27.154-.375.27l.743.669zm.03-.022a.088.088 0 01.037-.007l.017-1a1.088 1.088 0 00-.452.09l.399.917zm.046-.007h22.626v-1H4.882v1zm22.612 0h.002l.472-.882a1.007 1.007 0 00-.446-.118l-.028 1zm.002 0l.003.002.815-.579a1.007 1.007 0 00-.346-.305l-.472.882zm.003.002v.003l.989-.155a1.007 1.007 0 00-.174-.427l-.815.58zm0 .003v.003l.954.302c.047-.149.059-.306.035-.46l-.988.155zm-.011.048l-2.103 9.69.977.212 2.103-9.69-.977-.212zm-2.114 9.796v11.438h1V14.911h-1zm.002 11.488a.492.492 0 01-.021.2l.951.307c.064-.195.086-.402.065-.606l-.995.099zm-.021.2a.49.49 0 01-.1.174l.75.663c.135-.154.238-.334.302-.53l-.952-.307zm-.1.174a.492.492 0 01-.16.12l.42.907c.186-.086.353-.21.49-.364l-.75-.663zm-.16.12a.49.49 0 01-.197.046l.023 1c.206-.005.408-.052.594-.139l-.42-.907zM6.264 15.411h19.609v-1H6.265v1zm4.902 7.08c.566 0 1.11-.224 1.51-.625l-.708-.707a1.134 1.134 0 01-.802.333v1zm1.51-.625c.4-.4.624-.942.624-1.508h-1c0 .3-.12.589-.332.801l.707.707zm.624-1.508v-.545h-1v.545h1zm0-.545c0-.566-.224-1.109-.625-1.51l-.707.708c.213.213.332.501.332.802h1zm-.625-1.51c-.4-.4-.943-.624-1.509-.624v1c.301 0 .59.12.802.332l.707-.707zm-1.509-.624c-.566 0-1.108.225-1.509.625l.708.707c.212-.213.5-.332.801-.332v-1zm-1.509.625c-.4.4-.625.943-.625 1.509h1c0-.3.12-.59.333-.802l-.708-.707zm-.625 1.509v.545h1v-.545h-1zm0 .545c0 .566.225 1.108.625 1.508l.708-.707a1.134 1.134 0 01-.333-.801h-1zm.625 1.508c.4.4.943.626 1.51.626v-1c-.301 0-.59-.12-.802-.333l-.708.707zm4.733 2.849v-1.09h-1v1.09h1zm0-1.09c0-.888-.684-1.424-1.305-1.711a4.896 4.896 0 00-1.919-.422v1c.401 0 1.009.102 1.5.33.51.235.724.516.724.804h1zm-3.224-2.133c-.525 0-1.279.126-1.919.422-.62.287-1.304.823-1.304 1.712h1c0-.288.214-.569.724-.805a3.902 3.902 0 011.5-.33v-1zm-3.223 2.134v1.089h1v-1.09h-1zm7.58-4.947h1.63v-1h-1.63v1zm0 1.634h2.992v-1h-2.991v1zm4.903 0h2.99v-1h-2.99v1zm-8.17-7.626h7.08v-1h-7.08v1zm3.268 10.35h1.629v-1h-1.63v1zm-.005 1.633h2.723v-1H15.52v1zm4.907 0h2.99v-1h-2.99v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityPassport =
  styled(Svg) <
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
export default SecurityPassport;
