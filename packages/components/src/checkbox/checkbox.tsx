/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import size from 'polished/lib/shorthands/size';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { hyphenate, spacing } from '@heathmont/sportsbet-utils';
import { Label } from '../private/label';
import { inputBorder, inputColors } from '../private/input';

/**
 * Types
 */
type CheckboxProps = {
  label: string;
  disabled?: boolean;
};

/**
 * Functions
 */
const createId = (id: string) => `Checkbox-${hyphenate(id)}`;

/**
 * Styles
 */
const CheckboxContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

/* 1. Creates a transparent gap between border and backgroundColor */
const CheckboxInput = styled.input({
  ...size(rem(20)),
  position: 'relative',
  marginRight: spacing(),
  padding: rem(2) /* [1] */,
  backgroundClip: 'content-box' /* [1] */,
  alignSelf: 'center',
  border: inputBorder,
  borderRadius: border.radius.small,
  backgroundColor: 'transparent',
  appearance: 'none',
  '&:checked': {
    backgroundColor: colors.brand,
  },
  '&:disabled': {
    borderColor: inputColors.disabled,
    cursor: 'not-allowed',
  },
});

const checkboxLabel = (disabled: boolean) =>
  css({
    flex: 1,
    color: disabled ? inputColors.disabled : inputColors.label,
  });

/**
 * Component
 */
const Checkbox: React.FC<CheckboxProps> = ({
  disabled = false,
  label,
  ...inputProps
}) => (
  <CheckboxContainer>
    <CheckboxInput
      id={createId(label)}
      disabled={disabled}
      type="checkbox"
      {...inputProps}
    />
    <Label
      htmlFor={createId(label)}
      css={checkboxLabel(disabled)}
      text={label}
      inline
    />
  </CheckboxContainer>
);

export { Checkbox, CheckboxProps };