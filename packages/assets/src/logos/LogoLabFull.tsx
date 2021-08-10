import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 192 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 0.000787908C12.0069 0.0129702 6.81593 0.21351 3.51472 3.51472C0 7.02944 0 12.6863 0 24V40C0 51.3137 0 56.9706 3.51472 60.4853C7.02944 64 12.6863 64 24 64H40C51.3137 64 56.9706 64 60.4853 60.4853C64 56.9706 64 51.3137 64 40C64 49.0921 64 54.5308 65.8242 58.1403L96.2886 27.6759L99.8241 31.2114L99.8178 31.2178L126.359 57.7588C128 54.1498 128 48.7773 128 40C128 51.3137 128 56.9706 131.515 60.4853C135.029 64 140.686 64 152 64H168C179.314 64 184.971 64 188.485 60.4853C189.693 59.2778 190.485 57.8174 191.006 55.9617C190.674 55.9871 190.338 56 190 56H170C162.82 56 157 50.1797 157 43C157 38.3685 159.422 34.3026 163.069 32C159.422 29.6974 157 25.6315 157 21C157 13.8203 162.82 8 170 8H190C190.338 8 190.674 8.01294 191.006 8.03833C190.485 6.1826 189.693 4.72224 188.485 3.51472C184.971 0 179.314 0 168 0H152C140.686 0 135.029 0 131.515 3.51472C128 7.02944 128 12.6863 128 24C128 12.6863 128 7.02944 124.485 3.51472C120.971 0 115.314 0 104 0H88C76.6863 0 71.0294 0 67.5147 3.51472C64 7.02944 64 12.6863 64 24C64 12.6863 64 7.02944 60.4853 3.51472C56.9706 0 51.3137 0 40 0H27V37.5H49.5V42.5H22.5H22V42V0.000787908ZM123.129 61.5999L96.2822 34.7533L69.2161 61.8194C72.8162 64 78.3506 64 88 64H104C113.963 64 119.539 64 123.129 61.5999ZM190 13C190.618 13 191.219 13.07 191.796 13.2025C192 16.0902 192 19.6215 192 24V28.748C191.361 28.9125 190.691 29 190 29H170C165.582 29 162 25.4183 162 21C162 16.5817 165.582 13 170 13H190ZM190 35C190.691 35 191.361 35.0875 192 35.252V40C192 44.3785 192 47.9098 191.796 50.7975C191.219 50.93 190.618 51 190 51H170C165.582 51 162 47.4183 162 43C162 38.5817 165.582 35 170 35H190Z" fill="black" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoLabFull = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
LogoLabFull.defaultProps = {
    
  };
export default LogoLabFull;