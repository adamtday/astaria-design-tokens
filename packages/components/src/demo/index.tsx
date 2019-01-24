import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "@heathmont/sportsbet-tokens";
import { mq, spacing } from "@heathmont/sportsbet-utils";

const Base = styled("div")`
  padding: ${spacing()};
  color: white;
  background-color: ${colors.error};
  border-radius: 3px;

  ${mq(breakpoints.small)} {
    background-color: ${colors.alternate.brand};
  }

  ${mq(breakpoints.medium)} {
    background-color: ${colors.alternate.highlight};
  }

  ${mq(breakpoints.large)} {
    background-color: ${colors.highlight};
  }

  ${mq(breakpoints.xlarge)} {
    background-color: ${colors.brand};
  }
`;

export interface Props {
  title: string;
  className?: string;
}

export const Demo = (props: Props) => (
  <Base className={props.className}>{props.title}</Base>
);