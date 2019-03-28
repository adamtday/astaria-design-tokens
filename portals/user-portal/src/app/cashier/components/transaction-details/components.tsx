/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';

export const Summary = styled.summary({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: rem(64),
  alignItems: 'center',
  borderBottom: `${border.width}px solid ${colors.neutral[40]}`,
  /* arrow */
  '&::-webkit-details-marker': {
    color: colors.neutral[20],
    position: 'absolute',
    right: spacing('xsmall'),
    top: `calc(${spacing('large')} - 5px)`,
    [mq(breakpoints.medium)]: {
      right: spacing('small'),
    },
  },
});

export const Details = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: spacing(),
  paddingLeft: spacing('large'),
  paddingRight: spacing('large'),
  paddingBottom: spacing('large'),
  [mq(breakpoints.medium)]: {
    marginRight: spacing('xlarge'),
  },
});

export const TransactionHistory = styled.details<{ open?: boolean }>(
  ({ open }) => [
    {
      position: 'relative',
      '&[open]': {
        backgroundColor: colors.neutral[90],
      },
    },
  ]
);

export const DetailColumns = styled.div({
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const DetailColumn = styled.div({
  [mq(breakpoints.medium)]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});